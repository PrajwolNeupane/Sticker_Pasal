export async function getCategoryData() {
    try {
      const response = await fetch(`${process.env.DOMAIN}/api/stickers/categories/all`)
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
  
  export async function getProductsData() {
    try {
      const response = await fetch(`${process.env.DOMAIN}/api/stickers/products/all`)
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }