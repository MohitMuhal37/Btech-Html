
            const btn = document.querySelector("button");
        function checkOddEven() {
            
        const inputVal = document.getElementById('numberInput').value;
            const resultDiv = document.getElementById('result');
            // Check if input is empty
            if (inputVal === "") {
                resultDiv.style.color = 'red';
                resultDiv.textContent = 'Please enter a valid number.';
                return;
            }
            else{
            const num = parseInt(inputVal, 10);

            // Check if number is even or odd
            if (num % 2 === 0) {
                resultDiv.style.color = 'green';
                resultDiv.textContent = `${num} is Even.`;
            } else {
                resultDiv.style.color = 'orange';
                resultDiv.textContent = `${num} is Odd.`;
            }

        }
    }
        btn.addEventListener("click",checkOddEven)