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
          "https://m.media-amazon.com/images/I/71Tj5WHiBWL.jpg?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 2,
        name: "Asad",
        price: 310.0,
        image:
          "https://m.media-amazon.com/images/I/61rIEt70ZPL.jpg?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 3,
        name: "Club de nuit",
        price: 359.9,
        image:
          "https://acdn.mitiendanube.com/stores/002/174/962/products/217d5e32d65e6f5831eba1f091101c8f-4ab3071eb8125dd51817213545388991-1024-1024.jpeg?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 4,
        name: "Fakhar Black",
        price: 385.9,
        image:
          "https://www.perfumesarabes.pt/image/cache/catalog/produtos/062024/Fakhar-Black-extra4-1080x1080.jpeg?w=400&h=400&fit=crop",
        url: "#",
      },
    ],
    female: [
      {
        id: 1,
        name: "Yara",
        price: 299.0,
        image:
          "https://m.media-amazon.com/images/I/61zfpWH31NL.jpg?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 2,
        name: "Sakeena",
        price: 349.9,
        image:
          "https://m.media-amazon.com/images/I/81Oox+U2KUL._AC_UF1000,1000_QL80_.jpg?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 3,
        name: "Fakhar Rose",
        price: 385.9,
        image:
          "https://acdn.mitiendanube.com/stores/002/954/202/products/1231-051442289a00cef03416797264619243-640-0.png?w=400&h=400&fit=crop",
        url: "#",
      },
      {
        id: 4,
        name: "Sabah Al Ward",
        price: 385.9,
        image:
          "https://acdn.mitiendanube.com/stores/002/169/498/products/sabah-al-ward-08a2cff6e02b90424e16987091758228-1024-1024.jpg?w=400&h=400&fit=crop",
        url: "#",
      },
    ],
  });
}

export default products;
