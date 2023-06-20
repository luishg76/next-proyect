import PostItems from "@/components/PostItems";

async function fetchAlbums() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();
  return data;
}

export default async function AlbumPage() {
  const posts= await fetchPosts()
  return (
    <div>
      <h1>Posts List</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {
          posts.map((post)=>(
             <li key={post.id} className="flex justify-between gap-x-6 py-5">
              <PostItems title={post.title} body={post.body}/>
             </li>
          ))         
        }        
      </ul>
    </div>
  );
}