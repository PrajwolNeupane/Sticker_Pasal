import { DetailProductType, ProductsType } from "@/app/const/interface";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./SelectQuantity";
import StateProviderLayout from "@/LayOut/StateProviderLayout";

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
        const response = await fetch(`http://localhost:3000/api/stickers/products?id=${id}`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export async function getCategoryProducts(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/stickers/categories?id=${id}&page=1&limit=6`)
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

export default async function Page({ params }: PageProps) {

    const productData: Product = await getProductData(params.id);
    var relatedProductData: Array<ProductsType> = [];

    if (productData.product) {
        relatedProductData = await getCategoryProducts(productData.product.category);
    }

    return (
        <StateProviderLayout>
            <div className="bg-light-subtle d-flex flex-column gap-1" style={{ padding: "20px 10%", width: "100%", minHeight: "88vh" }}>
                <div className="d-flex gap-4">
                    <Image alt={productData.product.name} src={productData.product.image} width={'100'} height={'100'} />
                    <Image alt={productData.product.name} src={productData.product.image} width={'380'} height={'380'} />
                    <div className="d-flex flex-column">
                        <h2 className="fs-2 text-dark" style={{ fontWeight: '700' }}>{productData.product.name}</h2>
                        <h2 className="fs-4 text-secondary" style={{ fontWeight: '400' }}>{productData.product.price}</h2>
                        {
                            productData.product.descripton.map((curr: string, indx: number) => (
                                <div className="d-flex gap-2" key={indx}>
                                    <span className="material-symbols-outlined text-dark">
                                        done
                                    </span>
                                    <h4 className="fs-6 text-dark">{curr}</h4>
                                </div>
                            ))
                        }
                        <AddToCart />
                        <h2 className="fs-6 text-dark" style={{ fontWeight: '700' }}>CATEGORY:
                            <Link href={`/category/${productData.product.category}?page=1`} className="text-secondary text-decoration-none" style={{ fontWeight: '500' }}> {productData.product.category}</Link>
                        </h2>
                    </div>
                </div>
                <h2 className="fs-5 text-black" style={{ fontWeight: "500", marginTop: "20px" }}>RELATED PRODUCTS</h2>
                <div className="d-flex flex-wrap gap-3 pb-5 w-100">
                    {
                        relatedProductData?.map((curr: ProductsType, indx: number) => (
                            <div className="d-flex flex-column align-items-center bg-body-secondary p-1 mt-4" key={indx}>
                                <Link href={`${curr?.id}`} className="text-decoration-none"> <Image alt={curr?.name} width={'150'} height={'150'} src={curr?.image} /></Link>
                                <Link href={`${curr?.id}`} className="text-decoration-none">
                                    <h2 className="fs-6 text-dark lh-1" style={{ fontWeight: "700" }}>{curr?.name}</h2>
                                </Link>
                                <h4 className="fs-6 text-secondary lh-1" style={{ fontWeight: "500" }}>{curr?.price}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </StateProviderLayout>
    )
}