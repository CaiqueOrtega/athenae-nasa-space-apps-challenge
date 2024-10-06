import { Search } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <div className="bg-black w-full h-20 px-4 group border-white border-b">
        <div className="flex justify-between items-center h-full">
          <div className="flex space-x-8 h-full">
            <Link
              to={`start`}
              className="text-white hover:text-yellow-400 hover:bg-neutral-300 h-full flex items-center px-2"
            >
              Solar System
            </Link>
            <Link
              to={``}
              className="text-white  hover:text-yellow-400 hover:bg-neutral-300 h-full flex items-center px-2"
            >
              Planet
            </Link>
            <Link
              to={``}
              className="text-white hover:text-yellow-400 hover:bg-neutral-300 h-full flex items-center px-2"
            >
              Asteroides
            </Link>
          </div>

          <div className="relative">
            <Search className="text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              className="bg-transparent border-2 border-white rounded-md py-2 px-8 pl-10"
              placeholder="Search..."
            />
          </div>
        </div>

      </div>
      <Outlet />
    </div>
  )
}