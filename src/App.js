import "./index.css";
import Cart from "./features/cart/Cart";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Nav/Profile";
import Counter from "./features/counter/Counter";
import Products from "./components/Products";
import Auth from "./features/auth/Auth";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { UISliceActions } from "./features/ui/ui-slice";
let callFlag = false;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    try {
      async function postCart() {
        console.log("Request sent to firbase db");
        dispatch(
          UISliceActions.showNotification({
            status: "pending",
            message: "Adding items to cart",
          })
        );
        const res = await axios.put(
          "https://expensetracker-760b4-default-rtdb.firebaseio.com/cart.json",
          {
            cartItems: JSON.stringify(cart.cartItems),
            total: cart.total,
          }
        );
        if (res.statusText === "OK") {
          dispatch(
            UISliceActions.showNotification({
              status: "success",
              message: "Item added to cart successfully",
            })
          );
        }
      }
      if (callFlag) {
        postCart();
      }
      callFlag = true;
    } catch (error) {
      dispatch(
        UISliceActions.showNotification({
          status: "failed",
          message: "Item added to cart successfully",
        })
      );
    }
  }, [cart, dispatch]);

  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="counter" element={<Counter />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/" element={<Auth />} />
      </Routes>

      {/* <Counter /> */}
    </>
  );
}

export default App;
