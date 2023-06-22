'use client'
import { useRouter } from "next/navigation";

export default function UserItem({userId,first_name, email, avatar}) {
    const route=useRouter()
    return (
      <li key={userId} className="flex justify-between py-5" onClick={()=>{route.push(`/users/${userId}`)}}>
        <div className="flex gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={avatar} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {first_name}
            </p>
            <p className="text-xs font-medium leading-6 text-gray-500">
              {email}
            </p>           
          </div>
        </div>      
      </li>
    );
  }
  