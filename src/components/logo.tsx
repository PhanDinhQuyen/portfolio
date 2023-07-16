import Link from "next/link";
import { Heading, useColorModeValue } from "@chakra-ui/react";
import FootprintIcon from "./icons/footPrint";
import styled from "@emotion/styled";

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
        <Heading
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontWeight='bold'
          fontSize='2xl'
          ml={3}
          minW='max-content'
        >
          Louis Phan
        </Heading>
      </LogoBox>
    </Link>
  );
};

export default Logo;
