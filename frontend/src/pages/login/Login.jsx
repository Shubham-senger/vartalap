import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import AIImage from '../../assets/AI.png'; // Make sure to have the correct path to your image
import RightImage from '../../assets/jean-philippe-delberghe-75xPHEQBmvA-unsplash.jpg'; // Make sure to have the correct path to your image
import './Login.css'; // Import the CSS file for the floating effect

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src={RightImage} alt="Customer" className="full-height-img" />
        <img src={AIImage} alt="AI" className="floating-img AIimg" />
      </div>
      <div className="right-section">
        <div className="w-full max-w-md p-6 rounded-lg shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center ">
            Login
            <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="coolinput">
              <label className="text">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="coolinput mt-4">
              <label className="text">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              {"Don't"} have an account?
            </Link>

            <div>
              <button className="button" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
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

export default Login;
