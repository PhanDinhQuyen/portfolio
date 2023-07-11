"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import ThemeToggleButton from "./themeSwitch";
import FootprintIcon from "@/assets/footPrint";
import Logo from "./logo";
export default function Header() {
  return (
    <Box w='full' zIndex='2' position='fixed' as='header'>
      <Box
        width='full'
        marginInline='auto'
        maxWidth='container.sm'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p={2}
      >
        <Box display='flex'>
          <Logo />
        </Box>
        <ThemeToggleButton />
      </Box>
    </Box>
  );
}
