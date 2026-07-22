import theme from "@/libs/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
