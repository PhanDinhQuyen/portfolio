"use client";

import Section from "@/components/section";
import { HeadingTitle } from "@/components/headingTitle";
import { Text, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import {
  firstTerminalImage,
  secondTerminalImage,
  firstVsCodeImage,
} from "@/assets";

import { urls } from "@/constants/uses";

import WrapperImage from "@/components/wrapperImage";
import { Link } from "@chakra-ui/next-js";

export default function Uses() {
  return (
    <Section delay={1}>
      <HeadingTitle>Uses</HeadingTitle>

      <Section delay={0.4}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          My terminal setup
        </HeadingTitle>
        <Text marginY='2em' textIndent='2em'>
          I am using&nbsp;
          <Link color='purple.400' href={urls.urlOhMyPosh}>
            oh-my-posh
          </Link>
          &nbsp;to configure my terminal
        </Text>

        <WrapperImage text='My terminal' image={firstTerminalImage} />

        <Text marginY='2em' textIndent='2em'>
          File configuration settings for the terminal
        </Text>

        <WrapperImage text='File config (.ps1)' image={secondTerminalImage} />
      </Section>

      <Section delay={0.8}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          My VSCode setup
        </HeadingTitle>
        <Text marginY='2em' textIndent='2em'>
          File setting &nbsp;
          <Link
            color='pink.500'
            fontStyle='italic'
            target='_blank'
            href={urls.urlGit}
          >
            here
          </Link>
        </Text>

        <WrapperImage text='My settings VSCode' image={firstVsCodeImage} />
      </Section>
    </Section>
  );
}
