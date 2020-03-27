import React, { useState, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import logoImg  from '../../assets/logo.svg';
import './styles.css';

export default function Profile() {
  // o valor no parâmetro do useState precisa ser do mesmo tipo
  // do objeto pesquisado/buscado/desejado.
  //
  // incidents é do tipo array, logo useState recebe um array também.
  const [ incidents, setIncidents ] = useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ ongId ]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incidents => incidents.id !== id));
    } catch(err) {
      alert('Erro ao deletar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, { ongName }</span>

        <Link className="btn" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        {/* incluindo código javascript: */}
        {incidents.map(incident => (
          // key={incident.id} ajuda o react a identificar o item que será
          // modificado ou deletado. Sempre colocar a chave de valor único.
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{ incident.title }</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{ incident.description }</p>

            <strong>VALOR:</strong>
            {/* Intl - classe builtin do javascript (internationalization) */}
            {/* NumberFormat - recebe o idioma e o estilo de formatação. No caso, moeda (currency) */}
            <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p>

            <button onClick={() => handleDeleteIncident(incident.id)}type="button">
             <FiTrash2 size={20} color="#a8a8b3 "/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
