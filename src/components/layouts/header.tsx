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
  return (
    <Box
      backgroundColor={useColorModeValue("#ffffff40", "#20202380")}
      blur='base'
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
