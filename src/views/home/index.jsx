export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Meus Projetos
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20">
                    <a href="/cuidado" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-800 to-cyan-950 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 block text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-cyan-400 rounded-xl mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-cyan-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                                Cuidado Simples
                            </h3>
                            <p className="text-cyan-100 opacity-80">
                                Sistema de cuidados básicos e acompanhamento
                            </p>
                        </div>
                    </a>

                    <a href="/todo" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 block text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-400 rounded-xl mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                                Todo List
                            </h3>
                            <p className="text-blue-100 opacity-80">
                                Organize suas tarefas de forma eficiente
                            </p>
                        </div>
                    </a>

                    <a href="/elevador" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 block text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-emerald-400 rounded-xl mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-emerald-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                                Elevador
                            </h3>
                            <p className="text-emerald-100 opacity-80">
                                Simulação de sistema de elevador
                            </p>
                        </div>
                    </a>

                    <a href="/semaforo" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-800 to-amber-950 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 block text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-amber-400 rounded-xl mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                                Semáforo
                            </h3>
                            <p className="text-amber-100 opacity-80">
                                Sistema de controle de tráfego inteligente
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}