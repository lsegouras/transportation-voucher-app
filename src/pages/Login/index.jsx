import React, { useState } from "react";
import * as C from "./styles";
import Button from "../../components/atoms/Button";
import Input from "./../../components/atoms/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Fill in all fields!");
      return;
    }

    const res = login(email, password);

    if (res) {
      setError(res);
      return;
    }
    navigate("/home");
  };

  return (
    <C.Container>
      <C.Title>Login System</C.Title>
      <C.Content>
        <Input
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Sign In" onClick={handleLogin} Type="button" />
        <C.LabelSignup>
          Don't have an account?
          <C.Strong>
            <Link to="/register">&nbsp;Register</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Login;
