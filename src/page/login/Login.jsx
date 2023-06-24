import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    navigate("/")
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Myasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Myasocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
                {/* <CircularProgress color="white" size="20px" /> */}
              {isFetching ? (
                <p>Fetching...</p>
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
                {/* <CircularProgress color="white" size="20px" /> */}
              {isFetching ? (
                <p>Fetching...</p>
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
