
"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Droplets, Shirt, PartyPopper, Heart, Sparkles, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LoadingScreen } from "@/components/loading-screen";
import { generateBlogSchema, generatePersonSchema, generateWebsiteSchema } from "@/lib/schema";

const blogPosts = {
  skincare: [
    {
      title: "Mi Rutina de Skincare Indispensable",
      description: "Los productos Caudalie Paris que salvaron mi piel y por qué no puedo vivir sin ellos.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¡Hola hermosas! Hoy quiero compartir con ustedes mi rutina de skincare que literalmente transformó mi piel. Después de años de probar mil productos, finalmente encontré la línea perfecta: <strong>Caudalie Paris Vinopure</strong>.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌅 Rutina Matutina</h3>
          <div class="space-y-3">
            <div class="bg-accent/10 p-3 rounded-lg">
              <h4 class="font-medium text-primary">Gel Limpiador Purificante Vinopure</h4>
              <p class="text-sm text-muted-foreground">Formulado con ácido salicílico de origen natural, aceites esenciales orgánicos y agua de uva. Perfecto para pieles con tendencia acneica - reduce el exceso de sebo sin resecar, dejando la piel fresca y luminosa.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <h4 class="font-medium text-primary">Tónico Purificante Vinopure</h4>
              <p class="text-sm text-muted-foreground">Con ácido salicílico natural, aceites esenciales orgánicos y agua de uva. Cierra los poros, disminuye imperfecciones y conserva la luminosidad de la piel.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌙 Rutina Nocturna</h3>
          <div class="space-y-3">
            <div class="bg-accent/10 p-3 rounded-lg">
              <h4 class="font-medium text-primary">Gel Limpiador + Tónico (igual que la mañana)</h4>
              <p class="text-sm text-muted-foreground">Mismo proceso de limpieza para eliminar todas las impurezas del día.</p>
            </div>
            
            <div class="bg-accent/10 p-3 rounded-lg">
              <h4 class="font-medium text-primary">Sérum Salicílico Anti-imperfecciones</h4>
              <p class="text-sm text-muted-foreground">Mi producto estrella: combina ácido salicílico natural, niacinamida y polifenoles. Trata las imperfecciones y mejora la textura de la piel. ¡Los resultados son increíbles!</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💡 Mis Tips</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Consistencia es clave:</strong> Uso estos productos religiosamente mañana y noche</li>
            <li>• <strong>Piel grasa/acneica:</strong> Esta línea es PERFECTA para nuestro tipo de piel</li>
            <li>• <strong>Ingredientes naturales:</strong> El ácido salicílico natural es más suave que el sintético</li>
            <li>• <strong>Agua de uva:</strong> Le da ese toque antioxidante que mi piel ama</li>
          </ul>
          
          <p class="text-base leading-relaxed mt-6">Chicas, después de años luchando con mi piel, puedo decirles que <strong>Caudalie Paris Vinopure</strong> fue mi salvación. La línea completa trabaja en sinergia y los resultados son visibles desde la primera semana. ¡Mi piel nunca se vio tan radiante!</p>
        </div>
      `,
    },
    {
      title: "Look Radiante en 10 Minutos por la Mañana",
      description: "Cómo lucir radiante y lista para el día en solo 10 minutos.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">En medio del ritmo acelerado de la vida diaria, no siempre tenemos el tiempo (o la energía) para dedicar largas horas al arreglo personal cada mañana. Sin embargo, eso no significa que debamos renunciar a vernos bien y sentirnos seguras. Con una rutina bien pensada, es posible lucir fresca, radiante y lista para enfrentar el día en tan solo 10 minutos.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">⏰ Rutina Express de 10 Minutos</h3>
          
          <div class="space-y-4">
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-medium text-primary mb-2">1. Limpieza Express (2 minutos)</h4>
              <p class="text-sm text-muted-foreground mb-2">Empieza con un limpiador suave pero efectivo que se adapte a tu tipo de piel. Este paso elimina las impurezas, el exceso de grasa y prepara el rostro para los siguientes productos. Si tu piel es propensa al acné o al brillo, elige fórmulas con ácido salicílico natural o ingredientes calmantes como el agua de uva.</p>
              <p class="text-xs text-accent font-medium">💡 Consejo: Usa agua fría para ayudar a desinflamar y despertar el rostro.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-medium text-primary mb-2">2. Hidratación con Propósito (2 minutos)</h4>
              <p class="text-sm text-muted-foreground mb-2">Aplica una crema hidratante ligera o un sérum multifunción. Busca fórmulas que incluyan ingredientes como niacinamida, vitamina C o ácido hialurónico, que hidratan, iluminan y suavizan la textura de la piel al instante.</p>
              <p class="text-xs text-accent font-medium">✨ Bonus: Si tu crema contiene protección solar (mínimo SPF 30), ¡te ahorras un paso!</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-medium text-primary mb-2">3. Toque de Color Natural (3 minutos)</h4>
              <p class="text-sm text-muted-foreground mb-2">No necesitas una base completa para verte bien. Usa una BB cream o un tinte ligero con SPF para unificar el tono. Luego, aplica un toque de corrector solo donde lo necesites (ojeras, rojeces o imperfecciones).</p>
              <p class="text-sm text-muted-foreground">Un poco de rubor en crema en mejillas y labios te dará un aspecto saludable al instante. Si tienes 30 segundos extra, pasa un poco de máscara de pestañas para abrir la mirada.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-medium text-primary mb-2">4. Cabello: Orden Rápido (2 minutos)</h4>
              <p class="text-sm text-muted-foreground">Si no puedes lavarlo, usa champú en seco o recógete el cabello en un moño bajo pulido o una coleta alta desenfadada. Añade un accesorio simple (como una pinza o pañuelo) para un toque de estilo.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg">
              <h4 class="font-medium text-primary mb-2">5. Actitud Radiante (1 minuto)</h4>
              <p class="text-sm text-muted-foreground">La forma en que te sientes se refleja en cómo luces. Respira profundo, sonríe y empieza el día con una mentalidad positiva. Incluso el mejor maquillaje no reemplaza la confianza interior.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💫 Conclusión</h3>
          <p class="text-base leading-relaxed">Verse radiante no tiene que ser complicado. Con los productos adecuados y una rutina sencilla, puedes cuidar tu piel y resaltar tu belleza natural en solo 10 minutos. Porque lo importante no es solo cómo te ves, sino cómo te sientes contigo misma.</p>
        </div>
      `,
    },
    {
      title: "La Verdad Sobre los Sérums Virales",
      description: "¿Valen la pena? Los probé para que tú no tengas que hacerlo.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Los sérums son concentrados de ingredientes activos que prometen resultados espectaculares: menos poros, más luminosidad y piel perfecta. Probé algunos de los más virales y esto descubrí:</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✅ Mi Experiencia Real</h3>
          
          <div class="space-y-4">
            <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
              <div class="flex items-start gap-3">
                <span class="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 class="font-semibold text-green-800 mb-1">Niacinamida al 10%</h4>
                  <p class="text-sm text-green-700">Mejora textura y controla grasa, pero puede irritar piel sensible.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
              <div class="flex items-start gap-3">
                <span class="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 class="font-semibold text-green-800 mb-1">Vitamina C</h4>
                  <p class="text-sm text-green-700">Aporta luminosidad, aunque sus efectos sobre manchas son limitados si no eres constante.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
              <div class="flex items-start gap-3">
                <span class="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <h4 class="font-semibold text-green-800 mb-1">Ácido Hialurónico</h4>
                  <p class="text-sm text-green-700">Hidrata y deja la piel jugosa, pero no borra arrugas profundas.</p>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <div class="flex items-start gap-3">
                <span class="text-blue-600 font-bold text-xl">✓</span>
                <div>
                  <h4 class="font-semibold text-blue-800 mb-1">Sérums "Todo en Uno"</h4>
                  <p class="text-sm text-blue-700">Cómodos, aunque no siempre tienen la concentración necesaria para un cambio real.</p>
                </div>
              </div>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💭 Mi Conclusión Honesta</h3>
          <div class="bg-accent/10 p-4 rounded-lg border border-dashed border-accent/30">
            <p class="text-base leading-relaxed mb-4">Pueden ser útiles si eliges el adecuado para tu piel y eres constante, pero <strong>no hacen milagros</strong>. Antes de comprar un sérum viral, investiga, adapta la rutina a tus necesidades y recuerda:</p>
            
            <div class="bg-primary/10 p-3 rounded-lg mt-3">
              <p class="text-sm font-medium text-primary">💡 Dato importante: Una buena limpieza y protector solar diario son más importantes que cualquier tendencia.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🎯 Mis Recomendaciones</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <p class="text-sm">Investiga los ingredientes antes de comprar</p>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <p class="text-sm">Adapta la rutina a TUS necesidades específicas</p>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <p class="text-sm">La constancia es clave para ver resultados</p>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-primary">•</span>
              <p class="text-sm">No caigas en el marketing de "resultados inmediatos"</p>
            </div>
          </div>
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
          <p class="text-base leading-relaxed">Las tiendas de segunda mano son verdaderos tesoros escondidos. Pero para encontrar esas joyas únicas que nadie más tiene, hay que saber buscar. Con el tiempo, he aprendido a comprar como una experta, y hoy te comparto mis trucos favoritos.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">� Mis 7 Secretos de Experta</h3>
          
          <div class="space-y-4">
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">1. Ve con tiempo y mente abierta</h4>
              <p class="text-sm text-muted-foreground">Las mejores piezas no se encuentran corriendo. Necesitas paciencia y curiosidad. A veces no vas a encontrar nada… y otras, te toparás con algo increíble donde menos lo esperas.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">2. Mira más allá de la percha</h4>
              <p class="text-sm text-muted-foreground">A veces una prenda parece simple o pasada de moda, pero con un pequeño ajuste o combinándola bien, se transforma. Fíjate en la calidad del tejido, los acabados y los botones. Son detalles que revelan si una prenda vale la pena.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">3. Visita con frecuencia</h4>
              <p class="text-sm text-muted-foreground">Las tiendas de segunda mano se renuevan todo el tiempo. Ir seguido aumenta tus posibilidades de encontrar piezas únicas antes que nadie.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">4. Sé estratégica</h4>
              <p class="text-sm text-muted-foreground">Ve a tiendas en zonas residenciales o barrios donde haya variedad de estilos. Y si buscas algo específico (como vaqueros vintage, blazers, bolsos o libros), haz una pequeña lista mental para no perderte entre tanto.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">5. Toca todo</h4>
              <p class="text-sm text-muted-foreground">Sí, literalmente. Tocar las prendas te ayuda a detectar tejidos nobles o naturales (como lino, lana o seda) incluso antes de ver la etiqueta. La calidad se siente.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">6. No descartes ropa de otras tallas</h4>
              <p class="text-sm text-muted-foreground">Mucho vintage tiene cortes amplios o se puede ajustar fácilmente. A veces, una prenda de otra talla queda perfecta como prenda oversize o con un simple arreglo.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">7. Confía en tu intuición</h4>
              <p class="text-sm text-muted-foreground">Si algo te llama la atención y sientes que es muy tú, pruébatelo. A menudo las mejores compras son las que no estaban en el plan.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Conclusión</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-base leading-relaxed">Comprar en tiendas de segunda mano no solo es sostenible, también es una forma divertida de crear un estilo propio. Con práctica y ojo entrenado, puedes encontrar prendas únicas, de calidad y con historia… ¡como una verdadera cazadora de tesoros!</p>
          </div>
        </div>
      `,
    },
    {
      title: "Creando un Armario Cápsula",
      description: "Menos es más. Cómo crear un armario versátil que te encantará.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Si abrir tu armario te genera estrés, un armario cápsula puede ser la solución que estabas buscando. Este concepto consiste en reducir tu ropa a un número limitado de prendas básicas y versátiles que combinen entre sí. El resultado: menos decisiones, más estilo y un consumo más consciente.</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">� Aquí te cuento cómo empezar paso a paso</h3>
          
          <div class="space-y-4">
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">1. Haz limpieza sin miedo</h4>
              <p class="text-sm text-muted-foreground mb-3">Saca todo y analiza con honestidad:</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <span class="text-sm">¿Lo uso de verdad?</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <span class="text-sm">¿Me queda bien y me hace sentir bien?</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <span class="text-sm">¿Va con mi estilo de vida actual?</span>
                </div>
              </div>
              <p class="text-xs text-primary font-medium mt-2">Si la respuesta es no, agradécele y dónalo o véndelo.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">2. Define tu paleta de colores</h4>
              <p class="text-sm text-muted-foreground mb-3">Elegir de 3 a 5 colores principales facilita que todo combine. Por ejemplo:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-card/60 p-3 rounded-lg">
                  <h5 class="font-medium text-sm mb-1">Neutros:</h5>
                  <p class="text-xs text-muted-foreground">blanco, negro, gris, beige</p>
                </div>
                <div class="bg-card/60 p-3 rounded-lg">
                  <h5 class="font-medium text-sm mb-1">Unos pocos acentos:</h5>
                  <p class="text-xs text-muted-foreground">azul marino, verde oliva, terracota</p>
                </div>
              </div>
              <p class="text-xs text-accent font-medium mt-2">Así podrás mezclar las prendas sin complicarte.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">3. Elige básicos de calidad</h4>
              <p class="text-sm text-muted-foreground mb-3">Un armario cápsula gira en torno a piezas atemporales. Algunos imprescindibles:</p>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="text-lg">👖</span>
                  <span class="text-sm">Unos buenos vaqueros</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-lg">👔</span>
                  <span class="text-sm">Camisa blanca clásica</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-lg">🧥</span>
                  <span class="text-sm">Blazer neutro</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-lg">👗</span>
                  <span class="text-sm">Vestido versátil</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-lg">👟</span>
                  <span class="text-sm">Calzado cómodo que combine con todo</span>
                </div>
              </div>
              <p class="text-xs text-primary font-medium mt-2">Invierte en calidad, no cantidad.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">4. Añade toques personales</h4>
              <p class="text-sm text-muted-foreground">Aunque sea minimalista, tu cápsula debe reflejarte. Puedes incorporar accesorios o una prenda llamativa que dé personalidad a tus looks.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2">5. Sé realista con tu estilo de vida</h4>
              <p class="text-sm text-muted-foreground">Tu cápsula debe adaptarse a lo que haces cada día. No sirve de nada llenarla de ropa formal si trabajas desde casa, o de vestidos si casi no los usas.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2">6. Revisa y actualiza</h4>
              <p class="text-sm text-muted-foreground">Cada temporada, revisa si algo necesita reemplazo o si tu estilo ha evolucionado. La clave es mantenerla práctica y fiel a ti.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Conclusión</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-base leading-relaxed mb-4">Crear un armario cápsula no significa renunciar al estilo, sino simplificar para quedarte solo con lo que amas y realmente usas. Con menos ropa, ganas más claridad, confianza y tiempo.</p>
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="text-sm font-medium text-primary">¿Lista para empezar? Tu armario ideal está más cerca de lo que crees.</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      title: "Tendencias de Accesorios que me Encantan Ahora",
      description: "Los detalles que transforman cualquier look.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">Los accesorios tienen un poder único: pueden elevar hasta el conjunto más sencillo y darle personalidad al instante. Esta temporada, hay varias tendencias que me tienen completamente enamorada. Aquí te cuento mis favoritas y cómo llevarlas sin esfuerzo:</p>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💫 Mis Tendencias Favoritas</h3>
          
          <div class="space-y-4">
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">✨</span>
                1. Aros XL y formas orgánicas
              </h4>
              <p class="text-sm text-muted-foreground mb-2">Los pendientes grandes vuelven con fuerza, pero ahora en versiones más suaves: curvas irregulares, acabados mate o efecto cerámica. Son perfectos para darle un toque moderno a un look básico.</p>
              <div class="bg-card/60 p-2 rounded-lg mt-2">
                <p class="text-xs text-primary font-medium">💡 Tip: Si llevas aros grandes, equilibra con un peinado sencillo o recogido.</p>
              </div>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">💍</span>
                2. Anillos chunky
              </h4>
              <p class="text-sm text-muted-foreground">Los anillos anchos y voluminosos siguen siendo protagonistas. Puedes combinarlos en diferentes materiales (resina, metal dorado, piedras) o llevar un único anillo statement.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">🧢</span>
                3. Gorras minimalistas
              </h4>
              <p class="text-sm text-muted-foreground">La gorra ya no es solo deportiva: en colores neutros y cortes limpios, se ha convertido en un accesorio chic que queda genial con blazers o vestidos fluidos.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">👜</span>
                4. Bolsos mini con personalidad
              </h4>
              <p class="text-sm text-muted-foreground">Los bolsos pequeños siguen conquistando. Este año, vienen en colores vivos, texturas acolchadas y formas geométricas que marcan la diferencia.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">🕶️</span>
                5. Gafas de sol con aire retro
              </h4>
              <p class="text-sm text-muted-foreground">Desde las cat-eye hasta las cuadradas oversize, las gafas de sol con inspiración vintage son la clave para un look sofisticado.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">🧣</span>
                6. Pañuelos estampados
              </h4>
              <p class="text-sm text-muted-foreground">Un clásico que regresa con fuerza. Llévalo en el cuello, en la cabeza como bandana o atado al bolso. Aporta un toque de color y mucha personalidad.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Conclusión</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-base leading-relaxed mb-4">Los accesorios son la forma más sencilla de actualizar tu estilo sin renovar todo tu armario. Esta temporada se trata de atreverte a jugar con las proporciones, los colores y los materiales.</p>
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="text-sm font-medium text-primary">¿Mi consejo? Elige las tendencias que de verdad te identifiquen y mezcla con tus básicos de siempre. Así crearás un look único, con tu sello personal.</p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  party: [
    {
      title: "La Playlist Definitiva para la Pre-Fiesta",
      description: "🎉 Ponte en ambiente con estos temas que garantizan el inicio de la fiesta.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">La pre-fiesta es ese momento mágico en el que todo puede pasar: risas, maquillaje compartido, brindis improvisados y la emoción de una gran noche por delante. Y nada une más que una buena playlist que suba la energía.</p>
          
          <p class="text-base leading-relaxed mb-6">Si quieres asegurarte de que todo el mundo entre en modo fiesta antes de salir, aquí tienes mis canciones favoritas que nunca fallan:</p>
          
          <div class="space-y-4">
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span class="text-xl">🔥</span>
                Clásicos que todos cantan
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Dua Lipa – Don't Start Now</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Madonna – Hung Up</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Beyoncé – Crazy In Love</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Britney Spears – Toxic</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h3 class="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                <span class="text-xl">💃</span>
                Hits actuales para bailar sin parar
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Doja Cat – Paint The Town Red</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Karol G – Provenza</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Bad Bunny – Tití Me Preguntó</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Rema & Selena Gomez – Calm Down</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span class="text-xl">✨</span>
                Temas nostálgicos que levantan el ánimo
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Lady Gaga – Poker Face</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Shakira – Hips Don't Lie</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Rihanna – We Found Love</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Avicii – Wake Me Up</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h3 class="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                <span class="text-xl">🎧</span>
                Un poco de electrónica y buen rollo
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Calvin Harris – Feel So Close</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>David Guetta – I Gotta Feeling (Remix)</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-accent">♪</span>
                  <span>Martin Garrix – Animals</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h3 class="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <span class="text-xl">🥂</span>
                Para el último brindis antes de salir
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Harry Styles – As It Was</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>Lizzo – About Damn Time</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-primary">♪</span>
                  <span>The Weeknd – Blinding Lights</span>
                </li>
              </ul>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🎵 Cómo crear la atmósfera perfecta</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3">
              <span class="text-green-600 font-bold">✅</span>
              <div>
                <p class="font-medium text-sm">Sube el volumen poco a poco</p>
                <p class="text-xs text-muted-foreground">Empieza con canciones más suaves mientras se preparan y ve aumentando la intensidad.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 font-bold">✅</span>
              <div>
                <p class="font-medium text-sm">Prepara un altavoz o una bocina con buena potencia</p>
                <p class="text-xs text-muted-foreground">El sonido hace toda la diferencia.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 font-bold">✅</span>
              <div>
                <p class="font-medium text-sm">Mezcla géneros</p>
                <p class="text-xs text-muted-foreground">Así todos encontrarán algo que les encante.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-600 font-bold">✅</span>
              <div>
                <p class="font-medium text-sm">Haz una lista colaborativa</p>
                <p class="text-xs text-muted-foreground">Que cada persona añada su tema favorito para personalizar el momento.</p>
              </div>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Conclusión</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-base leading-relaxed">Con esta playlist, la pre-fiesta se convierte en el mejor momento de la noche. Porque no importa si después se sale o no: lo importante es disfrutar juntos y empezar con buena energía.</p>
          </div>
        </div>
      `,
    },
    {
      title: "Del Escritorio a la Pista de Baile: Maquillaje Rápido",
      description: "💄 Transforma tu look de trabajo a uno de fiesta en un instante.",
      fullContent: `
        <div class="space-y-4">
          <p class="text-base leading-relaxed">¿Tienes una salida después del trabajo y cero tiempo para volver a casa? Tranquila: con algunos trucos sencillos puedes pasar de un maquillaje discreto de oficina a un look de noche lleno de glamour en menos de 10 minutos.</p>
          
          <p class="text-base leading-relaxed mb-6">Aquí te cuento cómo hacerlo paso a paso:</p>
          
          <div class="space-y-4">
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">✨</span>
                1. Refresca tu piel
              </h4>
              <p class="text-sm text-muted-foreground">Antes de añadir más producto, elimina el exceso de grasa con papel matificante o un pañuelo. Si lo necesitas, aplica un poco de bruma facial o agua termal para revivir la base y darle frescura.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">💫</span>
                2. Suma cobertura estratégica
              </h4>
              <p class="text-sm text-muted-foreground">Si tu base se ha desvanecido, reaplica un toque de corrector en ojeras, laterales de la nariz y cualquier imperfección. Difumina con los dedos para un acabado natural.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">🌟</span>
                3. Intensifica la mirada
              </h4>
              <div class="space-y-2">
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <div>
                    <p class="text-sm font-medium">Sombra extra:</p>
                    <p class="text-xs text-muted-foreground">Elige un tono metálico o satinado y aplícalo con los dedos sobre el párpado móvil.</p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <div>
                    <p class="text-sm font-medium">Delineado rápido:</p>
                    <p class="text-xs text-muted-foreground">Un delineador negro o marrón oscuro en la línea superior transforma tu mirada al instante.</p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-green-600 font-bold">✅</span>
                  <div>
                    <p class="text-sm font-medium">Máscara de pestañas:</p>
                    <p class="text-xs text-muted-foreground">Añade una capa extra para volumen y definición.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">💖</span>
                4. Ilumina tus rasgos
              </h4>
              <p class="text-sm text-muted-foreground">Aplica iluminador en puntos clave: pómulos, arco de la ceja y lagrimal. Da un efecto glow inmediato que se nota en cualquier luz.</p>
            </div>
            
            <div class="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 class="font-medium text-primary mb-2 flex items-center gap-2">
                <span class="text-xl">💋</span>
                5. Cambia el labial
              </h4>
              <p class="text-sm text-muted-foreground">El paso más fácil para pasar de día a noche: sustituye un bálsamo nude por un labial intenso. Un rojo, vino o fucsia hacen que todo el look parezca pensado para una fiesta.</p>
            </div>
            
            <div class="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <h4 class="font-medium text-accent mb-2 flex items-center gap-2">
                <span class="text-xl">🌿</span>
                6. Perfume y listo
              </h4>
              <p class="text-sm text-muted-foreground">Un toque de tu fragancia favorita (o un perfume en versión mini) es el detalle final que te pone en modo noche.</p>
            </div>
          </div>
          
          <h3 class="text-lg font-semibold text-primary mt-6 mb-3">✨ Conclusión</h3>
          <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg">
            <p class="text-base leading-relaxed mb-4">Con estos pasos, transformar tu maquillaje de trabajo en un look de fiesta es rápido, sencillo y efectivo. No necesitas mucho tiempo, solo estrategia y los productos clave en tu bolso.</p>
            <div class="bg-primary/10 p-3 rounded-lg">
              <p class="text-sm font-medium text-primary">¿Quieres más ideas de looks exprés? Escríbeme y creamos juntas tu kit perfecto de retoque. 💫✨</p>
            </div>
          </div>
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
    title: "✨ NYX Professional Makeup – Fat Oil Lip Drip ✨",
    description: "Tono Newsfeed",
    fullContent: `
      <div class="space-y-4">
        <p class="text-base leading-relaxed">Si buscas un brillo de labios que haga todo (hidratar, dar color y dejar un acabado jugoso), este aceite labial se ha convertido en mi imprescindible absoluto.</p>
        
        <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💧 Por qué me encanta:</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">Hidrata durante 12 horas gracias a su mezcla de aceites nutritivos (escualano, frambuesa y zarzamora).</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">No es pegajoso: se siente ligero y cómodo todo el día.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">El tono Newsfeed es un rojo frambuesa que realza los labios al instante y combina con cualquier look.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">El aplicador es grande y suave, perfecto para una aplicación rápida.</p>
          </div>
        </div>
        
        <p class="text-base leading-relaxed mt-6">Lo llevo siempre en el bolso porque funciona igual de bien sobre los labios desnudos que encima de un labial mate, dándole un brillo fresco y saludable.</p>
        
        <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg mt-6">
          <p class="text-base leading-relaxed font-medium text-primary">Si aún no lo pruebas, te lo recomiendo al 100%. Un básico para labios jugosos, hidratados y con un toque de color irresistible.</p>
        </div>
      </div>
    `,
    link: "https://amzn.eu/d/awqS87z",
  },
  {
    title: "✨ L'Oréal Paris – Spray Fijador de Maquillaje Infaillible ✨",
    description: "Si quieres que tu maquillaje sobreviva a todo —calor, humedad, largas jornadas— este spray es el secreto que marcó la diferencia en mi rutina.",
    fullContent: `
      <div class="space-y-4">
        <p class="text-base leading-relaxed">Si quieres que tu maquillaje sobreviva a todo —calor, humedad, largas jornadas— este spray es el secreto que marcó la diferencia en mi rutina.</p>
        
        <h3 class="text-lg font-semibold text-primary mt-6 mb-3">💧 Por qué me encanta:</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">Fija el maquillaje hasta 36 horas (sí, de verdad dura).</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">Es resistente al agua y al sudor, perfecto para días intensos o eventos especiales.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">El acabado es natural: sella sin dejar sensación tirante ni aspecto acartonado.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 font-bold">✅</span>
            <p class="text-sm text-muted-foreground">El formato en spray es ligero y se distribuye de manera uniforme sin mover la base.</p>
          </div>
        </div>
        
        <p class="text-base leading-relaxed mt-6">Desde que lo uso, mi base y corrector se mantienen intactos por horas, incluso en climas cálidos. Es de esos productos que te dan tranquilidad porque sabes que tu look no se va a desvanecer.</p>
        
        <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg mt-6">
          <p class="text-base leading-relaxed font-medium text-primary">Si buscas un spray fijador potente que cumpla lo que promete, este merece un lugar en tu neceser.</p>
        </div>
      </div>
    `,
    link: "#",
  },
  {
    title: "Paleta de Sombras 'Sunset'",
    description: "Los tonos cálidos de esta paleta son perfectos para looks de día y de noche.",
    fullContent: `
      <div class="space-y-4">
        <p class="text-base leading-relaxed">Esta paleta ha sido mi obsesión total este mes. Los tonos cálidos y dorados me tienen completamente enamorada, y la versatilidad que ofrece es increíble.</p>
        
        <h3 class="text-lg font-semibold text-primary mt-6 mb-3">🌅 Mis tonos favoritos:</h3>
        <div class="space-y-3">
          <div class="bg-accent/10 p-3 rounded-lg">
            <h4 class="font-medium text-primary">Amber Glow</h4>
            <p class="text-sm text-muted-foreground">Perfecto para looks de día, da una luminosidad natural y cálida.</p>
          </div>
          <div class="bg-accent/10 p-3 rounded-lg">
            <h4 class="font-medium text-primary">Copper Kiss</h4>
            <p class="text-sm text-muted-foreground">Mi tono statement para la noche, intenso y con un acabado metálico espectacular.</p>
          </div>
          <div class="bg-accent/10 p-3 rounded-lg">
            <h4 class="font-medium text-primary">Golden Hour</h4>
            <p class="text-sm text-muted-foreground">Ideal para iluminar el lagrimal y crear ese efecto glow que tanto me gusta.</p>
          </div>
        </div>
        
        <p class="text-base leading-relaxed mt-6">La pigmentación es increíble y se difumina como un sueño. Además, los tonos quedan espectaculares con mi color de ojos y tono de piel.</p>
        
        <div class="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg mt-6">
          <p class="text-base leading-relaxed font-medium text-primary">Si te gustan los tonos cálidos tanto como a mí, esta paleta es absolutamente imprescindible. 10/10 sin dudarlo.</p>
        </div>
      </div>
    `,
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
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card via-card/90 to-card/80 backdrop-blur-sm border border-dashed border-accent/30 flex items-center justify-center overflow-hidden">
                  {/* Avatar chibi */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/chibi.png"
                      alt="Alisha Ibarra Bello - Avatar Chibi"
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                  {/* Overlay sutil con nombre */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-2 text-center">
                    <div className="text-xs text-white font-medium tracking-wider uppercase">
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
              <div className="absolute bottom-8 -right-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 animate-ping" style={{ animationDelay: '1s' }}></div>
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
                      const isOpen = openArticles[articleId] ?? false;

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
              {monthlyFavorites.map((item, index) => {
                const favoriteId = `favorite-${index}`;
                const isOpen = openArticles[favoriteId] ?? false;
                
                return (
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
                      
                      {item.fullContent && (
                        <Collapsible open={isOpen} onOpenChange={() => toggleArticle(favoriteId)}>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="w-full mb-4 border-2 border-dashed border-primary/30 hover:border-accent/50 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
                            >
                              <span className="mr-2">
                                {isOpen ? '🔽' : '▶️'}
                              </span>
                              {isOpen ? 'Ocultar Reseña' : 'Leer Reseña Completa'}
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-4">
                            <div className="prose prose-sm max-w-none">
                              <div dangerouslySetInnerHTML={{ __html: item.fullContent }} />
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                      
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
                );
              })}
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

      {/* Schema JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
    </div>
  );
}
