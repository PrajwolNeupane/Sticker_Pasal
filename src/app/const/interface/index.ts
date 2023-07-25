export interface ProductsType {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface DetailProductType{
  id: string;
  name: string;
  price: string;
  image: string;
  category:string;
  descripton:Array<string>;
}

export interface CategoriesType {
  name: string;
  image: string;
}

