export default function UserDetails({first_name, last_name, avatar, support}) {
  return (
    <figure className="bg-slate-100 border rounded-md">
      <img
        className="w-40 h-auto rounded-none sm:overflow-clip"
        src={avatar}
        alt=""
        width={128}
        height={128}
      ></img>
      <figcaption className="px-2 text-left">
        <a className="text-blue-500" href='support.url'>{support.url}</a>
        <p>{support.text}</p>
        <div className="my-5">
          <span className="text-xl text-slate-900">
            {first_name + " " + last_name}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
