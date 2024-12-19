async function products(request, response) {
  const allowedMethods = ["GET"];

  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method "${request.method}" not allowed`,
    });
  }

  try {
    if (request.method === "GET") {
      await handleGet(request, response);
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGet(request, response) {
  return response.status(200).json({
    male: [
      {
        id: 1,
        name: "Ra'ed",
        price: 310.0,
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 2,
        name: "Asad",
        price: 310.0,
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 3,
        name: "Club de nuit",
        price: 359.9,
        image:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop",
        url: "#",
      },
    ],
    female: [
      {
        id: 1,
        name: "Yara",
        price: 299.0,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 2,
        name: "Sakeena",
        price: 349.9,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 3,
        name: "Fakher",
        price: 385.9,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        url: "#",
      },
    ],
  });
}

export default products;
