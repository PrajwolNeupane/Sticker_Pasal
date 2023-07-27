import { ProductsType } from "@/app/const/interface";

const getTotalPrice = (products:ProductsType[]) => {
    var totalPrice = 0;
    var totalPriceWithDelivery = 90;
    products.forEach((curr:ProductsType,indx:number) => {
        var numberPart =  curr.price.split(' ')[1]
        totalPrice = totalPrice + Number(numberPart);
        totalPriceWithDelivery = totalPriceWithDelivery + Number(numberPart);
    })
    return {totalPrice:`Rs. ${totalPrice}`,totalPriceWithDelivery:`Rs ${totalPriceWithDelivery}`}
}

export default getTotalPrice;