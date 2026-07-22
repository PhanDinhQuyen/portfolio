"use client";
import { HeadingTitle } from "@/components/headingTitle";
import Section from "@/components/section";
import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Page() {
  return (
    <Section delay={0.2}>
      <HeadingTitle as='h2'>Personal projects</HeadingTitle>
      <Box
        display='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        gap='4'
        py='20'
      >
        <Spinner size='xl' color='brand.500' thickness='4px' />
        <Text fontSize='lg' color='gray.500'>
          Updating projects...
        </Text>
      </Box>
    </Section>
  );
}
