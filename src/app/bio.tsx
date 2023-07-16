import { Box, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { HeadingTitle } from "@/components/headingTitle";
import Section from "../components/section";

import { mapUrls } from "@/constants/home";

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

export default function Bio() {
  return (
    <Section delay={0.2}>
      <HeadingTitle>Bio</HeadingTitle>
      <BioSection>
        <BioYear>2002</BioYear>
        Born in&nbsp;
        <Link
          minW='max-content'
          color='purple.400'
          target='_blank'
          href={mapUrls.daklak}
        >
          Dak Lak
        </Link>
        , Viet Nam
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Completing high school education at Nguyen Hue HighSchool in&nbsp;
        <Link
          minW='max-content'
          color='purple.400'
          target='_blank'
          href={mapUrls.daklak}
        >
          Dak Lak
        </Link>
      </BioSection>
      <BioSection>
        <BioYear>Now</BioYear>
        Currently a {new Date().getFullYear() - 2019}-year college student and
        studying at the Cryptography Technical Academy in&nbsp;
        <Link
          minW='max-content'
          color='purple.400'
          target='_blank'
          href={mapUrls.hcm}
        >
          Ho Chi Minh City
        </Link>
      </BioSection>
    </Section>
  );
}
