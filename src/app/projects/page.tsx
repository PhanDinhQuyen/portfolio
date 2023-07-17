"use client";
import { HeadingTitle } from "@/components/headingTitle";
import ProjectItem from "@/components/projectItem";
import Section from "@/components/section";
import { listProjects } from "@/constants/project";

export default function Page() {
  return (
    <Section delay={0.2}>
      <HeadingTitle as='h2'>Personal projects</HeadingTitle>
      {listProjects.map((project, key) => {
        return <ProjectItem key={key} index={key} props={project} />;
      })}
    </Section>
  );
}
