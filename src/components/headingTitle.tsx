import { Heading } from "@chakra-ui/react";
import { ElementType } from "react";

export const HeadingTitle = ({
  children,
  fontSize,
  as,
}: {
  children: React.ReactNode;
  fontSize?: string;
  as?: ElementType;
}) => {
  return (
    <Heading
      as={as || "h3"}
      marginBottom='4'
      fontSize={fontSize || "x-large"}
      color='brand.500'
      variant='section-title'
      display='inline-flex'
      gap='2'
      justifyContent='flex-start'
      alignItems='center'
    >
      {children}
    </Heading>
  );
};
