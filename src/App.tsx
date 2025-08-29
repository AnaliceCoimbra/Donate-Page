import "./components/donatePage.css";

export default function App() {
  return (
    <div className="page-container">
      <header>
        <h1 className="page-title">Registro de arrecadações - Arkana</h1>
      </header>

      <div className="card-area">
        <h2>Contribuições financeiras</h2>
        <div className="donation-details">
          <div className="name">
            <label>Nome do doador/evento:</label>
            <input placeholder="Ex: Instituto ALMA" type="text" />
          </div>

          <div className="data">
            <label>Data:</label>
            <input type="date" />
          </div>

          <div className="value-donate">
            <label>Valor arrecadado:</label>
            <input placeholder="R$" type="number" />
          </div>

          <div className="goal">
            <label>Meta esperada:</label>
            <input placeholder="R$" type="number" />
          </div>

          <div className="funds">
            <label>Gastos com evento/organização:</label>
            <input placeholder="R$" type="number" />
          </div>

          <div className="files">
            <label>Anexar comprovantes</label>
            <input type="file" />
          </div>

          <button>Cadastrar arrecadação</button>
        </div>
      </div>
    </div>
  );
}
