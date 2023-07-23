import Link from "next/link";
import { CategoriesType } from "./const/interface";
import Header from "./components/Header/Header";

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

export default async function Home() {

  const categoryData: Array<CategoriesType> = await getCategoryData();

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="bg-body-tertiary w-25 d-flex flex-column gap-1 align-items-center overflow-y-auto" style={{ height: "88vh", padding:"20px 0px" ,position:"sticky",top:"74px" }}>
          <h1 className="fs-4 fw-bolder text-dark">Categories</h1>
          {
            categoryData?.map((curr: CategoriesType, indx: number) => (
              <Link href={`/category/${curr.name}`} className="fs-5 text-dark text-decoration-none">{curr?.name}</Link>
            ))
          }
        </div>
        <div style={{ width: "80vw", height: "1200vh", backgroundColor: "red" }}>

        </div>
      </div>
    </>

  )
}
