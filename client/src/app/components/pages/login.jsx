import React, { useState } from "react";
import LoginForm from "../../ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../../ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };
  return (
    <div className="form-section">
      <div className="login-form">
        {formType === "register" ? (
          <>
            <h2 className="login-form_title">Регистрация</h2>
            <div className="login-form_content">
              <RegisterForm />
              <p className="login-form_text">
                Если у вас уже есть аккаунт, <br />
                нажмите
                <a role="button" onClick={toggleFormType}>
                  Войти
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="login-form_title">Вход</h2>
            <div className="login-form_content">
              <LoginForm />
              <p className="login-form_text">
                Если у вас нет аккаунта, нажмите
                <a role="button" onClick={toggleFormType}>
                  Зарегистрироваться
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
