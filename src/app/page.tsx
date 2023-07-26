import Link from "next/link";
import { CategoriesType, ProductsType } from "./const/interface";
import Header from "./components/Header/Header";
import Image from "next/image";
import AddToCart from "./components/AddToCart";
import StateProviderLayout from "@/LayOut/StateProviderLayout";

export async function getCategoryData() {
  try {
    const response = await fetch("http://localhost:3000/api/stickers/categories/all")
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function getProductsData() {
  try {
    const response = await fetch("http://localhost:3000/api/stickers/products/all")
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {

  const categoryData: Array<CategoriesType> = await getCategoryData();
  const productData: Array<ProductsType> = await getProductsData();

  return (
    <StateProviderLayout>
      <Header />
      <div className="d-flex">
        <div className="bg-body-tertiary w-25 d-flex flex-column gap-1 align-items-center overflow-y-auto" style={{ height: "88vh", padding: "20px 0px", position: "sticky", top: "74px" }}>
          <h1 className="fs-4 fw-bolder text-dark">Categories</h1>
          {
            categoryData?.map((curr: CategoriesType, indx: number) => (
              <Link href={`/category/${curr.name}?page=1`} className="fs-5 text-dark text-decoration-none">{curr?.name}</Link>
            ))
          }
        </div>
        <div className="px-5 py-4 bg-body-tertiary" style={{ width: "100vw" }}>
          <h4 className="fs-6">YOU WILL LOVE THESE</h4>
          <h4 className="fs-4" style={{ fontWeight: "700" }}>POPULAR STICKERS</h4>
          <div className="d-flex flex-wrap gap-4 pb-5">
            {
              productData?.map((curr: ProductsType, indx: number) => (
                <div className="d-flex flex-column align-items-center bg-body-secondary p-2 mt-4" key={indx}>
                  <Link href={`${curr?.id}`} className="text-decoration-none"> <Image alt={curr?.name} width={'200'} height={'200'} src={curr?.image} /></Link>
                  <AddToCart product={curr} />
                  <Link href={`/product/${curr?.id}`} className="text-decoration-none"><h2 className="fs-6 text-dark lh-1" style={{ fontWeight: "700" }}>{curr?.name}</h2> </Link>
                  <h4 className="fs-6 text-secondary lh-1" style={{ fontWeight: "500" }}>{curr?.price}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </StateProviderLayout >

  )
}
