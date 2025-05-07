
export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number; // In INR
  description: string;
  category: string;
  engineCapacity: string;
  topSpeed: string;
  power: string;
  weight: string;
  fuelCapacity: string;
  colors: string[];
  images: string[];
  featured?: boolean;
  bestSeller?: boolean;
  rating: number;
  stock: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Panigale V4",
    brand: "Ducati",
    price: 2650000,
    description: "The Panigale V4 is the essence of Ducati's racing DNA, representing the most advanced production motorcycle with its cutting-edge engine and aerodynamic design inspired directly from MotoGP.",
    category: "sport",
    engineCapacity: "1103cc",
    topSpeed: "350 km/h",
    power: "214 hp",
    weight: "175 kg",
    fuelCapacity: "16 L",
    colors: ["Ducati Red", "Dark Stealth"],
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3"
    ],
    featured: true,
    bestSeller: true,
    rating: 4.9,
    stock: 5
  },
  {
    id: 2,
    name: "S 1000 RR",
    brand: "BMW",
    price: 2095000,
    description: "The BMW S 1000 RR revolutionized the supersport motorcycle category—and continues to do so to this day. With the ShiftCam technology for varying valve timing, it's more approachable and dynamic than ever before.",
    category: "sport",
    engineCapacity: "999cc",
    topSpeed: "303 km/h",
    power: "207 hp",
    weight: "197 kg",
    fuelCapacity: "16.5 L",
    colors: ["Racing Red", "Light White/Racing Blue/Racing Red", "Black Storm"],
    images: [
      "https://images.unsplash.com/photo-1635073908681-69d2fbc1b22d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3"
    ],
    featured: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: 3,
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    price: 1549900,
    description: "Born on the racetrack and built for the road, the Ninja ZX-10R superbike is equipped with World Superbike Championship-winning technology, offering an authentic racing experience.",
    category: "sport",
    engineCapacity: "998cc",
    topSpeed: "299 km/h",
    power: "203 hp",
    weight: "207 kg",
    fuelCapacity: "17 L",
    colors: ["Lime Green/Ebony/Pearl Blizzard White", "Metallic Matte Graphene Steel Gray/Metallic Diablo Black"],
    images: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1580341289255-5b47c98a9f24?ixlib=rb-4.0.3"
    ],
    bestSeller: true,
    rating: 4.7,
    stock: 8
  },
  {
    id: 4,
    name: "YZF R1",
    brand: "Yamaha",
    price: 2139900,
    description: "The Yamaha YZF-R1 features cutting-edge MotoGP-inspired technology and design for the ultimate supersport experience, with a crossplane engine delivering linear power delivery.",
    category: "sport",
    engineCapacity: "998cc",
    topSpeed: "299 km/h",
    power: "200 hp",
    weight: "201 kg",
    fuelCapacity: "17 L",
    colors: ["Yamaha Blue", "Tech Black", "Icon Blue"],
    images: [
      "https://images.unsplash.com/photo-1571646750134-81d91c9ad442?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3"
    ],
    rating: 4.8,
    stock: 5
  },
  {
    id: 5,
    name: "GSX-R1000R",
    brand: "Suzuki",
    price: 1945000,
    description: "The Suzuki GSX-R1000R is the ultimate expression of the GSX-R line, with advanced electronics, premium suspension components, and a powerful engine finely balanced for race-winning performance.",
    category: "sport",
    engineCapacity: "999.8cc",
    topSpeed: "299 km/h",
    power: "202 hp",
    weight: "203 kg",
    fuelCapacity: "16 L",
    colors: ["Metallic Triton Blue", "Glass Sparkle Black/Pearl Mira Red"],
    images: [
      "https://images.unsplash.com/photo-1605705658744-45f0fe8f9241?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-4.0.3"
    ],
    rating: 4.7,
    stock: 4
  },
  {
    id: 6,
    name: "Street Triple RS",
    brand: "Triumph",
    price: 1171900,
    description: "The Triumph Street Triple RS offers class-defining performance with an aggressive style, high-specification equipment, and a responsive triple engine for both street and track use.",
    category: "naked",
    engineCapacity: "765cc",
    topSpeed: "260 km/h",
    power: "123 hp",
    weight: "166 kg",
    fuelCapacity: "15 L",
    colors: ["Matt Silver Ice", "Crystal White", "Matt Jet Black"],
    images: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3"
    ],
    featured: true,
    rating: 4.8,
    stock: 10
  },
  {
    id: 7,
    name: "Monster",
    brand: "Ducati",
    price: 1207000,
    description: "The Ducati Monster revolutionized the naked bike segment with its iconic design, combining sporty performance with everyday usability for an exhilarating riding experience.",
    category: "naked",
    engineCapacity: "937cc",
    topSpeed: "250 km/h",
    power: "111 hp",
    weight: "166 kg",
    fuelCapacity: "14 L",
    colors: ["Ducati Red", "Dark Stealth", "Aviator Grey"],
    images: [
      "https://images.unsplash.com/photo-1595341595379-cf1cd0ed7ad1?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1587971051803-32ac5260a2ba?ixlib=rb-4.0.3"
    ],
    bestSeller: true,
    rating: 4.7,
    stock: 7
  },
  {
    id: 8,
    name: "MT-09",
    brand: "Yamaha",
    price: 1079400,
    description: "The Yamaha MT-09 delivers a thrilling riding experience with its CP3 three-cylinder engine, aggressive styling, and advanced electronics in a lightweight, nimble package.",
    category: "naked",
    engineCapacity: "889cc",
    topSpeed: "240 km/h",
    power: "119 hp",
    weight: "189 kg",
    fuelCapacity: "14 L",
    colors: ["Cyan Storm", "Icon Blue", "Tech Black"],
    images: [
      "https://images.unsplash.com/photo-1639660521562-4e70ad0765ef?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1599819811277-d5ad6a147619?ixlib=rb-4.0.3"
    ],
    rating: 4.6,
    stock: 12
  },
  {
    id: 9,
    name: "1290 Super Duke R",
    brand: "KTM",
    price: 1899000,
    description: "KTM's 1290 Super Duke R is the ultimate naked bike, delivering extreme power, precise handling, and cutting-edge technology in a distinctive and aggressive design.",
    category: "naked",
    engineCapacity: "1301cc",
    topSpeed: "290 km/h",
    power: "180 hp",
    weight: "189 kg",
    fuelCapacity: "16 L",
    colors: ["Orange", "Black"],
    images: [
      "https://images.unsplash.com/photo-1630796039104-833486906c91?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568708169641-dfdb0437f939?ixlib=rb-4.0.3"
    ],
    featured: true,
    rating: 4.9,
    stock: 6
  },
  {
    id: 10,
    name: "Z H2",
    brand: "Kawasaki",
    price: 2189000,
    description: "The Kawasaki Z H2 combines supercharged power with naked bike agility, featuring a balanced chassis, advanced electronics, and distinctive Z styling for an exhilarating riding experience.",
    category: "naked",
    engineCapacity: "998cc",
    topSpeed: "290 km/h",
    power: "200 hp",
    weight: "239 kg",
    fuelCapacity: "19 L",
    colors: ["Metallic Spark Black/Metallic Graphite Gray/Mirror Coated Spark Black"],
    images: [
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1564934304803-4d6ffe3f1750?ixlib=rb-4.0.3"
    ],
    rating: 4.7,
    stock: 3
  },
  {
    id: 11,
    name: "Multistrada V4",
    brand: "Ducati",
    price: 2197000,
    description: "The Ducati Multistrada V4 is the ultimate adventure bike, combining cutting-edge technology, powerful V4 engine, and long-distance comfort for unparalleled versatility on and off-road.",
    category: "adventure",
    engineCapacity: "1158cc",
    topSpeed: "270 km/h",
    power: "170 hp",
    weight: "215 kg",
    fuelCapacity: "22 L",
    colors: ["Ducati Red", "Aviator Grey"],
    images: [
      "https://images.unsplash.com/photo-1611241443322-b5fda7b81fea?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563290329-e97106be2469?ixlib=rb-4.0.3"
    ],
    featured: true,
    rating: 4.9,
    stock: 7
  },
  {
    id: 12,
    name: "R 1250 GS Adventure",
    brand: "BMW",
    price: 2255000,
    description: "The BMW R 1250 GS Adventure is the definitive adventure motorcycle, equipped with innovative ShiftCam technology, robust construction, and unmatched capabilities for global exploration.",
    category: "adventure",
    engineCapacity: "1254cc",
    topSpeed: "219 km/h",
    power: "136 hp",
    weight: "249 kg",
    fuelCapacity: "30 L",
    colors: ["Ice Grey", "Triple Black", "GS Trophy"],
    images: [
      "https://images.unsplash.com/photo-1569934028326-15cac9f10384?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1631829317029-45172941b2e5?ixlib=rb-4.0.3"
    ],
    bestSeller: true,
    rating: 4.8,
    stock: 5
  },
  {
    id: 13,
    name: "Diavel V4",
    brand: "Ducati",
    price: 2508000,
    description: "The Ducati Diavel V4 redefines the power cruiser category with its muscular design, advanced V4 engine, and sophisticated electronics for an unparalleled riding experience.",
    category: "cruiser",
    engineCapacity: "1158cc",
    topSpeed: "270 km/h",
    power: "168 hp",
    weight: "211 kg",
    fuelCapacity: "17 L",
    colors: ["Thrilling Black", "Ducati Red"],
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3"
    ],
    featured: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: 14,
    name: "Vulcan S",
    brand: "Kawasaki",
    price: 699000,
    description: "The Kawasaki Vulcan S combines cruiser styling with modern performance, featuring ERGO-FIT adjustability for personalized comfort and a smooth parallel-twin engine for accessible power.",
    category: "cruiser",
    engineCapacity: "649cc",
    topSpeed: "185 km/h",
    power: "61 hp",
    weight: "228 kg",
    fuelCapacity: "14 L",
    colors: ["Metallic Flat Spark Black", "Pearl Lava Orange"],
    images: [
      "https://images.unsplash.com/photo-1580341289255-5b47c98a9f24?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3"
    ],
    rating: 4.5,
    stock: 10
  },
  {
    id: 15,
    name: "Fat Boy",
    brand: "Harley-Davidson",
    price: 2249000,
    description: "The Harley-Davidson Fat Boy is an iconic cruiser with bold styling, featuring solid cast wheels, a muscular stance, and the Milwaukee-Eight engine for a powerful and authentic riding experience.",
    category: "cruiser",
    engineCapacity: "1868cc",
    topSpeed: "160 km/h",
    power: "90 hp",
    weight: "317 kg",
    fuelCapacity: "18.9 L",
    colors: ["Black Denim", "Vivid Black", "Billiard Red"],
    images: [
      "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1587990728879-ffd995fd767a?ixlib=rb-4.0.3"
    ],
    bestSeller: true,
    rating: 4.7,
    stock: 6
  }
];

