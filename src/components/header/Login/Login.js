import React from 'react';
import './Login.scss';
import lock from '../../../icons/lock.svg';

const Login = () => (
  <div className="login">
    <button
      type="button"
      className="login__button"
    >
      <img
        alt="lock"
        src={lock}
        className="login__button--lock"
      />
      Увійти
    </button>
  </div>
);

export default Login;
