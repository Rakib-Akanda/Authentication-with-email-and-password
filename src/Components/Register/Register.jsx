import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="w-full">
      <div className=" py-10 text-center mx-10">
        <h2 className="text-3xl mb-4 ">Please Register</h2>
        <form onSubmit={handleRegister}>
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-red-400 mb-4 w-1/4 py-2"
            id=""
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-red-400 mb-4 w-1/4 py-2"
            id=""
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="border border-red-400 px-5 py-5 w-1/4 btn btn-secondary font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
