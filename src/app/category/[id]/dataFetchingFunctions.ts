export async function getCategoryData() {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/stickers/categories/all`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
export async function getCategoryProducts(id: string, page: string) {
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/stickers/categories?id=${id}&page=${page}`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}