import React from "react";
import "./NavBar.css";

import {
  Button,
  AppShell,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";

import { NavLink } from "react-router-dom";
function App() {
  const { setColorScheme } = useMantineColorScheme();
  const computedcolorscheme = useComputedColorScheme();

  return (
    <>
      <div className="App" style={{ marginTop: "20px" }}>
        <AppShell.Navbar
          style={{
            backgroundColor:
              computedcolorscheme === "light" ? " ivory" : "#662727",
            gap: "15px",
          }}
          p="md"
        >
          <NavLink to="/text-utility" style={{ margin: "5px" }}>
            <Button
              className="btns"
              color={computedcolorscheme === "light" ? "red" : "teal"}
            >
              Text Utility Application
            </Button>
          </NavLink>
          <NavLink to="/button" style={{ margin: "5px" }}>
            <Button
              className="btns"
              color={computedcolorscheme === "light" ? "red" : "teal"}
            >
              Weather Application
            </Button>
          </NavLink>
        </AppShell.Navbar>
      </div>
    </>
  );
}

export default App;
