<?php
// Start session and error reporting configuration
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database configuration
$host = 'localhost';
$db   = 'user_system';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die("Database Connection Failed: " . $e->getMessage());
}

$message = '';
$action = isset($_GET['action']) ? $_GET['action'] : 'login';

// -------------------------------------------------------------------------
// COOKIE CHECK (Remember Me Logic)
// -------------------------------------------------------------------------
if (!isset($_SESSION['user_id']) && isset($_COOKIE['remember_user'])) {
    $_SESSION['user_id'] = $_COOKIE['remember_user_id'] ?? 1; // Fallback simulation
    $_SESSION['username'] = $_COOKIE['remember_user'];
}

// -------------------------------------------------------------------------
// FORM HANDLING
// -------------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (isset($_POST['register'])) {
        // --- REGISTRATION LOGIC ---
        if (!empty($username) && !empty($password)) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            try {
                $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
                $stmt->execute([$username, $hashedPassword]);
                $message = "<p class='success'>Registration successful! Please login.</p>";
                $action = 'login';
            } catch (PDOException $e) {
                $message = "<p class='error'>Error: Username already exists.</p>";
            }
        } else {
            $message = "<p class='error'>All fields are required for registration.</p>";
        }
    } elseif (isset($_POST['login'])) {
        // --- LOGIN LOGIC ---
        if (!empty($username) && !empty($password)) {
            $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->execute([$username]);
            $dbUser = $stmt->fetch();

            if ($dbUser && password_verify($password, $dbUser['password'])) {
                // Set Session
                $_SESSION['user_id'] = $dbUser['id'];
                $_SESSION['username'] = $dbUser['username'];

                // Handle Cookie ('Remember Me')
                if (isset($_POST['remember'])) {
                    setcookie('remember_user', $dbUser['username'], time() + (86400 * 30), "/"); // 30 days
                    setcookie('remember_user_id', $dbUser['id'], time() + (86400 * 30), "/");
                }

                header("Location: " . $_SERVER['PHP_SELF']);
                exit();
            } else {
                $message = "<p class='error'>Invalid username or password.</p>";
                $action = 'login';
            }
        } else {
            $message = "<p class='error'>All fields are required for login.</p>";
        }
    }
}

// --- LOGOUT LOGIC ---
if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    // Clear cookies
    setcookie('remember_user', '', time() - 3600, "/");
    setcookie('remember_user_id', '', time() - 3600, "/");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login, Registration, Sessions & Cookies</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 350px;
        }
        h2 { text-align: center; color: #333; margin-top: 0; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="password"] {
            width: 100%; padding: 8px; box-sizing: border-box;
            border: 1px solid #ccc; border-radius: 4px;
        }
        button {
            background-color: #007BFF; color: white; border: none;
            padding: 10px; width: 100%; font-size: 16px; border-radius: 4px; cursor: pointer;
        }
        button:hover { background-color: #0056b3; }
        .error { color: red; font-size: 14px; text-align: center; }
        .success { color: green; font-size: 14px; text-align: center; }
        .switch-link { text-align: center; margin-top: 15px; font-size: 14px; }
        .switch-link a { color: #007BFF; text-decoration: none; }
        .switch-link a:hover { text-decoration: underline; }
        .checkbox-group { display: flex; align-items: center; gap: 8px; font-size: 14px; }
        .checkbox-group input { width: auto; }
    </style>
</head>
<body>

<div class="card">
    <?php echo $message; ?>

    <?php if (isset($_SESSION['user_id'])): ?>
        <!-- ================= DASHBOARD (LOGGED IN) ================= -->
        <h2>Welcome Dashboard</h2>
        <p>Hello, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>!</p>
        <p style="font-size: 13px; color: #666;">Your session is active. If you checked 'Remember Me', a cookie has also been stored.</p>
        <br>
        <a href="?logout=true"><button style="background-color: #dc3545;">Logout</button></a>

    <?php else: ?>
        <?php if ($action === 'register'): ?>
            <!-- ================= REGISTRATION FORM ================= -->
            <h2>Register</h2>
            <form action="?action=register" method="POST">
                <div class="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" required>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" required>
                </div>
                <button type="submit" name="register">Register</button>
            </form>
            <div class="switch-link">
                Already have an account? <a href="?action=login">Login here</a>
            </div>

        <?php else: ?>
            <!-- ================= LOGIN FORM ================= -->
            <h2>Login</h2>
            <form action="?action=login" method="POST">
                <div class="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" required>
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" required>
                </div>
                <div class="form-group checkbox-group">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember" style="margin-bottom:0; font-weight:normal;">Remember Me (Cookie)</label>
                </div>
                <button type="submit" name="login">Login</button>
            </form>
            <div class="switch-link">
                Don't have an account? <a href="?action=register">Register here</a>
            </div>
        <?php endif; ?>
    <?php endif; ?>
</div>

</body>
</html>