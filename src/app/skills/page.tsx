"use client";

import { ChevronRightIcon, Icon } from "@chakra-ui/icons";

import { HeadingTitle } from "@/components/headingTitle";
import { skills } from "@/constants/skills";

import GirdItems from "@/components/girdItems";
import Section from "@/components/section";

import Description from "./description";

export default function Skills() {
  return (
    <Section delay={0.2}>
      <Description />

      <HeadingTitle as='h2'>Skills</HeadingTitle>

      <Section delay={0.4}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          Languages
        </HeadingTitle>
        <GirdItems list={skills.languages} />
      </Section>

      <Section delay={0.5}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          FrontEnd
        </HeadingTitle>
        <GirdItems list={skills.client} />
      </Section>

      <Section delay={0.6}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          BackEnd & Web Servers
        </HeadingTitle>
        <GirdItems list={skills.server} />
      </Section>

      <Section delay={0.7}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          Systems & Infrastructure
        </HeadingTitle>
        <GirdItems list={skills.systems} />
      </Section>

      <Section delay={0.8}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          Tools & IDEs
        </HeadingTitle>
        <GirdItems list={skills.other} />
      </Section>
    </Section>
  );
}
