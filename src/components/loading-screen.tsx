
export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh loading-pixel text-foreground animate-pulse">
      <div className="pixel-border pixel-shadow bg-card/80 backdrop-blur-sm py-6 px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-headline text-center text-primary tracking-wider pixel-text">
          Sin Filtro
        </h1>
        <p className="text-lg text-foreground/80 mt-2 pixel-text">Cargando...</p>
        
        {/* Elementos decorativos pixel */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="w-4 h-4 pixel-border bg-primary animate-ping"></div>
          <div className="w-4 h-4 pixel-border bg-accent animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 pixel-border bg-primary animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
