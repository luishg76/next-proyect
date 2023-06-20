export default function PostItems({title, body}) {
  return (
    <>
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {body}
          </p>
        </div>
      </div>      
    </>
  );
}
