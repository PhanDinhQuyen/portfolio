"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ThemeToggleButton from "./themeSwitch";
import NavBar from "./navBar";

import Logo from "./logo";
export default function Header() {
  return (
    <Box
      backgroundColor={useColorModeValue("#ffffff40", "#20202380")}
      w='full'
      zIndex='2'
      position='fixed'
      as='header'
    >
      <Box
        width='full'
        marginInline='auto'
        maxWidth='container.md'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p={2}
      >
        <Box display='flex' justifyContent='center' alignItems='center' gap='2'>
          <Logo />
          <NavBar />
        </Box>
        <ThemeToggleButton />
      </Box>
    </Box>
  );
}
