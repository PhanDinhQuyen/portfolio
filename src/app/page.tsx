"use client";

import {
  Box,
  Text,
  Avatar,
  Heading,
  useColorModeValue,
  Button,
  Icon,
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
  return (
    <Box p='2' w='full' margin='auto' maxW='lg' as='article'>
      <Section delay={0.2}>
        <Text
          fontSize='16'
          bg={useColorModeValue(`blackAlpha.200`, `whiteAlpha.200`)}
          textAlign='center'
          borderRadius='5'
          py='3'
          px='2'
          marginBottom='5'
        >
          Hello, I am a Web Developer based in Viet Nam!
        </Text>

        <Box
          display='flex'
          flexWrap='wrap-reverse'
          justifyContent='center'
          alignItems='center'
          marginBottom='4'
        >
          <Box flex='1' textAlign={{ base: "center", sm: "left" }}>
            <Heading
              as='h2'
              fontSize='4xl'
              fontWeight='bold'
              marginBottom='2'
              minW='max-content'
            >
              Phan Đình Quyền
            </Heading>
            <Text as='p' wordBreak='break-word'>
              Web Developer&nbsp;
              <Text
                fontWeight='500'
                as='span'
                minWidth='max-content'
                wordBreak='break-word'
              >
                (
                <Link color='pink.500' href='/skills'>
                  FontEnd
                </Link>
                /
                <Link color='pink.500' href='/skills'>
                  BackEnd
                </Link>
                )
              </Text>
            </Text>
          </Box>

          <Avatar
            border='2px'
            loading='lazy'
            w='32'
            h='32'
            name='louis phan'
            marginBottom='5'
            src={avatarImage.src}
            userSelect='none'
            as='div'
            position='relative'
          />
        </Box>
        <Bio />

        <Section delay={0.4}>
          <HeadingTitle>
            Love <Icon as={BsHeartFill} />
          </HeadingTitle>
          <Text textIndent='1em'>
            Art,&nbsp;
            <Link color='pink.500' href={urls.urlCodeWar} target='_blank'>
              Code,
            </Link>
            &nbsp;Music, Anime, Manhwa, Light Novel,&nbsp;
            <Link color='pink.500' href={urls.urlGenshin} target='_blank'>
              Game
            </Link>
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
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
          >
            <Button
              flex='1'
              gap='2'
              as={Link}
              target='_blank'
              href={`mailto:${urls.email}`}
              backgroundColor='teal.500'
              color='whiteAlpha.900'
              minW='max-content'
            >
              Send me to
              <Icon color='red.300' as={BiLogoGmail} />
            </Button>
            <Button
              backgroundColor='red.500'
              color='whiteAlpha.900'
              flex='1'
              gap='2'
              as={Link}
              target='_blank'
              href='/'
              minW='max-content'
            >
              My CV
              <Icon as={DownloadIcon} />
            </Button>
          </Box>
        </Section>
      </Section>
    </Box>
  );
}
