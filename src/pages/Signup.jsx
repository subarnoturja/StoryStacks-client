import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => { 
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
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

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
          <form onSubmit={handleSignUp} className="lg:max-w-md w-full">
            <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Sign Up</h3>
            <div className="space-y-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input name="email" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
              </div>
            </div>

            <div className="mt-12">
            <button
              type="submit"
              className="btn w-full py-2.5 px-4 text-lg font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign Up
            </button>
            </div>
            <p className="text-sm text-gray-800 mt-6">Already have an account? <Link to='/login' className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
          </form>

          <div className="h-full max-lg:mt-12">
            <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
