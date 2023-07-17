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
      marginBottom='5'
      textDecoration='underline'
      textUnderlineOffset='8px'
      textDecorationThickness='4px'
      textDecorationColor='#525252'
      fontSize={fontSize || "x-large"}
      variant='section-title'
      display='inline-flex'
      gap='2'
      justifyContent='flex-start'
      alignItems='center'
      // className={pangolin.className}
    >
      {children}
    </Heading>
  );
};
