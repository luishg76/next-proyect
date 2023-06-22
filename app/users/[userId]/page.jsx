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
      <figure className="flex bg-slate-100 border rounded-md">
        <img
          className="w-40 h-auto overflow-clip"
          src={user.avatar}
          alt=""
          width={128}
          height={128}
        ></img>
        <figcaption className="px-2 text-left">
          <div>
            {support}

          </div>
          <div>
            <span>{user.first_name + user.last_name}</span>
          </div>           
         
        </figcaption>
      </figure>
    </div>
  );
}
