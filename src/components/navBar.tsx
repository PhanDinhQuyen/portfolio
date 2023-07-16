"use client";
import React, { Fragment, HTMLAttributeAnchorTarget } from "react";
import { List } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export const linkSource = `https://github.com/PhanDinhQuyen/portfolio`;

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
  const Links = [`skills`, `uses`, `projects`];

  return (
    <Fragment>
      <List
        fontSize='16'
        as='nav'
        display={{ base: "none", md: "flex" }}
        gap='3'
      >
        {Links.map((link) => (
          <LinkItem href={`/${link}`} target='_self' key={link} path={pathName}>
            {link}
          </LinkItem>
        ))}
        <LinkItem path={null} href={linkSource} target='_blank'>
          source
        </LinkItem>
      </List>
    </Fragment>
  );
}

export default NavBar;
