import { useEffect, useRef } from "react";


export default function Semaforo() {
  const luzesRef = useRef([]);

  useEffect(() => {
    let luzAtual = 0;

    function mudarLuz() {
      luzesRef.current.forEach((luz) => luz.classList.remove("active"));
      luzesRef.current[luzAtual].classList.add("active");
      luzAtual = (luzAtual + 1) % luzesRef.current.length;
    }

    const intervalo = setInterval(mudarLuz, 2000);
    mudarLuz(); // inicial

    return () => clearInterval(intervalo); // cleanup no unmount
  }, []);

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

        .semaforo {
          display: flex;
          flex-direction: column;
          width: 100px;
          height: 300px;
          background-color: #2b2b2b;
          border-radius: 20px;
          padding: 10px;
          justify-content: space-around;
        }

        .luz {
          width: 80px;
          height: 80px;
          background-color: #333;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #red.active {
          background-color: red;
        }

        #yellow.active {
          background-color: yellow;
        }

        #green.active {
          background-color: green;
        }
      `}</style>

      <div className="semaforo">
        <div
          id="red"
          className="luz"
          ref={(el) => (luzesRef.current[0] = el)}
        ></div>
        <div
          id="yellow"
          className="luz"
          ref={(el) => (luzesRef.current[1] = el)}
        ></div>
        <div
          id="green"
          className="luz"
          ref={(el) => (luzesRef.current[2] = el)}
        ></div>
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
