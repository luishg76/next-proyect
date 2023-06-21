export default function UserItem({first_name, email, avatar}) {
    return (
      <>
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
      </>
    );
  }
  