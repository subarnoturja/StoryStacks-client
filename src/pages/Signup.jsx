import { useContext } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {

    const { setUser, createUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleSignUp = (event) => { 
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success("Registration Successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
              navigate(from, { replace: true })
        })
        .catch((error) => {
            console.log(error.message);
            toast.error("Invalid Credentials", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
        }); 
    }
    // Google Login
    const handleGoogleLogin = () => {
        googleLogin().then((result) => {
          setUser(result.user);
          navigate(from, { replace: true })
          toast.success("Sign Up Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
      };

  return (
    <div className="flex justify-center items-center bg-gray-100 font-[sans-serif] h-full md:min-h-screen p-4">
      <div className="grid justify-center max-w-md mx-auto">
        <div>
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full object-cover rounded-2xl"
            alt="login-image"
          />
        </div>

        <form onSubmit={handleSignUp} className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-blue-600">Sign up</h3>
          </div>

          <div className="relative flex items-center">
            <input
              name="email"
              type="text"
              required
              className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
              placeholder="Enter email"
            />
            <AiOutlineMail size={22} />
          </div>

          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
              <IoEyeOutline size={22} />
            </div>
          </div>
          <div className="mt-12">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
            <p className="text-sm text-center mt-6">
              Don't have an account{" "}
              <Link
                href="javascript:void(0);"
                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="space-x-6 flex justify-center">
            <button onClick={handleGoogleLogin} className="btn border w-full border-none outline-none">
            <FcGoogle className="text-4xl"></FcGoogle>
                <p>Sign Up Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
