import "./components/donatePage.css";
import React, { useState } from "react";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`page-container ${menuOpen ? "shifted" : ""}`}>
      <header>
        <button className={`open-menu ${menuOpen ? "hidden" : ""}`} onClick={() => setMenuOpen(true)}> ☰ Menu </button>
        
        <h1 className="page-title">Registro de arrecadações - Arkana</h1>
      </header>

      {/*Menu lateral quando está no desktop/tablet*/}
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}> ✖ </button>
        <nav>
          <ul> 
            <li> <a> Cadastrar novas contribuições </a> </li>
            <li> <a> Histórico de contribuições </a> </li>
          </ul>
        </nav>
      </aside>

      {/*Menu rodapé quando está no mobile*/}
      <nav className="mobile-nav"> 
        <button> Cadastrar novas contribuições </button>
        <button> Histórico de contribuições </button>
      </nav>

      <main> 
        <div className="card-area" >
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
      </main>
    </div>
  );
}
