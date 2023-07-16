import { Heading } from "@chakra-ui/react";
import { pangolin } from "@/libs/fonts";

export const HeadingTitle = ({
  children,
  fontSize,
}: {
  children: React.ReactNode;
  fontSize?: string;
}) => {
  return (
    <Heading
      as='h3'
      marginBottom='5'
      textDecoration='underline'
      textUnderlineOffset='6px'
      textDecorationThickness='4px'
      textDecorationColor='#525252'
      fontSize={fontSize || "x-large"}
      variant='section-title'
      display='flex'
      gap='2'
      justifyContent='flex-start'
      alignItems='center'
      className={pangolin.className}
    >
      {children}
    </Heading>
  );
};
