import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <RoutesApp />
      </DataProvider>
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
