const createPost = ({title,body}) => {
    fetch("https://jsonplaceholder.typicode.com/posts",
        {method:"POST",
            body:JSON.stringify({
                title,
                body
            }),
            headers:{
                "Content-Type":"application/json",
                "token":"122"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
}
createPost({title:"My-post",body:"This is my fake body"})