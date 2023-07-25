export interface SignUpDataType {
  name:string,
  email:string,
  password:string,
  phonenumber:string
}

export interface LogInDataType {
  email:string,
  password:string
}

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

