import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import useAuth from "./../hooks/useAuth";
import Employee from "./../pages/Employee/index";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  console.log("signed:" + signed);

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route
            exact
            path="/employees"
            element={<Private Item={Employee} />}
          />
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
