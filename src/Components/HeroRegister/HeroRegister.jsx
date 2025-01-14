import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const acceptedTerms = e.target.terms.checked;
    // Reset Error
    setRegisterError("");
    // Reset success
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character"
      );
      return;
    } else if (!acceptedTerms) {
      setRegisterError("Please accept our terms and conditions!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");

        // update profile
        updateProfile(result.user, {
            displayName: name,
            photoURL: 'https://example.com/jane-q-user/profile.jpg'
        })
        .then(() => console.log('profile updated'))
        .catch()

        // send verification email 
        sendEmailVerification(result.user)
        .then(() => {
            alert('Please check you email and verify your account');
        })

      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 top-14"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye></FaEye>}
                </span>
                
              </div>
              <div>
                <input type="checkbox" name="terms " id="terms" />
                <label className="ml-2" htmlFor="terms">
                  Accepts our <a href="#" className="text-blue-700">Terms and Condition</a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-2">
                {registerError && (
                  <p className="text-red-700">{registerError}</p>
                )}
                {success && <p className="text-green-600">{success}</p>}
              </div>

              <p>
                Already have an account? 
                <Link to={"/login"} className="text-green-500">
                 {''} Please Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
