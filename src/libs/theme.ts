import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";
import { pangolin } from "./fonts";
import { themeConfig } from "./theme-config";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#fafaf9", "#0f0f10")(props),
      color: mode("#1c1917", "#e7e5e4")(props),
    },
  }),
};
const colors = {
  grassTeal: "#14b8a6",
  brand: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
};

const fonts = {
  heading: pangolin.style.fontFamily,
};

const theme = extendTheme({ config: themeConfig, colors, styles, fonts });
export default theme;
