export async function getProductData(id: string) {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/stickers/products?id=${id}`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getCategoryProducts(id: string) {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/stickers/categories?id=${id}&page=1&limit=6`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
