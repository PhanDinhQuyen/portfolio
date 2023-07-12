import { Container } from "@chakra-ui/react";

import Loader from "@/components/dogLoader";
import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("../components/dog"), {
  ssr: false,
  loading: () => <Loader />,
});
export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as='main'
      paddingTop='14'
      position='relative'
      maxW='container.md'
    >
      {children}
    </Container>
  );
}
