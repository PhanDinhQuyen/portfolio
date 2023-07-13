"use client";
import { HeadingTitle } from "@/components/bio";
import Section from "@/components/section";
import { Icon, List, ListItem, Text } from "@chakra-ui/react";
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs } from "react-icons/bi";
const skills = [
  {
    name: "React",
    icon: BiLogoReact,
  },
  {
    name: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    name: "Node",
    icon: BiLogoNodejs,
  },
];

export default function Skills() {
  return (
    <Section delay={1}>
      <HeadingTitle>Skills</HeadingTitle>
      <List display='grid' gridTemplateColumns='1fr 1fr 1fr' gridGap='2'>
        {skills.map((skill) => (
          <ListItem key={skill.name}>
            <Icon fontSize='6xl' as={skill.icon} />
            <Text>{skill.name}</Text>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}
