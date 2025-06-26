import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Zapatillas() {
  const zapatillas = [
    { id: 1, nombre: "Zapatilla Urbana 1", imagen: "/zapatillas/zapa1.jpg", precio: "$90" },
    { id: 2, nombre: "Zapatilla Retro", imagen: "/zapatillas/zapa2.jpg", precio: "$110" },
    { id: 3, nombre: "Zapatilla Skate", imagen: "/zapatillas/zapa3.jpg", precio: "$85" },
    { id: 4, nombre: "Zapatilla Street", imagen: "/zapatillas/zapa4.jpg", precio: "$95" }
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <motion.h1 className="text-4xl font-bold text-orange-400 mb-6 text-center" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Colección de Zapatillas
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {zapatillas.map((item) => (
          <Card key={item.id} className="bg-gray-900">
            <CardContent className="p-4">
              <img src={item.imagen} alt={item.nombre} className="rounded-xl mb-3" />
              <h3 className="font-semibold text-white">{item.nombre}</h3>
              <p className="text-orange-300">{item.precio}</p>
              <Button className="mt-2 bg-orange-500 text-white hover:bg-orange-600 w-full">Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/">
          <Button className="bg-gray-700 hover:bg-gray-600 text-white">Volver a inicio</Button>
        </Link>
      </div>
    </div>
  );
}
