export default function UserDetails({
  email,
  first_name,
  last_name,
  avatar,
  support,
}) {
  return (
    <figure className="sm:flex bg-slate-100 border rounded-xl p-2 sm:p-0 overflow-clip">
      <img
        className="w-20 sm:w-96 h-20 sm:h-auto rounded-full sm:rounded-none mx-auto"
        src={avatar}
        alt=""
        width={128}
        height={128}
      ></img>
      <figcaption className="p-2 text-center sm:text-left">
        <div className="mb-2">
          <p className="text-xs sm:text-xl font-bold text-slate-900">
            {first_name} {last_name}
          </p>
          <a
            className="text-xs sm:text-sm sm:space-y-4 text-blue-500"
            href={email}
          >
            {email}
          </a>
        </div>
        <div>
          <p className="text-xs sm:text-xl font-light sm:space-y-4">
            {support.text}
          </p>
          <a
            className="text-xs sm:text-sm sm:space-y-4 text-blue-500"
            href={support.url}
          >
            {support.url}
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
