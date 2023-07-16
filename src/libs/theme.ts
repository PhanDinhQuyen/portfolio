import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

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

const theme = extendTheme({ config, colors, styles });
export default theme;
