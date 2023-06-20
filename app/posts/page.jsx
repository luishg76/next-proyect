async function fetchPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return data;
}

export default async function Posts() {
  const posts= await fetchPosts()
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {
          posts.map((post)=>(
             <li key={post.id}>Title: {post.title}</li>
          ))         
        }        
      </ul>
    </div>
  );
}
