"use client";

import {
  Box,
  Text,
  Avatar,
  Heading,
  useColorModeValue,
  Button,
  Icon,
  Badge,
  Stack,
} from "@chakra-ui/react";

import Section from "@/components/section";
import { HeadingTitle } from "@/components/headingTitle";

import Bio from "@/app/bio";
import OnWeb from "@/components/web";

import { BsHeartFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import { Link } from "@chakra-ui/next-js";
import { DownloadIcon } from "@chakra-ui/icons";

import { webs, urls } from "@/constants/home";
import { avatarImage } from "@/assets";

export default function Home() {
  const badgeBg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <Box p='2' w='full' margin='auto' maxW='container.lg' as='article'>
      <Section delay={0.2}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing='8'
          align='center'
          justify='space-between'
          marginBottom='10'
        >
          <Box flex='1' textAlign={{ base: "center", md: "left" }}>
            <Badge
              fontSize='sm'
              px='3'
              py='1'
              borderRadius='full'
              bg={badgeBg}
              marginBottom='4'
            >
              Developer & Linux SysAdmin based in Viet Nam
            </Badge>
            <Heading
              as='h1'
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight='bold'
              lineHeight='1.1'
              marginBottom='4'
            >
              Phan Dinh Quyen
            </Heading>
            <Text fontSize='lg' color='brand.500' fontWeight='medium' marginBottom='6'>
              Linux System Engineer
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing='3' justify={{ base: "center", md: "flex-start" }}>
              <Button
                as={Link}
                href='/projects'
                colorScheme='brand'
                rightIcon={<Icon as={BsHeartFill} />}
              >
                View Projects
              </Button>
              <Button
                as={Link}
                href='/LouisPhan-CV.pdf'
                target='_blank'
                variant='outline'
                rightIcon={<Icon as={DownloadIcon} />}
              >
                Download CV
              </Button>
            </Stack>
          </Box>

          <Avatar
            border='3px solid'
            borderColor='brand.500'
            loading='lazy'
            w={{ base: "32", md: "40" }}
            h={{ base: "32", md: "40" }}
            name='louis phan'
            src={avatarImage.src}
            userSelect='none'
          />
        </Stack>

        <Bio />

        <Section delay={0.4}>
          <HeadingTitle>
            Love <Icon as={BsHeartFill} />
          </HeadingTitle>
          <Text>
            Art, Code, Music, Anime, Manhwa, Light Novel, Game
          </Text>
        </Section>

        <Section delay={0.6}>
          <HeadingTitle>On the web</HeadingTitle>
          <Box display='flex' flexDir='column'>
            {webs.map((web) => {
              const Icon = web.icon;
              return (
                <OnWeb key={web.name} href={web.url}>
                  <Icon />
                  {web.name}
                </OnWeb>
              );
            })}
          </Box>
        </Section>

        <Section delay={0.8}>
          <HeadingTitle>Contact</HeadingTitle>
          <Box
            display='flex'
            gap='2'
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems='center'
            flexWrap='wrap'
          >
            <Button
              flex='1'
              gap='2'
              as={Link}
              target='_blank'
              href={`mailto:${urls.email}`}
              colorScheme='brand'
              minW='max-content'
            >
              Email me
              <Icon color='red.300' as={BiLogoGmail} />
            </Button>
          </Box>
        </Section>
      </Section>
    </Box>
  );
}
