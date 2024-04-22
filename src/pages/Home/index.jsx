import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Navigation from "../../components/organisms/Navbar";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navigation />
      <C.Container>
        <C.Title>Home</C.Title>
        {user && <C.WelcomeMessage>Welcome, {user.fullName}!</C.WelcomeMessage>}
        <Button Text="Employees" onClick={() => navigate("/employees")} />{" "}
        <Button
          Text="Leave"
          isLeaveButton={true}
          onClick={() => [signout(), navigate("/")]}
        />{" "}
      </C.Container>
    </>
  );
};

export default Home;
