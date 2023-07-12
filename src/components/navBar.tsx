"use client";
import React, { HTMLAttributeAnchorTarget } from "react";
import { List, ListItem } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const linkSource = `https://github.com/PhanDinhQuyen/portfolio`;

import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  path: string | null;
  target: HTMLAttributeAnchorTarget;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItem) => {
  const active = path === href;
  const inActiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inActiveColor}
      target={target}
      href={href}
      p={2}
      borderRadius='5'
      _firstLetter={{ textTransform: `uppercase` }}
      {...props}
    >
      {children}
    </Link>
  );
};

function NavBar() {
  const pathName = usePathname();
  console.log(pathName);
  const Links = [`skills`, `uses`, `games`];

  return (
    <List fontSize='16' as='nav' display='flex' gap='3'>
      {Links.map((link) => (
        <LinkItem href={`/${link}`} target='_self' key={link} path={pathName}>
          {link}
        </LinkItem>
      ))}
      <LinkItem path={null} href={linkSource} target='_blank'>
        source
      </LinkItem>
    </List>
  );
}

export default NavBar;
