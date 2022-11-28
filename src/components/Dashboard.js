import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";
const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <>
      {auth && (
        <>
          <Nav />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Dashboard;
