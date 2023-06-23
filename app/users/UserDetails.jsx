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
        className="w-24 sm:w-96 h-24 sm:h-auto rounded-full sm:rounded-none mx-auto"
        src={avatar}
        alt=""
        width={128}
        height={128}
      ></img>
      <figcaption className="p-2 text-center sm:text-left">
        <div className="my-2">
          <p className="text-xl text-slate-900">
            {first_name + " " + last_name}
          </p>
          <a className="text-blue-500" href={email}>
            {email}
          </a>
        </div>

        <p className="text-sm font-light space-y-4">{support.text}</p>
        <a className="text-blue-500" href={support.url}>
          {support.url}
        </a>
      </figcaption>
    </figure>
  );
}
