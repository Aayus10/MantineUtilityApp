import React from "react";
import {
  Button,
  Flex,
  AppShell,
  Burger,
  useMantineColorScheme,
  useComputedColorScheme,
  Title,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";

function Header({ toggle, opened }: any) {
  const { setColorScheme } = useMantineColorScheme();
  const computedcolorscheme = useComputedColorScheme();

  const togglecolor = () => {
    setColorScheme(computedcolorscheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="App" style={{ marginTop: "20px" }}>
        <AppShell.Header>
          <Flex
            justify="space-between"
            align="center"
            style={{
              padding: "10px 20px",
              backgroundColor:
                computedcolorscheme === "dark" ? "#662727" : "ivory",
            }}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            ></Burger>
            <Title style={{ marginLeft: "10%" }} order={2}>
              Basic Utility Apps
            </Title>
            <Button
              size="sm"
              variant="link"
              color={computedcolorscheme === "light" ? "red" : "teal"}
              onClick={() => {
                togglecolor();
              }}
            >
              {computedcolorscheme === "dark" ? <FaSun /> : <FaMoon />}
            </Button>
          </Flex>
        </AppShell.Header>
      </div>
    </>
  );
}

export default Header;
