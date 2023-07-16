"use client";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import FootprintIcon from "./icons/footPrint";
import styled from "@emotion/styled";
import { pangolin } from "@/libs/fonts";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href='/' scroll={false}>
      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily={pangolin.style.fontFamily}
          fontWeight='bold'
          fontSize='2xl'
          ml={3}
          minW='max-content'
        >
          Louis Phan
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
