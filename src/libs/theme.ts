import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";
import { pangolin } from "./fonts";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};
const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: pangolin.style.fontFamily,
};

const theme = extendTheme({ config, colors, styles, fonts });
export default theme;
