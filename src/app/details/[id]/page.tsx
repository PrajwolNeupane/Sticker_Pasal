import { ProductsType } from "@/app/const/interface";
import Image from "next/image";

interface PageProps {
    params: {
        id: string;
    };
}
interface Product {
    product: ProductsType
}

export async function getProductData(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/stickers/products?id=${id}`, {
            cache: 'no-cache'
        })
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export default async function Page({ params }: PageProps) {

    const productData: Product = await getProductData(params.id);

    return (
        <div className="bg-light-subtle d-flex flex-column" style={{ padding: "20px 10%", width: "80%" }}>
            <div className="d-flex gap-4">
                <Image alt={productData.product.name} src={productData.product.image} width={'100'} height={'100'} />
                <Image alt={productData.product.name} src={productData.product.image} width={'350'} height={'350'} />
                <div className="d-flex flex-column">
                    <h2 className="fs-2" style={{ fontWeight: '700' }}>{productData.product.name}</h2>
                    <h2 className="fs-4" style={{ fontWeight: '400' }}>{productData.product.price}</h2>
                </div>
            </div>
        </div>
    )
}