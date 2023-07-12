import { extendTheme } from "@chakra-ui/react";

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });
export default theme;
