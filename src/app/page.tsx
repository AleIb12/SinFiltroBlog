import Image from "next/image";
import Link from "next/link";
import { Instagram, Droplets, Shirt, PartyPopper, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const blogPosts = {
  skincare: [
    {
      title: "Mi Rutina de Skincare Indispensable",
      description: "Los productos que salvaron mi piel y por qué no puedo vivir sin ellos.",
      image: "https://placehold.co/600x400.png",
      aiHint: "skincare routine",
    },
    {
      title: "Look Radiante en 10 Minutos por la Mañana",
      description: "Cómo lucir radiante y lista para el día en solo 10 minutos.",
      image: "https://placehold.co/600x400.png",
      aiHint: "skincare product",
    },
    {
      title: "La Verdad Sobre los Sérums Virales",
      description: "¿Valen la pena? Los probé para que tú no tengas que hacerlo.",
      image: "https://placehold.co/600x400.png",
      aiHint: "serum bottle",
    },
  ],
  fashion: [
    {
      title: "Cómo Encuentro Joyas Ocultas en Tiendas de Segunda Mano",
      description: "Mis secretos para comprar como una profesional y encontrar piezas únicas.",
      image: "https://placehold.co/600x400.png",
      aiHint: "fashion style",
    },
    {
      title: "Creando un Armario Cápsula",
      description: "Menos es más. Cómo crear un armario versátil que te encantará.",
      image: "https://placehold.co/600x400.png",
      aiHint: "closet clothes",
    },
    {
      title: "Tendencias de Accesorios que me Encantan Ahora",
      description: "Desde pendientes llamativos hasta collares en capas, esto es lo que se lleva.",
      image: "https://placehold.co/600x400.png",
      aiHint: "fashion accessories",
    },
  ],
  party: [
    {
      title: "La Playlist Definitiva para la Pre-Fiesta",
      description: "Ponte en ambiente con estos temas que garantizan el inicio de la fiesta.",
      image: "https://placehold.co/600x400.png",
      aiHint: "dj turntable",
    },
    {
      title: "Del Escritorio a la Pista de Baile: Maquillaje Rápido",
      description: "Transforma tu look de trabajo a uno de fiesta en un instante.",
      image: "https://placehold.co/600x400.png",
      aiHint: "makeup palette",
    },
    {
      title: "Navegando la Escena Social",
      description: "Consejos y trucos para tener la mejor noche, siempre.",
      image: "https://placehold.co/600x400.png",
      aiHint: "party people",
    },
  ],
};

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Atuendo del día con estilo", aiHint: "fashion style" },
  { src: "https://placehold.co/600x400.png", alt: "Composición estética de productos de skincare", aiHint: "skincare flatlay" },
  { src: "https://placehold.co/600x400.png", alt: "Un cóctel vibrante en un bar de azotea", aiHint: "cocktail drink" },
  { src: "https://placehold.co/600x400.png", alt: "Momento espontáneo con amigos en una fiesta", aiHint: "party friends" },
  { src: "https://placehold.co/600x400.png", alt: "Primer plano de un accesorio de moda", aiHint: "fashion accessory" },
  { src: "https://placehold.co/600x400.png", alt: "Café matutino y diario", aiHint: "lifestyle coffee" },
];

const monthlyFavorites = [
  {
    title: "Sérum Iluminador con Vitamina C",
    description: "Este sérum ha cambiado mi piel. Le da un brillo increíble y huele a cítricos frescos.",
    image: "https://placehold.co/600x600.png",
    aiHint: "serum bottle",
    link: "#",
  },
  {
    title: "Pendientes de Aro Dorados",
    description: "Simples, elegantes y van con todo. Han sido mi accesorio de confianza este mes.",
    image: "https://placehold.co/600x600.png",
    aiHint: "gold earrings",
    link: "#",
  },
  {
    title: "Paleta de Sombras 'Sunset'",
    description: "Los tonos cálidos de esta paleta son perfectos para looks de día y de noche.",
    image: "https://placehold.co/600x600.png",
    aiHint: "eyeshadow palette",
    link: "#",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-8 px-4 md:px-8 bg-transparent backdrop-blur-sm sticky top-0 z-40">
        <h1 className="text-4xl md:text-5xl font-headline text-center text-primary tracking-wider">
          Sin Filtro
        </h1>
      </header>

      <main className="flex-1">
        <section id="introduction" className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Un retrato de la autora del blog"
            width={160}
            height={160}
            className="rounded-full mb-6 ring-4 ring-primary/50 p-1"
            data-ai-hint="fashion portrait"
          />
          <h2 className="text-4xl md:text-5xl font-headline mb-4 relative">
            ¡Bienvenida a mi mundo!
            <span className="absolute text-5xl opacity-10 rotate-12 -top-4 -right-8 select-none">✨</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Sumérgete en la vida sin filtros de obsesiones con el skincare, dramas de moda y noches de fiesta inolvidables. Este es mi espacio para compartirlo todo, con un poco de descaro y mucho estilo.
          </p>
        </section>

        <section id="blog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-12 relative">
              Las Últimas Entradas
              <span className="absolute text-5xl opacity-10 -rotate-12 -top-4 -left-8 select-none">✍️</span>
            </h2>
            <Tabs defaultValue="skincare" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto h-auto mb-8">
                <TabsTrigger value="skincare" className="py-2.5"><Droplets className="mr-2 h-4 w-4" />Skincare</TabsTrigger>
                <TabsTrigger value="fashion" className="py-2.5"><Shirt className="mr-2 h-4 w-4" />Moda</TabsTrigger>
                <TabsTrigger value="party" className="py-2.5"><PartyPopper className="mr-2 h-4 w-4" />Fiesta</TabsTrigger>
              </TabsList>
              
              {(['skincare', 'fashion', 'party'] as const).map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts[category].map((post, index) => (
                      <Card key={index} className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/20 shadow-sm hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <CardHeader className="p-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                            data-ai-hint={post.aiHint}
                          />
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                          <CardTitle className="font-headline text-2xl mb-2">{post.title}</CardTitle>
                          <CardDescription>{post.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                          <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent">
                            <Link href="#">Leer Más &rarr;</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-12 relative">
              Galería de Fotos
               <span className="absolute text-5xl opacity-10 rotate-12 -top-4 -right-8 select-none">📸</span>
            </h2>
            <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/20 shadow-sm hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                            data-ai-hint={image.aiHint}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="text-primary hover:bg-primary/10 hover:text-primary" />
            </Carousel>
          </div>
        </section>
        
        <section id="favorites" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-4 relative">
              Mis Favoritos del Mes
              <span className="absolute text-5xl opacity-10 -rotate-12 -top-4 -left-8 select-none">💖</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto text-foreground/80 mb-12">
              Una selección de los productos que he estado amando y usando sin parar este último mes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthlyFavorites.map((item, index) => (
                <Card key={index} className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/20 shadow-sm hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="w-full h-60 object-cover"
                      data-ai-hint={item.aiHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-2xl mb-2 flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-accent" />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href={item.link}>Comprar Ahora</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center border-t border-border/50 mt-16">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-foreground/60 flex items-center justify-center gap-1.5">
          Hecho con <Heart className="h-4 w-4 text-primary" /> por una entusiasta como tú.
        </p>
        <p className="text-xs text-foreground/50 mt-2">
          &copy; {new Date().getFullYear()} Sin Filtro. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
