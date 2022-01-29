import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FormEnterprise = (props) => {
  const history = useHistory();
  const [razao, setRazao] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [fantasia, setFantasia] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!razao) {
        alert('Razão social é obrigatório.');
        return;
      } else if (!cnpj) {
        alert('CNPJ é obrigatório.');
        return;
      } else if (!fantasia) {
        alert('Nome fantasia é obrigatório.');
        return;
      } else if (!email) {
        alert('Email é obrigatório.');
        return;
      } else if (!cep) {
        alert('CEP é obrigatório.');
        return;
      } else if (!endereco) {
        alert('Endereço é obrigatório.');
        return;
      } else if (!numero) {
        alert('Numero é obrigatório.');
        return;
      } else if (!cidade) {
        alert('Cidade é obrigatório.');
        return;
      } else if (!longitude) {
        alert('Longitude é obrigatório.');
        return;
      } else if (!latitude) {
        alert('Latitude é obrigatório.');
        return;
      }

      await fetch('http://localhost:3333/empresas', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razao,
          cnpj,
          fantasia,
          email,
          cep,
          endereco,
          numero,
          cidade,
          latitude,
          longitude,
        }),
      });
      alert('Empresa cadastrada com sucesso!');
      history.push('/mapa');
    } catch (error) {
      alert('Desculpe o transtorno. Estamos resolvendo o problema !');
    }
  };

  return (
    <div className="content">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1>Cadastro Empresa</h1>
        <hr />
        <div className="container-input">
          <label className="label">
            Razão social*
            <input
              className="input"
              type="text"
              placeholder="Supermercado Paripassu Involves Ltda."
              value={razao}
              onChange={(event) => setRazao(event.target.value)}
            />
          </label>
          <label className="label">
            Nome fantasia*
            <input
              className="input"
              type="text"
              placeholder="Super Parisinho Involves"
              value={fantasia}
              onChange={(event) => setFantasia(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            CNPJ*
            <input
              className="input"
              type="text"
              placeholder="90.701.323/0001-03"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />
          </label>
          <label className="label">
            E-mail*
            <input
              className="input"
              type="email"
              placeholder="superparipassuinvolves@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            CEP*
            <input
              className="input"
              type="text"
              placeholder="65042-010"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />
          </label>
          <label className="label">
            Endereço*
            <input
              className="input"
              type="text"
              placeholder="Rua Mario Coriolando Pontes"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Número*
            <input
              className="input"
              type="number"
              placeholder="8"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
          </label>
          <label className="label">
            Bairro*
            <input
              className="input"
              type="text"
              placeholder="Buriti"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
            />
          </label>
          <label className="label">
            Cidade*
            <input
              className="input"
              type="text"
              placeholder="Pacajas"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Complemento
            <input
              className="input"
              type="text"
              placeholder="Próximo a praça central"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Latitude*
            <input
              className="input"
              type="number"
              placeholder="-4.095229499999999"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            />
          </label>
          <label className="label">
            Longitude*
            <input
              className="input"
              type="number"
              placeholder="-38.45500829"
              value={longitude}
              onChange={(event) => setlongitude(event.target.value)}
            />
          </label>
        </div>
        <hr />
        <div>
          <button className="btn" type="submit">
            Salvar
          </button>
          <button
            onClick={() => history.push('/mapa')}
            className="btn"
            type="button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEnterprise;
