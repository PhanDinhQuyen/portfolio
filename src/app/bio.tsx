import {
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import { HeadingTitle } from "@/components/headingTitle";
import Section from "../components/section";

import { mapUrls } from "@/constants/home";

export default function Bio() {
  const linkColor = useColorModeValue("purple.600", "purple.400");

  return (
    <Section delay={0.2}>
      <HeadingTitle>Bio</HeadingTitle>
      <Box marginBottom='3'>
        <TextLine year='2002'>
          Born in{" "}
          <Link color={linkColor} target='_blank' href={mapUrls.daklak}>
            Dak Lak
          </Link>
          , Viet Nam
        </TextLine>
      </Box>
      <Box marginBottom='3'>
        <TextLine year='2020'>
          Completed high school education at Nguyen Hue High School in{" "}
          <Link color={linkColor} target='_blank' href={mapUrls.daklak}>
            Dak Lak
          </Link>
        </TextLine>
      </Box>
      <Box>
        <TextLine year='Now'>
          Developer & Linux System Engineer based in{" "}
          <Link color={linkColor} target='_blank' href={mapUrls.hcm}>
            Ho Chi Minh City
          </Link>
          . I maintain legacy CentOS/RHEL fleets, automate infrastructure with
          Python/Bash and build web apps with React, Node.js and Docker.
        </TextLine>
      </Box>
    </Section>
  );
}

function TextLine({
  year,
  children,
}: {
  year: string;
  children: React.ReactNode;
}) {
  return (
    <Box display='flex' gap='4' alignItems='baseline'>
      <Heading
        as='span'
        fontSize='md'
        color='brand.500'
        minW='4rem'
        fontFamily='monospace'
      >
        {year}
      </Heading>
      <Box as='span' flex='1'>
        {children}
      </Box>
    </Box>
  );
}
