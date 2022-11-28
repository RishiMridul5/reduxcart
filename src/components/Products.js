import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
import Notification from "./UI/Notification";

const dummy_products = [
  {
    pName: "Shoe",
    img: "https://via.placeholder.com/300.png?",
    id: 1,
    price: 2000,
  },
  {
    pName: "Bag",
    img: "https://via.placeholder.com/300.png?",
    id: 2,
    price: 1400,
  },
  {
    pName: "Jeans",
    img: "https://via.placeholder.com/300.png?",
    id: 3,
    price: 1999,
  },
  {
    pName: "Kurta",
    img: "https://via.placeholder.com/300.png?",
    id: 4,
    price: 1200,
  },
  {
    pName: "Phone cover",
    img: "https://via.placeholder.com/300.png?",
    id: 5,
    price: 360,
  },
];
const Products = () => {
  const dispath = useDispatch();

  const addtoCartHandler = (e, product) => {
    e.preventDefault();

    dispath(cartActions.addToCart(product));
  };

  return (
    <>
      <Notification />
      <div className="container">
        <div className="row justify-content-center">
          {dummy_products.map((product) => {
            return (
              <div className="col-sm-auto gx-5 card p-3 m-1 " key={product.id}>
                <img src={product.img} alt="dummy" />
                <div className="display-6">{product.pName}</div>
                <div>Rs {product.price}</div>
                <button
                  className="btn btn-primary"
                  onClick={(e) => addtoCartHandler(e, product)}
                >
                  ADD TO CART
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
