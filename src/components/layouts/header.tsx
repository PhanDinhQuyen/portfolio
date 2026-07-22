"use client";

import {
  Box,
  useColorModeValue,
  Menu,
  MenuButton,
  IconButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "@chakra-ui/next-js";

import Logo from "../logo";
import NavBar from "../navBar";
import ProcessBar from "../processBar";
import ThemeToggleButton from "../themeSwitch";

import { linkSource } from "@/constants/header";

export default function Header() {
  const bg = useColorModeValue("rgba(255,255,255,0.8)", "rgba(15,15,16,0.8)");

  return (
    <Box
      backgroundColor={bg}
      backdropFilter='blur(12px)'
      w='full'
      zIndex='2'
      position='fixed'
      as='header'
      borderBottom='1px solid'
      borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    >
      <Box
        width='full'
        marginInline='auto'
        maxWidth='container.lg'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        p={3}
      >
        <Box display='flex' justifyContent='center' alignItems='center' gap='2'>
          <Logo />
          <NavBar />
        </Box>

        <Box>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <MenuItem as={Link} href='/'>
                  About
                </MenuItem>

                <MenuItem as={Link} href='/skills'>
                  Skills
                </MenuItem>

                <MenuItem as={Link} href='/uses'>
                  Uses
                </MenuItem>
                <MenuItem as={Link} href='/projects'>
                  Projects
                </MenuItem>
                <MenuItem as={Link} href={linkSource} target='_blank'>
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
      <ProcessBar />
    </Box>
  );
}
