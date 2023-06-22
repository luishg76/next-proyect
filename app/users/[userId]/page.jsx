async function fetchUser(userid) {
  const resp = await fetch(`https://reqres.in/api/users/${userid}`);
  const data = await resp.json();
  return data.data;
}

export default async function UserDetailsPage({ params }) {
  const user = await fetchUser(params["userId"]);
  return (
    <div className="container">
      <h1>User Details</h1>      
      <figure className="flex bg-slate-100 px-4 sm:px-0 border rounded-md">
        <img className="w-40 h-40 p-2" src={user.avatar} alt="" width={250} height={250}></img>
        <ul>
          <li><label>ID:</label><span>{user.id}</span></li>
          <li><label>Full Name:</label><span>{user.first_name+user.last_name}</span></li>
        </ul>
        
        <p>{user.first_name}</p>
      </figure>
    </div>
  );
}
