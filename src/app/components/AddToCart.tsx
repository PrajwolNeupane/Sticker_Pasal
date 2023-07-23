"use client"

interface AddToCartProps {
    id: string;
  }
  
  const AddToCart: React.FC<AddToCartProps> = ({ id }) => {
    return (
      <button className="mt-3 mb-2 bg-dark text-white px-4 py-1" style={{fontWeight:"400",border:"none"}} onClick={() => { alert(id) }}>
        Add To Cart
      </button>
    );
  };
  
  export default AddToCart;