
export function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-background text-foreground animate-pulse">
      <div className="bg-card/60 backdrop-blur-sm border-2 border-dashed border-foreground/20 rounded-lg py-6 px-12 text-center">
        <h1 className="text-5xl md:text-6xl font-headline text-center text-primary tracking-wider">
          Sin Filtro
        </h1>
        <p className="text-lg text-foreground/80 mt-2">Cargando...</p>
      </div>
    </div>
  );
}
