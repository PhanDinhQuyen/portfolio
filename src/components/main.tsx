import { Container } from "@chakra-ui/react";

export default function Main({
  children,
  p,
  as,
}: {
  children: React.ReactNode;
  p: boolean;
  as: React.ElementType | undefined;
}) {
  return (
    <Container
      as={as || "div"}
      paddingY={p ? "12" : 0}
      position='relative'
      maxW='container.md'
      // minH='container.md'
    >
      {children}
    </Container>
  );
}
