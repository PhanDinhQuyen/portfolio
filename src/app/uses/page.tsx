"use client";
import Section from "@/components/section";
import { HeadingTitle } from "../bio";
import { Text, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import img1 from "../../assets/uses/1.png";
import img2 from "../../assets/uses/2.png";
import img3 from "../../assets/uses/3.png";
import WrapperImage from "@/components/wrapperImage";
import { Link } from "@chakra-ui/next-js";
export default function Uses() {
  return (
    <Section delay={1}>
      <HeadingTitle fontSize={undefined}>Uses</HeadingTitle>

      <Section delay={0.4}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          My terminal setup
        </HeadingTitle>
        <Text marginY='2em' textIndent='2em'>
          I am using oh-my-posh to configure my terminal
        </Text>

        <WrapperImage text='My terminal' image={img1} />

        <Text marginY='2em' textIndent='2em'>
          File configuration settings for the terminal
        </Text>

        <WrapperImage text='File config (.ps1)' image={img2} />
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
            href='https://github.com/PhanDinhQuyen/settings'
          >
            here
          </Link>
        </Text>

        <WrapperImage text='My settings VSCode' image={img3} />
      </Section>
    </Section>
  );
}
