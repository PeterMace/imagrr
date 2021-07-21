import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({credential: "Demo-lition", password: 'password' }));
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
          <br />
          <form onSubmit={demoLogin}>
            <button type="submit">Demo User Login</button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;