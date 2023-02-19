import { useAuthContext } from "./hooks/useAuthContext";
import { useLogout } from "./hooks/useLogout";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="w-full">
      <div className="flex w-full justify-end py-5 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="flex gap-[1rem] text-2xl">
          {!user && (
            <>
              <Link to="/">
                <h1 className=" flex items-center justify-center h-[40px] ">
                  Home
                </h1>
              </Link>
              <Link to="/register">
                <h1 className=" flex items-center justify-center h-[40px] ">
                  SignUp
                </h1>
              </Link>
              <Link to="/login">
                <h1 className=" flex items-center justify-center  h-[40px]">
                  Login
                </h1>
              </Link>
            </>
          )}

          {user && (
            <>
              <Link to="/">
                <h1 className=" flex items-center justify-center h-[40px] ">
                  Home
                </h1>
              </Link>
              <h1 className="h-[40px]  flex justify-center items-center">
                Welcome, {user.displayName}
              </h1>
              <button
                onClick={logout}
                className="btn hover:bg-red-500 bg-red-800 rounded-lg transition-all w-[100px] h-[40px]"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
