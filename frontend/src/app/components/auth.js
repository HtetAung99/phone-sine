import { CircleUserRound, UserCheck } from "lucide-react";
import { useState, useContext } from "react"; // Added import statement for useContext
import Login from "./auth/login";
import Register from "./auth/register";
import { AuthContext } from "../contexts/authContext";

const Auth = () => {
  const [isClickedlogin, setIsClickedlogin] = useState(false);
  const [isClickedSignup, setIsClickedSignup] = useState(false);
  const { userName, userIsLogin } = useContext(AuthContext);

  const openlogincard = () => {
    setIsClickedlogin(true);
  };

  const closeallcard = () => {
    setIsClickedlogin(false);
    setIsClickedSignup(false);
  };

  const handlesignup = () => {
    setIsClickedlogin(false);
    setIsClickedSignup(true);
  };

  const handlelogin = () => {
    setIsClickedSignup(false);
    setIsClickedlogin(true);
  };

  return (
    <div className="flex text-sm items-center">
      {userIsLogin ? (
        <>
          <button onClick={openlogincard} className="p-1.5">
            <UserCheck className="w-5 h-5 text-neutral-600 hover:text-black" />
          </button>
          <button>{userName}</button>
        </>
      ) : (
        <>
          <button onClick={openlogincard} className="p-1.5">
            <CircleUserRound className="w-5 h-5 text-neutral-600 hover:text-black" />
          </button>
          {isClickedlogin && (
            <Login closeallcard={closeallcard} handlesignup={handlesignup} />
          )}
          {isClickedSignup && (
            <Register closeallcard={closeallcard} handlelogin={handlelogin} />
          )}
        </>
      )}
    </div>
  );
};

export default Auth;
