import { Container } from "@chakra-ui/react";

export default function Main({
  children,
  p,
}: {
  children: React.ReactNode;
  p: boolean;
}) {
  return (
    <Container
      as='div'
      paddingTop={p ? "14" : 0}
      position='relative'
      maxW='container.md'
    >
      {children}
    </Container>
  );
}
