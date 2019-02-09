import React from "react";

const Signup = ({
  signupModal,
  handleLogin,
  handleSignup,
  handleClose,
  show,
  children
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <form>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}

          <button
            type="button"
            className="btn btn-success"
            id="sign-up-button"
            // onClick={handleSignup}
          >
            SignUp
          </button>
          <hr className="login-hr" />
          <button
            type="button"
            className="btn btn-success"
            id="login-button-at-signup"
            onClick={signupModal}
          >
            Login
          </button>
          <span onClick={handleClose}>&#x2715;</span>
        </section>
      </div>
    </form>
  );
};

export default Signup;
