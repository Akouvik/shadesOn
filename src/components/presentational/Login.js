//https://www.youtube.com/watch?v=TGQi4LgoRRw
//https://alligator.io/react/modal-component/
import React from "react";

const Modal = ({
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
          <button type="button" className="btn btn-success login">
            Login
          </button>
          <hr className="login-hr" />
          <button
            type="button"
            className="btn btn-success"
            id="signup-button-at-login"
            onClick={signupModal}
          >
            SignUp
          </button>
          <span onClick={handleClose}>&#x2715;</span>
        </section>
      </div>
    </form>
  );
};

export default Modal;
