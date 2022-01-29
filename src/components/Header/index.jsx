import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const history = useHistory();
  return (
    <nav className="navbar">
      <ul className="navbar-item">
        <li onClick={() => history.push('/mapa')}>Mapa</li>
        <li onClick={() => history.push('/empresas')}>Empresas</li>
        <li onClick={() => history.push('/produtos')}>Produtos</li>
      </ul>
    </nav>
  );
};

export default Header;
