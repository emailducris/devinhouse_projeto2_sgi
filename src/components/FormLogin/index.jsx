import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FormLogin = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!email) {
        alert('Email é obrigatório.');
        return;
      } else if (!senha) {
        alert('Senha é obrigatório.');
        return;
      }

      history.push('/mapa');
    } catch (error) {
      alert(
        'Ocorreu um erro na aplicação. Contate o administrador do sistema!'
      );
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1>LOGIN</h1>
        <div>
          <form className="container-form" onSubmit={handleSubmit}>
            Email*
            <label className="label">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            Senha*
            <label className="label">
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </label>
            <div className="container-input ">
              <button className="btn-login" type="submit">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <h2>Sistema de Gestão Integrado</h2>
      </div>
    </div>
  );
};

export default FormLogin;
