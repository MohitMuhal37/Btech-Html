// const btn = document.querySelector("button");

// const toggle = (e) => {
//     e.target.classList.toggle("caution");
// }

// btn.addEventListener("click",toggle);


const posts = [
    {title:"Hi i  am Post One",body :"This is Post One"},
    {title:"Hi i  am Post Two",body :"This is Post Two"}
];

const createPost = (post,cb)=> {
    setTimeout(() => {
        posts.push(post);
        cb();
        console.log(posts);
    },3000);
}

const getPost = (post) => {
    setTimeout(() => {
        posts.forEach((post) => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${post.title} - </strong> ${post.body}`
            document.querySelector("#posts").appendChild(div);
        })
    },2000);
}

createPost({title:"Hi i  am Post Three",body :"This is Post Three"},getPost)
