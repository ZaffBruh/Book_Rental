import React from "react";
import Home from "./pages/Home";
import Rental from "./pages/Rental";
import Discussion from "./pages/Discussion";
import Review from "./pages/Review";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
//import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/review" element={<Review />} />
      </Route>
    )
  );

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
