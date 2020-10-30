import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import LandingPage from "./landingPage";
import ProtectedRoutes from "./protectedRoutes";

export default function HomeProtectedRoute() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoutes path="/app" component={AppLayout} />
    </BrowserRouter>
  );
}
