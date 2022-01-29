import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FormProduct = (props) => {
  const history = useHistory();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [custo, setCusto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [grupo, setGrupo] = useState('');
  const [fornecedores, setFornecedores] = useState([]);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    async function getFornecedoresAndGrupos() {
      try {
        let responseFornecedores = await fetch(
          'http://localhost:3333/fornecedores'
        );
        responseFornecedores = await responseFornecedores.json();
        setFornecedores(responseFornecedores);

        let responseGrupos = await fetch('http://localhost:3333/grupos');
        responseGrupos = await responseGrupos.json();
        setGrupos(responseGrupos);
      } catch (error) {
        alert(
          'Ocorreu um erro na aplicação. Contate o administrador do sistema!'
        );
      }
    }
    getFornecedoresAndGrupos();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!url) {
        alert('URL da imagem é obrigatório.');
        return;
      } else if (!name) {
        alert('Nome do produto é obrigatório.');
        return;
      } else if (!custo) {
        alert('Custo unitário é obrigatório.');
        return;
      } else if (!descricao) {
        alert('Descrição do produto é obrigatório.');
        return;
      } else if (!fornecedor) {
        alert('Fornecedor é obrigatório.');
        return;
      } else if (!grupo) {
        alert('Grupo de produto é obrigatório.');
        return;
      }

      await fetch('http://localhost:3333/produtos', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          name,
          custo,
          descricao,
          fornecedor,
          grupo,
        }),
      });
      alert('Produto cadastrado com sucesso!');
      history.push('/mapa');
    } catch (error) {
      alert('Ocorreu um erro na aplicação. Contate o administrador!');
    }
  };

  return (
    <div className="content">
      <form className="container-form-product" onSubmit={handleSubmit}>
        <h1>Cadastro de Produto</h1>

        <div className="container-input">
          <label className="label">
            URL da imagem*
            <div>
              <input
                className="input"
                type="text"
                placeholder="Insira a URL do produto"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Nome Produto*
            {url && <img className="image-product" src={url} alt="Produto" />}
            <input
              className="input"
              type="text"
              placeholder="Cerveja Coruja"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="label">
            Preço unitário*
            <input
              className="input"
              type="number"
              placeholder="R$ 23,90"
              value={custo}
              onChange={(event) => setCusto(event.target.value)}
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Descrição*
            <textarea
              className="input"
              rows={4}
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              placeholder="Uma cerveja artesanal aromática, leve e refrescante. Assim é a Corujinha IPA. Aromas frutados que remetem a frutas tropicais como abacaxi e tangerina, corpo baixo mas considerável amargor, próprio do estilo."
            />
          </label>
        </div>
        <div className="container-input">
          <label className="label">
            Fornecedor*
            <select
              className="input"
              value={fornecedor}
              onChange={(event) => setFornecedor(event.target.value)}
            >
              <option value=""></option>
              {fornecedores.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
            Categoria*
            <select
              className="input"
              value={grupo}
              onChange={(event) => setGrupo(event.target.value)}
            >
              <option value=""></option>
              {grupos.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </label>
        </div>
        <hr />
        <div>
          <button className="btn" type="submit">
            Cadastrar
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

export default FormProduct;
