"use client";
import {
  Box,
  Text,
  Avatar,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import avatar from "../assets/avatar.jpg";
import { pacifico } from "@/libs/fonts";
import Section from "@/components/section";
import Bio, { HeadingTitle } from "@/components/bio";
import { Link } from "@chakra-ui/next-js";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import OnWeb from "@/components/web";

const urlGenshin = `https://enka.network/u/804579031/`;
const urlCodeWar = `https://www.codewars.com/users/PhanDinhQuyen`;
const email = `phanquyen7799@gmail.com`;
export const webs = [
  {
    url: "fb.me/louisphan2002",
    name: "@louisphan",
    icon: BsFacebook,
  },
  {
    url: "https://www.instagram.com/_louisphan_/",
    name: "@_louisphan_",
    icon: BsInstagram,
  },
  {
    url: "https://github.com/PhanDinhQuyen",
    name: "@PhanDinhQuyen",
    icon: BsGithub,
  },
];

export default function Home() {
  return (
    <Box p='2' w='full' margin='auto' maxW='lg' as='article'>
      <Section delay={1}>
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
              fontFamily={pacifico.style.fontFamily}
              fontSize='4xl'
              fontWeight='bold'
              marginBottom='2'
              minW='max-content'
            >
              Phan Đình Quyền
            </Heading>
            <Text as='p' wordBreak='break-word'>
              Web Developer{" "}
              <Text as='span' minWidth='max-content' wordBreak='break-word'>
                (FontEnd / BackEnd)
              </Text>
            </Text>
          </Box>

          <Avatar
            as={"div"}
            border='2px'
            borderColor={"red"}
            loading='lazy'
            w='32'
            h='32'
            name='louis phan'
            marginBottom='5'
            src={avatar.src}
          />
        </Box>
        <Bio />

        <Section delay={1}>
          <HeadingTitle>i ♥</HeadingTitle>
          <Text textIndent='1em'>
            Art,{" "}
            <Link color='pink.500' href={urlCodeWar}>
              Code,
            </Link>{" "}
            Music, Anime, Game, Manhwa, Light Novel,{" "}
          </Text>
          <Link color='pink.500' href={urlGenshin} target='_blank'>
            Genshin Impact
          </Link>
        </Section>

        <Section delay={1}>
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

        <Section delay={1}>
          <HeadingTitle>Contact</HeadingTitle>

          <Box display='flex' justifyContent='center' alignItems='center'>
            <Button gap='2' as={"a"} target='_blank' href={`mailto:${email}`}>
              Send me to
              <BiLogoGmail />
            </Button>
          </Box>
        </Section>
      </Section>
    </Box>
  );
}
