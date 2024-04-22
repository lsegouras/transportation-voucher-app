import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email | !emailConf | !password | !name | !lastName) {
      setError("Fill in all fields!");
      return;
    } else if (email !== emailConf) {
      setError("E-mails don't match!");
      return;
    }

    const fullName = `${name} ${lastName}`;
    const res = register(email, password, fullName);

    if (res) {
      setError(res);
      return;
    }

    alert("User successfully registered!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Title>Register System</C.Title>
      <C.Content>
        <Input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="text"
          placeholder="Enter your Last Name"
          value={lastName}
          onChange={(e) => [setLastName(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Enter your E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirm your E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Register" onClick={handleSignup} />
        <C.LabelSignin>
          Have already an account?
          <C.Strong>
            <Link to="/">&nbsp;Enter</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Register;
