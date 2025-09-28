import Dorilenx from "../../assets/dorilenx.jpeg";
import Miorrelax from "../../assets/miorrelax.jpeg";
import Ozempic from "../../assets/ozempic.jpeg";
import Tylenol from "../../assets/tylenol.jpeg";
import Ciflogex from "../../assets/ciflogex.png";
import { Link } from "react-router-dom";

export default function Cuidado() {
  const produtos = [
    { nome: "Doril", img: Dorilenx },
    { nome: "Miorrelax", img: Miorrelax },
    { nome: "Ozempic", img: Ozempic },
    { nome: "Tylenol", img: Tylenol },
    { nome: "Ciflogex", img: Ciflogex },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }
        header {
          background: #ffffffcc;
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          height: 5em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }
        .info {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #28a745; 
        }
        .pesquisa {
          width: 22em;
          height: 2.8em;
          border-radius: 18px;
          padding-left: 1em;
          border: 1px solid #ccc;
        }
        .hambu {
          width: 35px;
          height: 35px;
        }
        .user-carrinho {
          display: flex;
          gap: 1rem;
        }
        .cadastro, .carrinho {
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        .cadastro img, .carrinho img {
          width: 30px;
          height: 30px;
        }
        .produtos-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 2rem;
          justify-content: center;
        }
        .card {
          background-color: #fff;
          border-radius: 12px;
          overflow: hidden;
          width: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .card-img-top {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }
        .card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #28a745;
        }
        .card-text {
          font-size: 0.95rem;
          margin-bottom: 0.8rem;
        }
        .btn-primary {
          background-color: #28a745;
          border: none;
          padding: 0.6rem;
          border-radius: 6px;
          color: #fff;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .btn-primary:hover {
          background-color: #218838;
        }
        footer {
          background-color: #28a745;
          color: #fff;
          text-align: center;
          padding: 14px 0;
          margin-top: 30px;
        }
        @media (max-width: 768px) {
          header {
            flex-wrap: wrap;
            height: auto;
            gap: 1rem;
            padding: 1rem;
          }
          .pesquisa {
            width: 100%;
          }
          .user-carrinho {
            flex-direction: row;
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>

      <header>
        <div className="info">
          <a href="#">
            <img
              src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
              alt="Menu"
              className="hambu"
            />
          </a>
          <h2>Cuidado Simples</h2>
        </div>
        <input type="text" placeholder="Buscar item" className="pesquisa" />
        <div className="user-carrinho">
          <a className="cadastro" href="cadastro.html">
            <img
              src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000"
              alt="Cadastro"
            />
            Cadastro
          </a>
          <a className="carrinho" href="#">
            <img
              src="https://img.icons8.com/?size=100&id=15893&format=png&color=000000"
              alt="Carrinho"
            />
          </a>
        </div>
      </header>
      <Link 
        to="/" 
        className="fixed top-25 left-4 z-50 group flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <svg 
          className="w-7 h-9 group-hover:-translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        <span className="font-medium text-sm">Home</span>
      </Link>

      <main>
        <div className="produtos-container">
          {produtos.map((produto, i) => (
            <div className="card" key={i}>
              <img
                src={produto.img}
                className="card-img-top"
                alt={produto.nome}
              />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">
                  Descrição sobre {produto.nome}.
                </p>
                <p className="fw-bold">R$50</p>
                <button type="button" className="btn-primary">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>Lucas Fonseca - Curso React (JX) - Contato: (61) 98346-2252</p>
      </footer>
    </>
  );
}