import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import AIImage from '../../assets/AI.png'; // Make sure to have the correct path to your image
import RightImage from '../../assets/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg';
import '../login/Login.css'; // Import the same CSS file as Login

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);

    setInputs({fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",})
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={RightImage} alt="Customer" className="full-height-img" />
        <img src={AIImage} alt="AI" className="floating-img" />
      </div>
      <div className="right-section">
        <div className="w-full max-w-md p-6 rounded-lg shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center">
            Sign Up
            <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="coolinput">
              <label className="text">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>

            <div className="coolinput mt-4">
              <label className="text">Username</label>
              <input
                type="text"
                placeholder="johndoe"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>

            <div className="coolinput mt-4">
              <label className="text">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>

            <div className="coolinput mt-4">
              <label className="text">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>

            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              Already have an account?
            </Link>

            <div>
              <button className="button" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                <div className="hoverEffect">
                  <div></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
