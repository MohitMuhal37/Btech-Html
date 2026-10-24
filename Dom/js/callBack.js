//  const btn = document.querySelector("button");

//  const toggle = (e) => {
//         e.target.classList.toggle("caution");
//  }

//  btn.addEventListener("click",toggle());

const post = [
    {title:"post 1",body:"This is post 1"},
    {title:"post 2",body:"This is post 2"}
];

const getPost = () => {
    setTimeout(()=>{
        post.forEach((post) => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${post.title} - </strong>${post.body}`
            document.querySelector("#posts").appendChild(div);
        })
    },2000);
}

getPost();