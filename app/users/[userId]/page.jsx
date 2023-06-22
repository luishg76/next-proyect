import UserDetails from "../UserDetails";

async function fetchUser(userid) {
  const resp = await fetch(`https://reqres.in/api/users/${userid}`);
  const data = await resp.json();
  return data;
}

export default async function UserDetailsPage({ params }) {
  const user = await fetchUser(params.userId);  
  return (
    <div className="container">
      <h1>User Details</h1>
      <UserDetails first_name={user.data.first_name} last_name={user.data.last_name} avatar={user.data.avatar} support={user.support}/>
    </div>
  );
}
