import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Section from "../components/section";
import { ReactNode } from "react";
import { pacifico } from "@/libs/fonts";
const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

export const HeadingTitle = ({
  children,
  fontSize,
}: {
  children: ReactNode;
  fontSize: string | undefined;
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
      className={pacifico.className}
    >
      {children}
    </Heading>
  );
};

export default function Bio() {
  return (
    <Section delay={0.2}>
      <HeadingTitle fontSize={undefined}>Bio</HeadingTitle>
      <BioSection>
        <BioYear>2002</BioYear>
        Born in DakLak , Viet Nam.
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Completing high school education at Nguyen Hue HighSchool in DakLak
      </BioSection>
      <BioSection>
        <BioYear>Now</BioYear>
        Currently a third-year college student and studying at the Cryptography
        Technical Academy in Ho Chi Minh City
      </BioSection>
    </Section>
  );
}
