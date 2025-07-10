import Image from "next/image";
import Link from "next/link";
import { Instagram, Droplets, Shirt, PartyPopper, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactForm } from "@/components/contact-form";

const blogPosts = {
  skincare: [
    {
      title: "My Holy Grail Skincare Routine",
      description: "The products that saved my skin and why I can't live without them.",
      image: "https://placehold.co/600x400.png",
      aiHint: "skincare routine",
    },
    {
      title: "10-Minute Morning Glow-Up",
      description: "How to look radiant and ready for the day in just 10 minutes.",
      image: "https://placehold.co/600x400.png",
      aiHint: "skincare product",
    },
    {
      title: "The Truth About Viral Serums",
      description: "Are they worth the hype? I tried them so you don't have to.",
      image: "https://placehold.co/600x400.png",
      aiHint: "serum bottle",
    },
  ],
  fashion: [
    {
      title: "How I Find Hidden Gems in Thrift Stores",
      description: "My secrets to thrifting like a pro and finding unique pieces.",
      image: "https://placehold.co/600x400.png",
      aiHint: "fashion style",
    },
    {
      title: "Building a Capsule Wardrobe",
      description: "Less is more. How to create a versatile wardrobe that you'll love.",
      image: "https://placehold.co/600x400.png",
      aiHint: "closet clothes",
    },
    {
      title: "Accessory Trends I'm Loving Right Now",
      description: "From statement earrings to layered necklaces, here's what's hot.",
      image: "https://placehold.co/600x400.png",
      aiHint: "fashion accessories",
    },
  ],
  party: [
    {
      title: "The Ultimate Pre-Party Playlist",
      description: "Get in the mood with these tracks that are guaranteed to start the party.",
      image: "https://placehold.co/600x400.png",
      aiHint: "dj turntable",
    },
    {
      title: "From Desk to Dancefloor: Quick Makeup",
      description: "Transform your look from work-appropriate to party-ready in a flash.",
      image: "https://placehold.co/600x400.png",
      aiHint: "makeup palette",
    },
    {
      title: "Navigating the Social Scene",
      description: "Tips and tricks for having the best night out, every time.",
      image: "https://placehold.co/600x400.png",
      aiHint: "party people",
    },
  ],
};

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Stylish outfit of the day", aiHint: "fashion style" },
  { src: "https://placehold.co/600x400.png", alt: "Aesthetic flatlay of skincare products", aiHint: "skincare flatlay" },
  { src: "https://placehold.co/600x400.png", alt: "A vibrant cocktail at a rooftop bar", aiHint: "cocktail drink" },
  { src: "https://placehold.co/600x400.png", alt: "Candid moment with friends at a party", aiHint: "party friends" },
  { src: "https://placehold.co/600x400.png", alt: "Close-up of a trendy accessory", aiHint: "fashion accessory" },
  { src: "https://placehold.co/600x400.png", alt: "Morning coffee and journal", aiHint: "lifestyle coffee" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-8 px-4 md:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <h1 className="text-4xl md:text-5xl font-headline text-center text-primary tracking-wider">
          Sin Filtro
        </h1>
      </header>

      <main className="flex-1">
        <section id="introduction" className="container mx-auto px-4 py-16 text-center flex flex-col items-center">
          <Image
            src="https://placehold.co/200x200.png"
            alt="A portrait of the blog author"
            width={160}
            height={160}
            className="rounded-full mb-6 ring-4 ring-primary/50 p-1"
            data-ai-hint="fashion portrait"
          />
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Welcome to my world!</h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Dive into the unfiltered life of skincare obsessions, fashion dramas, and unforgettable party nights. This is my space to share it all, with a little bit of sass and a lot of style.
          </p>
        </section>

        <section id="blog" className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-12">The Latest Posts</h2>
            <Tabs defaultValue="skincare" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto h-auto mb-8">
                <TabsTrigger value="skincare" className="py-2.5"><Droplets className="mr-2 h-4 w-4" />Skincare</TabsTrigger>
                <TabsTrigger value="fashion" className="py-2.5"><Shirt className="mr-2 h-4 w-4" />Fashion</TabsTrigger>
                <TabsTrigger value="party" className="py-2.5"><PartyPopper className="mr-2 h-4 w-4" />Party</TabsTrigger>
              </TabsList>
              
              {(['skincare', 'fashion', 'party'] as const).map(category => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts[category].map((post, index) => (
                      <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
                            <Link href="#">Read More &rarr;</Link>
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
            <h2 className="text-4xl font-headline text-center mb-12">Photo Gallery</h2>
            <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
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
        
        <section id="contact" className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-4">Get In Touch</h2>
            <p className="text-center max-w-2xl mx-auto text-foreground/80 mb-8">
              Have a question, a collaboration idea, or just want to say hi? Drop me a line!
            </p>
            <div className="max-w-xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
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
          Made with <Heart className="h-4 w-4 text-primary" /> by a fellow enthusiast.
        </p>
        <p className="text-xs text-foreground/50 mt-2">
          &copy; {new Date().getFullYear()} Sin Filtro. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