// Generate additional products to reach 48+
const categories = ["sport", "naked", "adventure", "cruiser"];
const brands = ["Honda", "Suzuki", "Yamaha", "Kawasaki", "Ducati", "BMW", "Triumph", "KTM", "Harley-Davidson", "Aprilia"];
const baseNames = [
  "Fireblade", "GSX", "Ninja", "Hayabusa", "Monster", "Streetfighter", "Interceptor", 
  "Street Triple", "Duke", "Africa Twin", "Tiger", "Versys", "VFR", "CBR", "YZF", "Z",
  "Brutale", "Tuono", "Speed Triple", "Daytona", "R9T", "V-Strom", "Tracer", "Dominar"
];

for (let i = 16; i <= 50; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const baseName = baseNames[Math.floor(Math.random() * baseNames.length)];
  const engineSizes = ["600", "650", "750", "800", "900", "1000", "1100", "1200"];
  const engineSize = engineSizes[Math.floor(Math.random() * engineSizes.length)];
  const name = `${baseName} ${engineSize}`;
  
  let price: number;
  let power: string;
  let topSpeed: string;
  
  if (category === "sport") {
    price = Math.floor(Math.random() * 1000000) + 1200000;
    power = Math.floor(Math.random() * 50 + 150) + " hp";
    topSpeed = Math.floor(Math.random() * 50 + 250) + " km/h";
  } else if (category === "naked") {
    price = Math.floor(Math.random() * 800000) + 900000;
    power = Math.floor(Math.random() * 40 + 110) + " hp";
    topSpeed = Math.floor(Math.random() * 40 + 220) + " km/h";
  } else if (category === "adventure") {
    price = Math.floor(Math.random() * 700000) + 1100000;
    power = Math.floor(Math.random() * 30 + 100) + " hp";
    topSpeed = Math.floor(Math.random() * 30 + 190) + " km/h";
  } else {
    price = Math.floor(Math.random() * 900000) + 800000;
    power = Math.floor(Math.random() * 40 + 80) + " hp";
    topSpeed = Math.floor(Math.random() * 30 + 160) + " km/h";
  }

  const weight = Math.floor(Math.random() * 70 + 170) + " kg";
  const fuelCapacity = Math.floor(Math.random() * 10 + 14) + " L";
  const rating = (Math.random() * 1 + 3.9).toFixed(1);
  const stock = Math.floor(Math.random() * 15) + 1;

  const colorOptions = [
    ["Red", "Black", "Silver"],
    ["Blue", "White", "Black"],
    ["Green", "Black"],
    ["Silver", "Red", "Blue"],
    ["Black", "Gold"],
    ["White", "Blue", "Red"]
  ];
  
  const colors = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  
  const randomImageNumbers = [];
  while(randomImageNumbers.length < 2) {
    const num = Math.floor(Math.random() * 15) + 1;
    if(!randomImageNumbers.includes(num)) {
      randomImageNumbers.push(num);
    }
  }
  
  const baseImages = [
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    "https://images.unsplash.com/photo-1635073908681-69d2fbc1b22d",
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    "https://images.unsplash.com/photo-1580341289255-5b47c98a9f24",
    "https://images.unsplash.com/photo-1571646750134-81d91c9ad442",
    "https://images.unsplash.com/photo-1547549082-6bc09f2049ae",
    "https://images.unsplash.com/photo-1605705658744-45f0fe8f9241",
    "https://images.unsplash.com/photo-1608831540955-35094d48694a",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
    "https://images.unsplash.com/photo-1558981852-426c6c22a060",
    "https://images.unsplash.com/photo-1595341595379-cf1cd0ed7ad1",
    "https://images.unsplash.com/photo-1587971051803-32ac5260a2ba",
    "https://images.unsplash.com/photo-1639660521562-4e70ad0765ef",
    "https://images.unsplash.com/photo-1599819811277-d5ad6a147619"
  ];

  const images = [
    baseImages[randomImageNumbers[0]] + "?ixlib=rb-4.0.3",
    baseImages[randomImageNumbers[1]] + "?ixlib=rb-4.0.3"
  ];

  products.push({
    id: i,
    name,
    brand,
    price,
    description: `The ${brand} ${name} is a high-performance ${category} motorcycle, offering exceptional handling and power with modern design and advanced technology for an exhilarating riding experience.`,
    category,
    engineCapacity: `${engineSize}cc`,
    topSpeed,
    power,
    weight,
    fuelCapacity,
    colors,
    images,
    featured: Math.random() > 0.85,
    bestSeller: Math.random() > 0.85,
    rating: parseFloat(rating),
    stock
  });
}

export default products;
