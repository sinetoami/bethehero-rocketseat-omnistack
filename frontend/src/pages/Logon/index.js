import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Logon() {
  const [ id, setId ] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();


    try {
      const response = await api.post('sessions', { id });
      console.log(response.data.name);
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch(err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input 
            type="text" 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>

          {/* para que o React tenho o comportamento de SPA ao clicar */}
          {/* em algum link, usa-se o componente Link do react-router-dom */}
          {/* <a href="/register"> */}
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
          {/* </a> */}
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />

    </div>
  );
};
