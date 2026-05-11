const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Mapeamos los datos para que sean compatibles con nuestro ProductCard
    return data.map(product => ({
      ...product,
      rate: product.rating?.rate || 0 // Extraemos el rate para que funcione nuestro componente ProductRate
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const product = await response.json();
    
    return {
      ...product,
      rate: product.rating?.rate || 0
    };
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
};
