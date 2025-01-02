import React from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/amazon-logo-black.png"
const Auth = () => {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
      
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input/>
          </div>
          <button className={classes.login__signInButton}>Sign In</button>

          </form>

        {/* agreement */}
        <p>
          By signing-in you agreee to the AMAZON FAKE CLONE conditions of use &
          sale. please see our Privacy Notice, Cookies Notice and Interest-Based
          Ads Notice.
        </p>

        {/* create account btn */}
        <button className={classes.login__registerButton}>
        Create Your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
