import { Container } from "@chakra-ui/react";

export default function Main({
  children,
  p,
  as,
  pt,
}: {
  children: React.ReactNode;
  p: boolean;
  as?: React.ElementType;
  pt?: string;
}) {
  return (
    <Container
    as={as || "div"}
    paddingY={p ? "12" : "0"}
    paddingTop={pt}
    position='relative'
    maxW='container.lg'
    px={{ base: 4, md: 8 }}
    >
      {children}
    </Container>
  );
}
