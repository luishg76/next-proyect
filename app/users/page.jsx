import UserItem from "@/app/users/UserItem";
import Link from "next/link"

async function fetchUsers() {
  const resp = await fetch("https://reqres.in/api/users?page=2");
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
               <UserItem userId={user.id} first_name={user.first_name} email={user.email} avatar={user.avatar}/>
          )) 
        }        
      </ul>
    </div>
  );
}