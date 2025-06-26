import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Carousel } from "../components/ui/carousel";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [productos] = useState([
    { id: 1, nombre: "Gorra Street Art", imagen: "/gorras/gorra1.jpg", precio: "$25" },
    { id: 2, nombre: "Chaqueta Graffiti", imagen: "/chaquetas/chaqueta1.jpg", precio: "$60" },
    { id: 3, nombre: "Camiseta Skate", imagen: "/camisetas/camiseta1.jpg", precio: "$30" },
    { id: 4, nombre: "Mochila Hip Hop", imagen: "/accesorios/mochila1.jpg", precio: "$45" }
  ]);

  return (
    <div className="p-4 space-y-10 bg-black text-white">
      <div className="bg-orange-600 text-white text-sm py-2 px-4 text-center font-medium">
        🎉 ¡Lanzamiento exclusivo este viernes! Mira las nuevas colecciones ➜
      </div>

      <motion.h1 className="text-4xl font-bold text-center text-orange-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>TIENDA URBANA</motion.h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-orange-300">Productos Destacados</h2>
        <Carousel>
          {productos.map((producto) => (
            <Card key={producto.id} className="min-w-[250px] bg-gray-900">
              <CardContent className="p-4">
                <img src={producto.imagen} alt={producto.nombre} className="rounded-xl" />
                <h3 className="mt-2 font-bold text-white">{producto.nombre}</h3>
                <p className="text-sm text-orange-200">{producto.precio}</p>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </section>

      <section className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-orange-300 mb-2">Destaca tu Arte Urbano</h2>
          <p className="text-sm text-white mb-4">
            Conoce a artistas urbanos que están transformando las calles. Fotografía, graffiti, moda, cultura y más. 
          </p>
          <Link href="/blog">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">Ver Galería Urbana</Button>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-300">Arte Urbano</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/arte/mural1.jpg" alt="Mural 1" className="rounded-xl" />
          <img src="/arte/mural2.jpg" alt="Mural 2" className="rounded-xl" />
          <img src="/arte/mural3.jpg" alt="Mural 3" className="rounded-xl" />
          <img src="/arte/mural4.jpg" alt="Mural 4" className="rounded-xl" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-orange-300">Revistas Urbanas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900">
            <CardContent className="p-4">
              <img src="/revistas/revista1.jpg" alt="Revista 1" className="rounded-xl mb-2" />
              <h3 className="font-bold text-white">Edición Especial Graffiti</h3>
              <p className="text-sm text-orange-200">Junio 2025</p>
              <Button className="mt-2 bg-orange-500 text-white hover:bg-orange-600">Leer Más</Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-900">
            <CardContent className="p-4">
              <img src="/revistas/revista2.jpg" alt="Revista 2" className="rounded-xl mb-2" />
              <h3 className="font-bold text-white">Cultura Skate</h3>
              <p className="text-sm text-orange-200">Mayo 2025</p>
              <Button className="mt-2 bg-orange-500 text-white hover:bg-orange-600">Leer Más</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
