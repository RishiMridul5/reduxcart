import React from "react";
import { useSelector } from "react-redux";
import module from "./Notification.module.css";
const Notification = () => {
  const { status, message } = useSelector((state) => state.ui.notification);

  return <div className={`${module[status]} ${module.notification}`}>{message}</div>;
};

export default Notification;
