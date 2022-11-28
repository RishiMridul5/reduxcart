import { Link } from "react-router-dom";
import { authSliceActions } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
const Nav = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispath = useDispatch();
  const logoutHandler = () => {
    dispath(authSliceActions.logout());
  };
  return (
    <>
      {auth && (
        <nav style={{ backgroundColor: "rgb(239, 243, 247)" }}>
          <div className="container">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard/counter"}>
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard/profile"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark position-relative"
                  to={"/dashboard/cart"}
                >
                  Cart
                  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-info">
                   {cartItems.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link " onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
