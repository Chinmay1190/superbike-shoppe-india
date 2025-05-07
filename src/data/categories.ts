
type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

const categories: Category[] = [
  {
    id: "sport",
    name: "Sport Bikes",
    description: "High-performance motorcycles optimized for speed, acceleration, and agile handling on paved roads.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3"
  },
  {
    id: "naked",
    name: "Naked Bikes",
    description: "Performance-oriented motorcycles without fairings, offering an upright riding position and versatile performance.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3"
  },
  {
    id: "adventure",
    name: "Adventure Bikes",
    description: "Versatile motorcycles designed for both on-road comfort and off-road capability with long-travel suspension.",
    image: "https://images.unsplash.com/photo-1611241443322-b5fda7b81fea?ixlib=rb-4.0.3"
  },
  {
    id: "cruiser",
    name: "Cruiser Bikes",
    description: "Relaxed riding position motorcycles with emphasis on style, comfort, and low-end torque for highway cruising.",
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3"
  }
];

export default categories;
