import React, { useState } from 'react';
import '../styles/Cadastro.css';

function Cadastro() {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`}>
        <div className="container__form container--signup">
          <form className="form" id="form1" onSubmit={handleFormSubmit}>
            <h2 className="form__title">Dados do Usuario</h2>
            <input type="text" placeholder="Usuario" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <button className="btn" id="loginButton">Cadastrar-se</button>
          </form>
        </div>
        <div className="container__form container--signin">
          <form className="form" id="form2" onSubmit={handleFormSubmit}>
            <h2 className="form__title">Bem-vindo(a)</h2>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <a href="#" className="link">Esqueceu sua senha?</a>
            <a href="#"><button type="button" className="btn">Entrar</button></a>
          </form>
        </div>
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn" onClick={handleSignInClick}>Entrar</button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp" onClick={handleSignUpClick}>Se cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
