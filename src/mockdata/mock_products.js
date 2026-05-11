import item_01 from "../assets/01_item.jpg";
import item_02 from "../assets/02_item.jpg";
import item_03 from "../assets/03_item.jpg";
import item_04 from "../assets/04_item.jpg";
import item_05 from "../assets/05_item.jpg";

const MOCK_PRODUCTS = [
  { id: 1, title: "Bolso Elegante", description: "Bolso de cuero genuino con múltiples compartimentos.", price: "19.99", rate: 4.5, image: item_01, category: "bolsos" },
  { id: 2, title: "Morral Urbano", description: "Morral espacioso con diseño ergonómico.", price: "24.99", rate: 4.8, image: item_02, category: "morrales" },
  { id: 3, title: "Cartera Minimal", description: "Cartera compacta de cuero sintético.", price: "12.50", rate: 4.2, image: item_03, category: "carteras" },
  { id: 4, title: "Maletín Ejecutivo", description: "Maletín ejecutivo de piel premium.", price: "45.00", rate: 4.9, image: item_04, category: "maletines" },
  { id: 5, title: "Cartera Luxury", description: "Cartera de diseñador en cuero italiano.", price: "100.00", rate: 3.8, image: item_05, category: "carteras" },
  { id: 6, title: "Bolso Classic", description: "Diseño clásico para cualquier ocasión.", price: "22.00", rate: 4.1, image: item_01, category: "bolsos" },
  { id: 7, title: "Morral Trekking", description: "Resistente al agua y muy cómodo.", price: "35.50", rate: 4.7, image: item_02, category: "morrales" },
  { id: 8, title: "Cartera Slim", description: "Ultra delgada, cabe en cualquier bolsillo.", price: "15.00", rate: 4.3, image: item_03, category: "carteras" },
  { id: 9, title: "Maletín Tech", description: "Especial para gadgets y cables.", price: "50.00", rate: 4.6, image: item_04, category: "maletines" },
  { id: 10, title: "Bolso Summer", description: "Ligero y colorido para el verano.", price: "18.00", rate: 4.0, image: item_05, category: "bolsos" },
  { id: 11, title: "Morral City", description: "Estilo moderno para la ciudad.", price: "28.00", rate: 4.4, image: item_01, category: "morrales" },
  { id: 12, title: "Cartera Pocket", description: "Pequeña pero con mucha capacidad.", price: "10.00", rate: 4.0, image: item_02, category: "carteras" },
  { id: 13, title: "Maletín Vintage", description: "Cuero envejecido con estilo retro.", price: "55.00", rate: 4.8, image: item_03, category: "maletines" },
  { id: 14, title: "Bolso Weekend", description: "Ideal para escapadas de fin de semana.", price: "40.00", rate: 4.5, image: item_04, category: "bolsos" },
  { id: 15, title: "Cartera Business", description: "Seria y profesional para el trabajo.", price: "14.50", rate: 4.2, image: item_05, category: "carteras" },
  { id: 16, title: "Morral Gamer", description: "Diseño futurista con mucho espacio.", price: "32.00", rate: 4.6, image: item_01, category: "morrales" },
  { id: 17, title: "Bolso Boho", description: "Estilo bohemio con flecos.", price: "21.99", rate: 4.3, image: item_02, category: "bolsos" },
  { id: 18, title: "Cartera Glossy", description: "Acabado brillante y moderno.", price: "11.00", rate: 3.9, image: item_03, category: "carteras" },
  { id: 19, title: "Maletín Slim", description: "Delgado y ligero para llevar lo justo.", price: "38.00", rate: 4.4, image: item_04, category: "maletines" },
  { id: 20, title: "Morral Kids", description: "Tamaño ideal para los más pequeños.", price: "15.99", rate: 4.7, image: item_05, category: "morrales" },
  { id: 21, title: "Bolso Travel", description: "Extra resistente para viajes largos.", price: "60.00", rate: 4.9, image: item_01, category: "bolsos" },
  { id: 22, title: "Cartera Neon", description: "Colores vibrantes para destacar.", price: "13.00", rate: 4.1, image: item_02, category: "carteras" },
  { id: 23, title: "Maletín Pro", description: "Para profesionales de alta exigencia.", price: "75.00", rate: 5.0, image: item_03, category: "maletines" },
  { id: 24, title: "Morral Casual", description: "Para el día a día sin complicaciones.", price: "19.00", rate: 4.2, image: item_04, category: "morrales" },
  { id: 25, title: "Bolso Tote", description: "Gran capacidad y estilo sencillo.", price: "25.00", rate: 4.4, image: item_05, category: "bolsos" },
  { id: 26, title: "Cartera Gold", description: "Detalles dorados muy elegantes.", price: "120.00", rate: 4.8, image: item_01, category: "carteras" },
  { id: 27, title: "Maletín Brown", description: "Cuero marrón clásico de alta calidad.", price: "48.00", rate: 4.6, image: item_02, category: "maletines" },
  { id: 28, title: "Morral Black", description: "Todo en negro, minimalismo puro.", price: "30.00", rate: 4.5, image: item_03, category: "morrales" },
  { id: 29, title: "Bolso Office", description: "Estructurado y formal para la oficina.", price: "35.00", rate: 4.3, image: item_04, category: "bolsos" },
  { id: 30, title: "Cartera Travel", description: "Seguridad extra para tus documentos.", price: "17.00", rate: 4.7, image: item_05, category: "carteras" },
  { id: 31, title: "Maletín Silver", description: "Herrajes plateados y diseño moderno.", price: "52.00", rate: 4.5, image: item_01, category: "maletines" },
  { id: 32, title: "Morral Sport", description: "Para ir al gimnasio con estilo.", price: "22.50", rate: 4.4, image: item_02, category: "morrales" },
  { id: 33, title: "Bolso Crossbody", description: "Comodidad total manos libres.", price: "26.00", rate: 4.6, image: item_03, category: "bolsos" },
  { id: 34, title: "Cartera Red", description: "Un toque de color atrevido.", price: "16.00", rate: 4.1, image: item_04, category: "carteras" },
  { id: 35, title: "Maletín Pilot", description: "Diseño robusto inspirado en aviación.", price: "80.00", rate: 4.9, image: item_05, category: "maletines" },
  { id: 36, title: "Morral Camo", description: "Estampado militar muy resistente.", price: "34.00", rate: 4.3, image: item_01, category: "morrales" },
  { id: 37, title: "Bolso Clutch", description: "Para eventos y salidas nocturnas.", price: "29.00", rate: 4.2, image: item_02, category: "bolsos" },
  { id: 38, title: "Cartera Denim", description: "Tela de jean, estilo muy juvenil.", price: "12.00", rate: 4.0, image: item_03, category: "carteras" },
  { id: 39, title: "Maletín Doctor", description: "Apertura amplia y base rígida.", price: "95.00", rate: 4.8, image: item_04, category: "maletines" },
  { id: 40, title: "Morral Adventure", description: "Para perderse en la montaña.", price: "42.00", rate: 4.7, image: item_05, category: "morrales" },
];

export default MOCK_PRODUCTS;