import { DetailProductType } from "@/app/const/interface";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./SelectQuantity";

interface PageProps {
    params: {
        id: string;
    };
}
interface Product {
    product: DetailProductType
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
        <div className="bg-light-subtle d-flex flex-column" style={{ padding: "20px 10%", width: "100%", minHeight: "88vh" }}>
            <div className="d-flex gap-4">
                <Image alt={productData.product.name} src={productData.product.image} width={'100'} height={'100'} />
                <Image alt={productData.product.name} src={productData.product.image} width={'380'} height={'380'} />
                <div className="d-flex flex-column">
                    <h2 className="fs-2 text-dark" style={{ fontWeight: '700' }}>{productData.product.name}</h2>
                    <h2 className="fs-4 text-secondary" style={{ fontWeight: '400' }}>{productData.product.price}</h2>
                    {
                        productData.product.descripton.map((curr: string, indx: number) => (
                            <div className="d-flex gap-2">
                                <span className="material-symbols-outlined text-dark">
                                    done
                                </span>
                                <h4 className="fs-6 text-dark">{curr}</h4>
                            </div>
                        ))
                    }
                    <AddToCart />
                    <h2 className="fs-6 text-dark" style={{ fontWeight: '700' }}>CATEGORY:
                        <Link href={`/category/${productData.product.category}?page=1`} className="text-secondary text-decoration-none" style={{fontWeight:'500'}}> {productData.product.category}</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}