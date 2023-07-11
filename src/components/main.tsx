import { Container } from "@chakra-ui/react";

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
