
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Droplets, Shirt, PartyPopper, Heart, Sparkles, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LoadingScreen } from "@/components/loading-screen";

const blogPosts = {
  skincare: [
    {
      title: "Mi Rutina de Skincare Indispensable",
      description: "Los productos que salvaron mi piel y por qué no puedo vivir sin ellos.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¡Hola hermosas! Hoy quiero compartir con ustedes mi rutina de skincare que literalmente transformó mi piel. Después de años de probar mil productos, finalmente encontré la combinación perfecta.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Rutina Matutina</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Limpiador suave:</strong> Empiezo con un gel limpiador que no reseca</li>
            <li>• <strong>Vitamina C:</strong> Mi sérum favorito para ese glow natural</li>
            <li>• <strong>Hidratante:</strong> Una crema ligera que se absorbe rápido</li>
            <li>• <strong>Protector solar:</strong> NUNCA me olvido de este paso</li>
          </ul>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌙 Rutina Nocturna</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Doble limpieza:</strong> Aceite primero, luego gel</li>
            <li>• <strong>Retinol:</strong> Solo 3 veces por semana, chicas</li>
            <li>• <strong>Hidratante nocturna:</strong> Más rica que la de día</li>
            <li>• <strong>Aceite facial:</strong> Para sellar toda la hidratación</li>
          </ul>
          
          <p class="text-base leading-relaxed mt-6">El secreto está en la consistencia. No hay productos milagrosos, solo paciencia y una rutina que respetes religiosamente. ¡Confía en el proceso!</p>
        </div>
      `,
    },
    {
      title: "Look Radiante en 10 Minutos por la Mañana",
      description: "Cómo lucir radiante y lista para el día en solo 10 minutos.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Sabemos que las mañanas pueden ser un caos total, pero con estos tips vas a lucir radiante aunque solo tengas 10 minutos.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">⏰ Rutina Express</h3>
          <div class="space-y-3">
            <div class="bg-accent/10 p-3 rounded-lg">
              <p class="font-medium">Minutos 1-2: Limpieza rápida</p>
              <p class="text-sm text-muted-foreground">Agua micelar y listo. No compliques.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <p class="font-medium">Minutos 3-4: Hidratación express</p>
              <p class="text-sm text-muted-foreground">Sérum + crema hidratante con SPF.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <p class="font-medium">Minutos 5-8: Maquillaje natural</p>
              <p class="text-sm text-muted-foreground">Concealer, rubor cremoso, máscara y lip tint.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <p class="font-medium">Minutos 9-10: Toques finales</p>
              <p class="text-sm text-muted-foreground">Perfume, cejas rápidas y ¡a brillar!</p>
            </div>
          </div>
          
          <p class="text-base leading-relaxed mt-6">La clave es tener todo organizadito y productos multifuncionales. ¡Menos es más cuando el tiempo apremia!</p>
        </div>
      `,
    },
    {
      title: "La Verdad Sobre los Sérums Virales",
      description: "¿Valen la pena? Los probé para que tú no tengas que hacerlo.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Chicas, he gastado una fortuna probando todos los sérums virales de TikTok e Instagram. Aquí mi veredicto honesto (y sin filtros).</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✅ Los que SÍ valen la pena</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-green-500">✓</span>
              <div>
                <p class="font-medium">Sérum de Niacinamida</p>
                <p class="text-sm text-muted-foreground">Realmente controla la grasa y los poros</p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-green-500">✓</span>
              <div>
                <p class="font-medium">Vitamina C estabilizada</p>
                <p class="text-sm text-muted-foreground">El glow es real, pero necesitas constancia</p>
              </div>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">❌ Los que NO me convencieron</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-red-500">✗</span>
              <div>
                <p class="font-medium">Sérum "milagroso" de 24 horas</p>
                <p class="text-sm text-muted-foreground">Puro marketing. La piel necesita tiempo</p>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-red-500">✗</span>
              <div>
                <p class="font-medium">Mezclas raras de 10 ingredientes</p>
                <p class="text-sm text-muted-foreground">Menos es más. Simple funciona mejor</p>
              </div>
            </div>
          </div>
          
          <p class="text-base leading-relaxed mt-6">Mi consejo: invierte en productos básicos de calidad antes que en mil sérums virales. Tu piel (y tu billetera) te lo agradecerán.</p>
        </div>
      `,
    },
  ],
  fashion: [
    {
      title: "Cómo Encuentro Joyas Ocultas en Tiendas de Segunda Mano",
      description: "Mis secretos para comprar como una profesional y encontrar piezas únicas.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¡Hola fashionistas! Comprar en tiendas de segunda mano es todo un arte. Aquí mis secretos para encontrar tesoros únicos.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🔍 Mis estrategias infalibles</h3>
          <div class="space-y-3">
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="font-medium">Timing es todo</p>
              <p class="text-sm text-muted-foreground">Lunes y martes temprano. Menos competencia, mejores piezas.</p>
            </div>
            
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="font-medium">Conoce tu cuerpo</p>
              <p class="text-sm text-muted-foreground">Sé tus medidas de memoria. No siempre puedes probarte todo.</p>
            </div>
            
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="font-medium">Busca calidad, no marca</p>
              <p class="text-sm text-muted-foreground">Toca las telas, revisa costuras. La calidad se siente.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💎 Qué buscar siempre</h3>
          <ul class="space-y-2 text-sm">
            <li>• Blazers vintage (se adaptan a cualquier época)</li>
            <li>• Camisas de seda (inversión que vale la pena)</li>
            <li>• Jeans de buena calidad (Levi's, Wrangler)</li>
            <li>• Accesorios únicos (cinturones, bufandas, bolsos)</li>
          </ul>
          
          <p class="text-base leading-relaxed mt-6">Recuerda: la moda sostenible es la mejor moda. Cada pieza vintage tiene una historia, ¡y ahora será parte de la tuya!</p>
        </div>
      `,
    },
    {
      title: "Creando un Armario Cápsula",
      description: "Menos es más. Cómo crear un armario versátil que te encantará.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Después de años de tener el armario lleno pero "no tener nada que ponerme", decidí crear mi armario cápsula. Cambió mi vida.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">📏 Las 20 piezas esenciales</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Básicos (8 piezas)</h4>
              <ul class="text-sm space-y-1">
                <li>• 3 camisetas básicas</li>
                <li>• 2 camisas (blanca y azul)</li>
                <li>• 2 jeans (claro y oscuro)</li>
                <li>• 1 pantalón negro</li>
              </ul>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-semibold mb-2">Statement (6 piezas)</h4>
              <ul class="text-sm space-y-1">
                <li>• 1 blazer perfecto</li>
                <li>• 1 vestido versátil</li>
                <li>• 1 falda midi</li>
                <li>• 1 suéter acogedor</li>
                <li>• 1 chaqueta de cuero</li>
                <li>• 1 abrigo elegante</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-primary/10 p-4 rounded-lg mt-4">
            <h4 class="font-semibold mb-2">Accesorios (6 piezas)</h4>
            <ul class="text-sm space-y-1">
              <li>• 2 bolsos (día y noche) • 2 pares de zapatos versátiles</li>
              <li>• 1 cinturón statement • 1 bufanda/pañuelo</li>
            </ul>
          </div>
          
          <p class="text-base leading-relaxed mt-6">La magia está en que todas las piezas combinan entre sí. Con 20 piezas puedes crear más de 100 looks diferentes. ¡Matemáticas de moda!</p>
        </div>
      `,
    },
    {
      title: "Tendencias de Accesorios que me Encantan Ahora",
      description: "Desde pendientes llamativos hasta collares en capas, esto es lo que se lleva.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Los accesorios pueden transformar cualquier look básico en algo espectacular. Aquí mis tendencias favoritas del momento.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Mis obsesiones actuales</h3>
          
          <div class="space-y-4">
            <div class="border-l-4 border-primary pl-4">
              <h4 class="font-semibold text-primary">Pendientes Statement</h4>
              <p class="text-sm text-muted-foreground">Grandes, dorados, que se vean desde lejos. Perfectos para elevar un look simple.</p>
            </div>
            
            <div class="border-l-4 border-accent pl-4">
              <h4 class="font-semibold text-accent">Collares en Capas</h4>
              <p class="text-sm text-muted-foreground">La clave: diferentes largos y texturas. Mezcla delicado con chunky.</p>
            </div>
            
            <div class="border-l-4 border-primary pl-4">
              <h4 class="font-semibold text-primary">Cinturones Anchos</h4>
              <p class="text-sm text-muted-foreground">Definen la cintura y dan estructura. Perfectos para vestidos fluidos.</p>
            </div>
            
            <div class="border-l-4 border-accent pl-4">
              <h4 class="font-semibold text-accent">Bolsos Mini</h4>
              <p class="text-sm text-muted-foreground">Sí, son impractical, pero súper cute. Para cuando el outfit es el protagonista.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💡 Consejos de styling</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <ul class="space-y-2 text-sm">
              <li>• Si llevas pendientes grandes, mantén el collar simple</li>
              <li>• Mezcla metales sin miedo (oro + plata = perfecto)</li>
              <li>• Un accesorio statement por look (no sobrecargues)</li>
              <li>• Invierte en piezas versátiles que combinen con todo</li>
            </ul>
          </div>
          
          <p class="text-base leading-relaxed mt-6">Los accesorios son la forma más fácil de actualizar tu estilo sin gastar mucho. ¡Experimenta y diviértete!</p>
        </div>
      `,
    },
  ],
  party: [
    {
      title: "La Playlist Definitiva para la Pre-Fiesta",
      description: "Ponte en ambiente con estos temas que garantizan el inicio de la fiesta.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¡Hola party queens! Una buena playlist es la base de cualquier previa exitosa. Aquí mi selección que nunca falla.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🎵 Para empezar suave</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <ul class="space-y-2 text-sm">
              <li>• Dua Lipa - "Levitating"</li>
              <li>• The Weeknd - "Blinding Lights"</li>
              <li>• Doja Cat - "Woman"</li>
              <li>• Harry Styles - "As It Was"</li>
            </ul>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🔥 Para subir la energía</h3>
          <div class="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
            <ul class="space-y-2 text-sm">
              <li>• Bad Bunny - "Tití Me Preguntó"</li>
              <li>• Rosalía - "SAOKO"</li>
              <li>• Lizzo - "About Damn Time"</li>
              <li>• Beyoncé - "HEATED"</li>
            </ul>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💃 Para el peak de la noche</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <ul class="space-y-2 text-sm">
              <li>• Karol G - "MAMIII"</li>
              <li>• Olivia Rodrigo - "good 4 u"</li>
              <li>• Dua Lipa - "Physical"</li>
              <li>• Ariana Grande - "positions"</li>
            </ul>
          </div>
          
          <p class="text-base leading-relaxed mt-6">Pro tip: Siempre ten algunas canciones de backup. Nunca sabes cuándo alguien va a gritar "¡pon reggaeton!" 😂</p>
        </div>
      `,
    },
    {
      title: "Del Escritorio a la Pista de Baile: Maquillaje Rápido",
      description: "Transforma tu look de trabajo a uno de fiesta en un instante.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¿Salida sorpresa después del trabajo? No problem. Con estos trucos pasas de oficina a discoteca en 15 minutos.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">⚡ Transformación express</h3>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <h4 class="font-semibold">Intensifica los ojos</h4>
                <p class="text-sm text-muted-foreground">Sombra oscura en el párpado móvil y delineador más marcado. Instantly dramatic.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <h4 class="font-semibold">Cambia el labial</h4>
                <p class="text-sm text-muted-foreground">De nude a rojo/rosa intenso. Un solo producto cambia todo el look.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <h4 class="font-semibold">Bronzer + highlighter</h4>
                <p class="text-sm text-muted-foreground">Para ese glow de "acabo de llegar de vacaciones". Essential para fotos.</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <h4 class="font-semibold">Pestañas postizas</h4>
                <p class="text-sm text-muted-foreground">Game changer. Las magnéticas son perfect para principiantes.</p>
              </div>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🎒 Kit de emergencia</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-sm font-medium mb-2">Siempre en mi bolso:</p>
            <ul class="space-y-1 text-sm">
              <li>• Labial rojo intenso</li>
              <li>• Delineador waterproof</li>
              <li>• Polvos compactos</li>
              <li>• Highlighter en stick</li>
              <li>• Pestañas postizas de emergencia</li>
            </ul>
          </div>
          
          <p class="text-base leading-relaxed mt-6">Remember: la confianza es el mejor accesorio. Si te sientes bien, te ves bien. ¡A brillar!</p>
        </div>
      `,
    },
    {
      title: "Navegando la Escena Social",
      description: "Consejos y trucos para tener la mejor noche, siempre.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">La vida nocturna puede ser increíble si sabes cómo moverte. Aquí mis consejos para que cada salida sea épica.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌟 Antes de salir</h3>
          <div class="space-y-3">
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="font-medium">Planifica, pero sé flexible</p>
              <p class="text-sm text-muted-foreground">Ten un plan A, B y C. Las mejores noches suelen ser espontáneas.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <p class="font-medium">Eat before you drink</p>
              <p class="text-sm text-muted-foreground">Regla de oro. Una buena cena es la base de una noche exitosa.</p>
            </div>
            
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="font-medium">Lleva cash</p>
              <p class="text-sm text-muted-foreground">Para tips, taxis de emergencia y places que no aceptan tarjeta.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🍸 Durante la noche</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <h4 class="font-semibold text-accent">Do's</h4>
              <ul class="text-sm space-y-1">
                <li>• Hidrátate entre drinks</li>
                <li>• Baila como si nadie te viera</li>
                <li>• Haz amigos en el baño</li>
                <li>• Toma fotos, but live the moment</li>
              </ul>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-semibold text-red-500">Don'ts</h4>
              <ul class="text-sm space-y-1">
                <li>• No dejes tu drink solo</li>
                <li>• No pierdas a tus amigas</li>
                <li>• No te obsesiones con el phone</li>
                <li>• No ignores las red flags</li>
              </ul>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌅 Al final de la noche</h3>
          <div class="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg">
            <ul class="space-y-2 text-sm">
              <li>• Siempre ten un plan de regreso seguro</li>
              <li>• Comparte tu ubicación con alguien de confianza</li>
              <li>• Skincare routine aunque llegues tarde</li>
              <li>• Hidrátate antes de dormir</li>
            </ul>
          </div>
          
          <p class="text-base leading-relaxed mt-6">La clave está en divertirse responsablemente. Good vibes, good friends, good memories. ¡Eso es lo que importa!</p>
        </div>
      `,
    },
  ],
};

const galleryMoments = [
  { 
    title: "Atuendo del Día", 
    category: "fashion",
    description: "Looks que me hacen sentir increíble",
    icon: "outfit",
    gradient: "from-pink-400 to-purple-400",
    emoji: "👗"
  },
  { 
    title: "Skincare Routine", 
    category: "skincare",
    description: "Momentos de autocuidado y relajación",
    icon: "skincare",
    gradient: "from-blue-400 to-cyan-400",
    emoji: "🧴"
  },
  { 
    title: "Night Out", 
    category: "party",
    description: "Noches épicas con mis mejores amigas",
    icon: "party",
    gradient: "from-purple-400 to-pink-400",
    emoji: "🍸"
  },
  { 
    title: "Momentos Espontáneos", 
    category: "lifestyle",
    description: "La vida real, sin filtros ni poses",
    icon: "lifestyle",
    gradient: "from-orange-400 to-red-400",
    emoji: "✨"
  },
  { 
    title: "Fashion Details", 
    category: "fashion",
    description: "Accesorios que hacen la diferencia",
    icon: "accessories",
    gradient: "from-yellow-400 to-orange-400",
    emoji: "💎"
  },
  { 
    title: "Me Time", 
    category: "lifestyle",
    description: "Café, journaling y momentos conmigo",
    icon: "coffee",
    gradient: "from-amber-400 to-brown-400",
    emoji: "☕"
  },
];

const monthlyFavorites = [
  {
    title: "Sérum Iluminador con Vitamina C",
    description: "Este sérum ha cambiado mi piel. Le da un brillo increíble y huele a cítricos frescos.",
    link: "#",
  },
  {
    title: "Pendientes de Aro Dorados",
    description: "Simples, elegantes y van con todo. Han sido mi accesorio de confianza este mes.",
    link: "#",
  },
  {
    title: "Paleta de Sombras 'Sunset'",
    description: "Los tonos cálidos de esta paleta son perfectos para looks de día y de noche.",
    link: "#",
  },
];


const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 2-7 20-4-9-9-4 20-7z"></path>
      <path d="M22 2 11 13"></path>
    </svg>
  );


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [openArticles, setOpenArticles] = useState<Record<string, boolean>>({});

  const toggleArticle = (articleId: string) => {
    setOpenArticles(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="py-8 px-4 md:px-8 bg-transparent backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto">
            <div className="bg-card/60 backdrop-blur-sm border-2 border-dashed border-foreground/20 rounded-lg py-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline text-center text-primary tracking-wider">
                  Sin Filtro
                </h1>
            </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="introduction" className="container mx-auto px-4 py-16 text-center flex flex-col items-center floating-shapes soft-glow">
          <div className="relative mb-8">
            {/* Avatar elegante sin imagen */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Círculo exterior decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 animate-pulse"></div>
              
              {/* Círculo interior principal */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 backdrop-blur-sm border-2 border-dashed border-primary/50">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-dashed border-accent/30 flex items-center justify-center">
                  {/* Iniciales elegantes */}
                  <div className="text-center">
                    <div className="text-4xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      AIB
                    </div>
                    <div className="text-xs text-primary/70 font-medium tracking-widest uppercase">
                      Sin Filtro
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <div className="absolute top-4 -left-6 w-4 h-4 rounded-full bg-gradient-to-br from-accent/60 to-primary/60 animate-ping"></div>
              <div className="absolute bottom-8 -right-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Elementos decorativos adicionales */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-2 text-primary/30">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                <span className="text-xs font-medium">✨</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-headline mb-6 relative">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ¡Bienvenida a mi mundo!
            </span>
            <span className="absolute text-5xl opacity-10 rotate-12 -top-4 -right-8 select-none">✨</span>
            <span className="absolute text-3xl opacity-10 -rotate-12 -bottom-2 -left-6 select-none">💖</span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Sumérgete en la vida sin filtros de obsesiones con el skincare, dramas de moda y noches de fiesta inolvidables. 
            </p>
            <p className="text-base text-foreground/70 italic">
              Este es mi espacio para compartirlo todo, con un poco de descaro y mucho estilo.
            </p>
          </div>
          
          {/* Badges decorativos */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-dashed border-primary/30 rounded-full text-sm font-medium text-primary">
              <Droplets className="w-4 h-4 inline mr-2" />
              Skincare Addict
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 border border-dashed border-accent/30 rounded-full text-sm font-medium text-accent">
              <Shirt className="w-4 h-4 inline mr-2" />
              Fashion Lover
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-dashed border-primary/30 rounded-full text-sm font-medium text-primary">
              <PartyPopper className="w-4 h-4 inline mr-2" />
              Night Life
            </div>
          </div>
          
          {/* Línea decorativa final */}
          <div className="flex items-center justify-center gap-4 opacity-40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </section>

        <section id="blog" className="py-16 floating-shapes-alt">
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
                    {blogPosts[category].map((post, index) => {
                      const articleId = `${category}-${index}`;
                      const isOpen = openArticles[articleId];
                      
                      return (
                        <Card key={index} className="group overflow-hidden bg-gradient-to-br from-card via-card/80 to-card/40 backdrop-blur-sm border-2 border-dashed border-foreground/10 shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <CardHeader className="p-6 pb-4 relative z-10">
                            <div className="flex items-center gap-3 mb-3">
                              {category === 'skincare' && <Droplets className="h-8 w-8 text-primary" />}
                              {category === 'fashion' && <Shirt className="h-8 w-8 text-primary" />}
                              {category === 'party' && <PartyPopper className="h-8 w-8 text-primary" />}
                              <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-accent/30 to-transparent" />
                            </div>
                            <CardTitle className="font-headline text-2xl mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-6 pt-2 flex-grow relative z-10">
                            <CardDescription className="text-base leading-relaxed">{post.description}</CardDescription>
                            
                            <Collapsible open={isOpen} onOpenChange={() => toggleArticle(articleId)}>
                              <CollapsibleContent className="mt-4 overflow-hidden">
                                <div className="border-t border-dashed border-primary/20 pt-4">
                                  <div 
                                    className="article-content text-foreground space-y-4"
                                    dangerouslySetInnerHTML={{ __html: post.fullContent }}
                                  />
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          </CardContent>
                          <CardFooter className="p-6 pt-0 relative z-10">
                            <Collapsible open={isOpen} onOpenChange={() => toggleArticle(articleId)}>
                              <CollapsibleTrigger asChild>
                                <Button variant="ghost" className="group/btn w-full justify-between text-primary hover:text-accent hover:bg-accent/10 border border-dashed border-primary/20 hover:border-accent/40 transition-all duration-300">
                                  <span>{isOpen ? 'Mostrar Menos' : 'Leer Más'}</span>
                                  <span className="ml-2 transition-transform duration-300">
                                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                  </span>
                                </Button>
                              </CollapsibleTrigger>
                            </Collapsible>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="gallery" className="py-16 floating-shapes soft-glow">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline text-center mb-6 relative">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Galería de Momentos
              </span>
              <span className="absolute text-5xl opacity-10 rotate-12 -top-4 -right-8 select-none">📸</span>
            </h2>
            <p className="text-center max-w-2xl mx-auto text-foreground/80 mb-12">
              Cada momento cuenta una historia. Aquí un vistazo a mi mundo sin filtros.
            </p>
            
            <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-4">
                {galleryMoments.map((moment, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/60 backdrop-blur-sm border-2 border-dashed border-foreground/10 shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-80">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardContent className="p-0 h-full flex flex-col relative">
                        {/* Header con gradiente temático */}
                        <div className={`h-32 bg-gradient-to-br ${moment.gradient} relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-4xl mb-2">{moment.emoji}</div>
                              <div className="text-xs uppercase tracking-wider font-medium opacity-90">
                                {moment.category}
                              </div>
                            </div>
                          </div>
                          
                          {/* Elementos decorativos */}
                          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
                          <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-white/30 backdrop-blur-sm"></div>
                        </div>
                        
                        {/* Contenido principal */}
                        <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              {moment.category === 'fashion' && <Shirt className="w-5 h-5 text-primary" />}
                              {moment.category === 'skincare' && <Droplets className="w-5 h-5 text-primary" />}
                              {moment.category === 'party' && <PartyPopper className="w-5 h-5 text-primary" />}
                              {moment.category === 'lifestyle' && <Sparkles className="w-5 h-5 text-primary" />}
                              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                            </div>
                            
                            <h3 className="font-headline text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                              {moment.title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {moment.description}
                            </p>
                          </div>
                          
                          {/* Badge inferior */}
                          <div className="mt-4 flex items-center justify-between">
                            <div className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-xs font-medium text-primary border border-dashed border-primary/20">
                              Momento #{index + 1}
                            </div>
                            <Heart className="w-4 h-4 text-accent/60 group-hover:text-accent group-hover:fill-current transition-all duration-300" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Controles personalizados */}
              <CarouselPrevious className="text-primary hover:bg-primary/10 hover:text-primary border-2 border-dashed border-primary/20 hover:border-primary/40 -left-12" />
              <CarouselNext className="text-primary hover:bg-primary/10 hover:text-primary border-2 border-dashed border-primary/20 hover:border-primary/40 -right-12" />
            </Carousel>
            
            {/* Indicadores adicionales */}
            <div className="flex justify-center mt-8 gap-2">
              {galleryMoments.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-50 hover:opacity-100 transition-opacity duration-300"
                ></div>
              ))}
            </div>
            
            {/* Texto final */}
            <div className="text-center mt-8">
              <p className="text-sm text-foreground/60 italic">
                "Cada foto cuenta una historia, cada momento es auténtico" ✨
              </p>
            </div>
          </div>
        </section>
        
        <section id="favorites" className="py-16 floating-shapes-alt">
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
                <Card key={index} className="group overflow-hidden bg-gradient-to-br from-card via-card/90 to-card/60 backdrop-blur-sm border-2 border-dashed border-foreground/10 shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="p-6 pb-4 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Heart className="h-6 w-6 text-accent fill-accent/20" />
                        <span className="text-sm font-medium text-accent uppercase tracking-wider">Favorito #{index + 1}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Sparkles key={i} className="h-3 w-3 text-primary/60" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-headline text-2xl mb-2 flex items-start gap-3 group-hover:text-primary transition-colors duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-dashed border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <span className="leading-tight">{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 flex-grow relative z-10">
                    <CardDescription className="text-base leading-relaxed mb-4">{item.description}</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/20 via-accent/30 to-transparent" />
                      <span className="px-2 bg-card/80 rounded-full text-xs uppercase tracking-wider">Recomendado</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-primary/20 via-accent/30 to-transparent" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-4 relative z-10">
                    <Button asChild variant="outline" className="group/btn w-full border-2 border-dashed bg-gradient-to-r from-transparent to-primary/5 hover:from-primary/10 hover:to-accent/10 border-primary/30 hover:border-accent/50 text-primary hover:text-accent transition-all duration-300">
                      <Link href={item.link} className="flex items-center justify-center gap-2">
                        <Heart className="h-4 w-4 group-hover/btn:fill-current transition-all duration-300" />
                        <span>Comprar Ahora</span>
                        <span className="ml-1 group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 mt-16">
        <div className="container mx-auto flex justify-center">
            <div className="bg-card/60 backdrop-blur-sm border-2 border-dashed border-foreground/20 rounded-lg px-8 py-6 text-center">
                <h3 className="font-headline text-2xl text-primary mb-2">Sin Filtro</h3>
                <div className="flex justify-center gap-6 my-4">
                    <Link href="https://instagram.com/ali.ibarrabello" className="text-foreground hover:text-primary transition-colors" aria-label="Instagram">
                        <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="https://wa.me/692616005" className="text-foreground hover:text-primary transition-colors" aria-label="Whatsapp">
                        <WhatsappIcon className="h-6 w-6" />
                    </Link>
                    <Link href="https://t.me/Alisha_Ibarra" className="text-foreground hover:text-primary transition-colors" aria-label="Telegram">
                        <TelegramIcon className="h-6 w-6" />
                    </Link>
                </div>
                <p className="text-sm text-foreground/60 flex items-center justify-center gap-1.5">
                    Hecho con <Heart className="h-4 w-4 text-primary" /> por una entusiasta como tú.
                </p>
                <p className="text-xs text-foreground/50 mt-4">
                    &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
