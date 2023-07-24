import AddToCart from "@/app/components/AddToCart";
import { CategoriesType, ProductsType } from "@/app/const/interface";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
    params: {
        id: string;
    };
}
export async function getCategoryData() {
    try {
        const response = await fetch("http://localhost:3000/api/stickers/categories/all", {
            cache: 'no-cache'
        })
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
export async function getCategoryProducts(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/stickers/categories?id=${id}&page=1`, {
            cache: 'no-cache'
        })
        return response.json();
    } catch (e) {
        console.log(e);
    }
}


export default async function Page({ params }: PageProps) {

    const categoryData: Array<CategoriesType> = await getCategoryData();
    const categoryProducts: Array<ProductsType> = await getCategoryProducts(params.id);

    return (
        <div className="w-100 px-5 bg-body-tertiary">
            <div className="bg-dark-subtle w-100 py-5 px-5 d-flex justify-content-between align-items-end" style={{ height: "150px" }}>
                <h1 className="fs-2 text-dark" style={{ fontWeight: "700" }}>CATEGORY</h1>
                <h1 className="fs-6 text-secondary" style={{ fontWeight: "500" }}><Link href={"/"} className="text-decoration-none text-dark">
                    HOME</Link> / CATEGORY</h1>
            </div>
            <div className="d-flex">
                <div className="bg-body-tertiary w-25 d-flex flex-column gap-1 align-items-center overflow-y-auto" style={{ height: "88vh", padding: "20px 0px", position: "sticky", top: "74px" }}>
                    <h1 className="fs-4 fw-bolder text-dark">Categories</h1>
                    {
                        categoryData?.map((curr: CategoriesType, indx: number) => (
                            <Link href={`/category/${curr.name}`} className="fs-5 text-dark text-decoration-none">{curr?.name}</Link>
                        ))
                    }
                </div>
                <div className="px-3 py-4 bg-body-tertiary" style={{ width: "100vw" }}>
                    <h4 className="fs-3" style={{ fontWeight: "400" }}>{params.id.toUpperCase()}</h4>
                    <div className="d-flex flex-wrap gap-4 pb-5 w-100">
                        {
                            categoryProducts?.map((curr: ProductsType, indx: number) => (
                                <div className="d-flex flex-column align-items-center bg-body-secondary p-2 mt-4" key={indx}>
                                    <Link href={`/product/${curr?.id}`} className="text-decoration-none"> <Image alt={curr?.name} width={'200'} height={'200'} src={curr?.image} /></Link>
                                    <AddToCart id={curr?.id} />
                                    <Link href={`/product/${curr?.id}`} className="text-decoration-none"><h2 className="fs-6 text-dark lh-1" style={{ fontWeight: "700" }}>{curr?.name}</h2> </Link>
                                    <h4 className="fs-6 text-secondary lh-1" style={{ fontWeight: "500" }}>{curr?.price}</h4>
                                </div>
                            ))
                        }
                    </div>
                    <h4 className="fs-3" style={{ fontWeight: "400",marginLeft:"100%",translate:"100% 0px" }}>{params.id.toUpperCase()}</h4>
                </div>
            </div>
        </div>
    )
}