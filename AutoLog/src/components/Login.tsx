export default function Login() {
    return (
<div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-md p-8 bg-zinc-950 border-2 border-zinc-800 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.15)] text-zinc-100">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-block px-3 py-1 mb-4 border border-red-600/30 bg-red-600/10 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
              System Secure
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Auto<span className="text-red-600">Log</span>
          </h2>
          <p className="text-zinc-500 text-xs mt-2 font-mono">
            V.8.0.11 // MECHANICAL DATA ENTRY
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">
              Operator ID
            </label>
            <input 
              type="email" 
              className="w-full bg-zinc-900 border-2 border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-600 transition-colors placeholder:text-zinc-700" 
              placeholder="operator@autolog.io"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">
              Access Code
            </label>
            <input 
              type="password" 
              className="w-full bg-zinc-900 border-2 border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-600 transition-colors placeholder:text-zinc-700" 
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-4 rounded transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            Authenticate
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-zinc-600">
          <a href="#" className="hover:text-red-500 transition-colors">Reset Key</a>
          <span className="text-zinc-800">|</span>
          <a href="#" className="hover:text-red-500 transition-colors">Request Access</a>
        </div>
      </div>
    </div>
    );
}
