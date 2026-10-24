//  const btn = document.querySelector("button");

//  const toggle = (e) => {
//         e.target.classList.toggle("caution");
//  }

//  btn.addEventListener("click",toggle());

const posts = [
    {title:"post 1",body:"This is post 1"},
    {title:"post 2",body:"This is post 2"}
];

function createPost(post,cb){
    setTimeout(() => {
        posts.push(post);
        cb()
    },4000);
}

function getPost(){
    setTimeout(()=>{
        posts.forEach((post) => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${post.title} - </strong>${post.body}`
            document.querySelector("#posts").appendChild(div);
        });
    },1000);
}
createPost({title:"post 3",body:"This is post 3"},getPost)