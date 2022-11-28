import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "./cartSlice";
const Cart = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const { cartItems, total } = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) navigate("/");
  });

  return (
    <div className="container ">
      <div className="display-6 mx-auto text-center text-primary">
        Total: {total}
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="row justify-content-center p-2 my-2 shadow-sm border-sm rounded "
            >
              <img
                className="col-2 border-start border-secondary"
                style={{ width: "150px", height: "150px" }}
                src={item.img}
                alt="product"
              />
              <div className="col-2 align-self-center display-6">
                {item.pName}
              </div>
              <div className="col-2 align-self-center display-6">
                {item.price}
              </div>
              <div className="col-2 align-self-center display-6">
                {item.quantity}
              </div>
              <button
                style={{ width: "50px" }}
                className="mx-2 col-2 align-self-center display-6 btn btn-outline-primary"
                onClick={() => dispatch(cartActions.increase(item.id))}
              >
                +
              </button>
              <button
                style={{ width: "50px" }}
                className="mx-2 col-2 align-self-center display-6 btn btn-outline-secondary"
                onClick={() => dispatch(cartActions.decrease(item.id))}
              >
                -
              </button>
              <button
                style={{
                  width: "max-content",
                }}
                className=" col-2 align-self-center display-6 btn btn-danger"
                onClick={() => dispatch(cartActions.remove(item.id))}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
