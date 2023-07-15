"use client";
import { HeadingTitle } from "@/app/bio";
import GirdItems from "@/components/girdItems";
import Section from "@/components/section";
import { skills } from "@/constants/skills";
// import Loading from "@/components/loading";
import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
export default function Skills() {
  // return <Loading />;

  return (
    <Section delay={1}>
      <HeadingTitle fontSize={undefined}>Skills</HeadingTitle>

      <Section delay={0.2}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          Languages
        </HeadingTitle>
        <GirdItems list={skills.languages} />
      </Section>

      <Section delay={0.4}>
        <HeadingTitle fontSize='18'>
          <Icon id='#fontend' as={ChevronRightIcon} />
          FontEnd
        </HeadingTitle>
        <GirdItems list={skills.client} />
      </Section>

      <Section delay={0.6}>
        <HeadingTitle fontSize='18'>
          <Icon id='#backend' as={ChevronRightIcon} />
          BackEnd
        </HeadingTitle>
        <GirdItems list={skills.server} />
      </Section>

      <Section delay={0.8}>
        <HeadingTitle fontSize='18'>
          <Icon as={ChevronRightIcon} />
          Tools, IDEs, other...
        </HeadingTitle>
        <GirdItems list={skills.other} />
      </Section>
    </Section>
  );
}
