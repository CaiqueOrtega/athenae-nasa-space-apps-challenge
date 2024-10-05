import { Link, Outlet } from "react-router-dom";

export default function NavBar(){
  return(
    <div className=" w-screen h-screen overflow-hidden">
      <div className="bg-black w-full h-20 px-4 group border-white border-b">
        <div className="flex space-x-10 items-center h-full">
          <Link
            to={`start`}
            className="text-white text-2xl group-hover:underline"
          >
            Sistema Solar
          </Link>
          <Link
            to={``}
            className="text-white text-2xl group-hover:underline"
          >
            Planetas
          </Link>
          <Link
            to={``}
            className="text-white text-2xl group-hover:underline"
          >
            Asteroides
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}