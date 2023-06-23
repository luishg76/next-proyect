import UserItem from "@/app/users/UserItem";

async function fetchUsers() {
  const resp = await fetch("https://reqres.in/api/users?page=1");
  const data = await resp.json();
  return data.data;
}

export default async function UsersPage() {
   const users= await fetchUsers()
  return (
    <div>
      <h1>Users List</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {
          users.map((user)=>(
            <UserItem key={user.id} userId={user.id} first_name={user.first_name+' '+user.last_name} email={user.email} avatar={user.avatar}/>
          )) 
        }        
      </ul>
    </div>
  );
}