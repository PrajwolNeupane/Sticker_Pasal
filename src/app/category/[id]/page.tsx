import StateProviderLayout from "@/LayOut/StateProviderLayout";
import AddToCart from "@/app/components/AddToCart";
import { CategoriesType, ProductsType } from "@/app/const/interface";
import Image from "next/image";
import Link from "next/link";
import { getCategoryData, getCategoryProducts } from "./dataFetchingFunctions";

interface PageProps {
    params: {
        id: string;
    };
    searchParams: any
}



export default async function Page({ params, searchParams }: PageProps) {


    const page = searchParams.page;
    const categoryData: Array<CategoriesType> = await getCategoryData();
    const categoryProducts: Array<ProductsType> = await getCategoryProducts(params.id, page);

    return (
        <StateProviderLayout>
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
                                <Link href={`/category/${curr.name}?page=1`} className="fs-5 text-dark text-decoration-none" key={indx}>{curr?.name}</Link>
                            ))
                        }
                    </div>
                    <div className="px-3 py-4 bg-body-tertiary" style={{ width: "100vw" }}>
                        <h4 className="fs-3" style={{ fontWeight: "400" }}>{params.id.toUpperCase()}</h4>
                        <div className="d-flex flex-wrap gap-4 pb-5 w-100">
                            {
                                categoryProducts?.map((curr: ProductsType, indx: number) => (
                                    <div className="d-flex flex-column align-items-center bg-body-secondary p-2 mt-4" key={indx}>
                                        <Link href={`${curr?.id}`} className="text-decoration-none"> <Image alt={curr?.name} width={'200'} height={'200'} src={curr?.image} /></Link>
                                        <AddToCart product={curr} />
                                        <Link href={`${curr?.id}`} className="text-decoration-none"><h2 className="fs-6 text-dark lh-1" style={{ fontWeight: "700" }}>{curr?.name}</h2> </Link>
                                        <h4 className="fs-6 text-secondary lh-1" style={{ fontWeight: "500" }}>{curr?.price}</h4>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="d-flex justify-content-end" style={{ width: "95%" }}>
                            <div className="d-flex align-items-center gap-3">
                                <Link href={page > 1 ? `?page=${Number(page) - 1}` : ''}>
                                    <span className="material-symbols-outlined text-dark" style={{ cursor: "pointer" }} >
                                        arrow_back_ios
                                    </span>
                                </Link>
                                <h3 className="fs-5" style={{ marginTop: "5px" }}>{page}</h3>
                                <Link href={`?page=${Number(page) + 1}`}>
                                    <span className="material-symbols-outlined text-dark ml-5" style={{ cursor: "pointer", marginLeft: "5px" }}>
                                        arrow_forward_ios
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StateProviderLayout>
    )
}