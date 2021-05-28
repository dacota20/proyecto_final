const categories = [
  {
    id: "plants",
    name: "Empanadas",
    tags: ["products", "inspirations"],
    count: 45,
    image: require("../assets/images/icon.jpg")
  },
  

];

const products = [
  {
    id: 1,
    name: "Empanada Ranchera",
    description:
      "Excelente empanada que tiene gran contenido de salchicha ranchera y con con relleno de receta de casa",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/ranchera.jpg"),
    ]
    
  },
  {
    id: 2,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/consteña.jpg"),
      
    ]
  }
];

const explore = [
  // images
  require("../assets/images/consteña.jpg"),
  require("../assets/images/cubana.jpg"),
  require("../assets/images/mexicana.jpg"),
  require("../assets/images/mixta.jpg"),
  require("../assets/images/ranchera.jpg"),
  
];

const profile = {
  username: "David_ta",
  location: "Colombia",
  email: "david_tamayo@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
