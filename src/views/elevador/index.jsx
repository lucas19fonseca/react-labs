import { useRef } from "react";


export default function Elevador() {
  const cabineRef = useRef(null);

  function moverElevador(andar) {
    if (!cabineRef.current) return;

    if (andar === 1) {
      cabineRef.current.style.bottom = "216px";
    } else if (andar === 2) {
      cabineRef.current.style.bottom = "116px";
    } else if (andar === 3) {
      cabineRef.current.style.bottom = "0px";
    }
  }

  return (
    <>
      <style>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .elevador {
          position: relative;
          width: 100px;
          height: 320px;
          background-color: #ccc;
          border: 2px solid #333;
          margin-bottom: 20px;
        }

        .andares {
          position: absolute;
          right: -30px;
          top: 0;
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          height: 100%;
        }

        .andar {
          height: 100px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #333;
        }

        .cabine {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100px;
          background-color: #444;
          transition: bottom 0.5s;
        }

        .botoes {
          display: flex;
          gap: 10px;
        }

        .botoes button {
          padding: 8px 16px;
          border: none;
          background-color: #333;
          color: white;
          cursor: pointer;
          border-radius: 4px;
        }

        .botoes button:hover {
          background-color: #555;
        }
      `}</style>

      <div className="container">
        <div className="elevador">
          <div className="andares">
            <div className="andar" id="andar-3">3</div>
            <div className="andar" id="andar-2">2</div>
            <div className="andar" id="andar-1">1</div>
          </div>
          <div className="cabine" ref={cabineRef}></div>
        </div>

        <div className="botoes">
          <button onClick={() => moverElevador(3)}>3º</button>
          <button onClick={() => moverElevador(2)}>2º</button>
          <button onClick={() => moverElevador(1)}>1º</button>
        </div>
      </div>
      <a 
            href="/" 
            className="fixed top-4 left-4 z-50 group flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
            <svg 
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" 
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
        </a>
    </>
  );
}
