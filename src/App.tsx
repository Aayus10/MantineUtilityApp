import React from "react";
import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RouterSwitcher from "./components/RouterSwitcher";
import { AppShell, useComputedColorScheme } from "@mantine/core";
import { FaCopyright } from "react-icons/fa";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const computedcolorscheme = useComputedColorScheme();

  return (
    <>
      <div className="App" style={{ marginTop: "20px" }}>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <Header toggle={toggle} opened={opened}></Header>
          <NavBar></NavBar>
          <AppShell.Main
            style={{
              backgroundColor:
                computedcolorscheme === "light" ? " #EBF5FC" : "",
            }}
          >
            <RouterSwitcher />
          </AppShell.Main>
          <AppShell.Footer zIndex={opened ? "auto" : 201}>
            Copyright <FaCopyright></FaCopyright> 2024
          </AppShell.Footer>
        </AppShell>
      </div>
    </>
  );
}

export default App;
