import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../utils/firebase.js';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const userAuth = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    
    setLoading(false);
  };

  return (
    loading ? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
      <div className='login'>
        <img src={logo} className='login-logo' alt="Netflix Logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form onSubmit={userAuth}>
            {signState === "Sign Up" && (
              <>
                <label htmlFor="nameInput">Your Name</label>
                <input
                  id="nameInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder='Your name'
                  required
                />
              </>
            )}

            <label htmlFor="emailInput">Email</label>
            <input
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Email'
              required
            />

            <label htmlFor="passwordInput">Password</label>
            <input
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Password'
              required
            />

            <button type='submit'>{signState}</button>

            <div className="form-help">
              <div className="remember">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
  );
};

export default Login;
