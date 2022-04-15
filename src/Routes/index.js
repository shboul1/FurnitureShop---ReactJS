import React from "react";
import UserRoutes from "./UserRoutes";
import { BrowserRouter } from "react-router-dom";
export default function Routes() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
}
