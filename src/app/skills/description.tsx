import { Text, Box } from "@chakra-ui/react";
import { HeadingTitle } from "@/components/headingTitle";

import Section from "@/components/section";

export default function Description() {
  return (
    <Section delay={0.2}>
      <HeadingTitle fontSize={undefined}>About me</HeadingTitle>

      <Box textAlign='justify'>
        <Text marginBottom='4'>
          I am a developer with strong Linux system administration skills,
          focused on maintaining and modernizing legacy CentOS/RHEL fleets.
          I write Python 2.7-compatible automation scripts and Bash tooling for
          kernel management, networking, backup rotation and infrastructure
          hardening.
        </Text>
        <Text marginBottom='4'>
          On the web side I build UIs with React, TypeScript and Next.js, and
          backend services with Node.js, MongoDB and RESTful/GraphQL APIs.
        </Text>
        <Text marginBottom='4'>
          I am comfortable with ELK stack, Docker, Nginx/Apache, MySQL/MongoDB,
          Redis, rsync and SSH-based remote automation across 100+ IDC-hosted
          servers.
        </Text>
        <Text>
          I prefer backup-first changes, concrete verification steps and clear
          rollback plans when working on production systems.
        </Text>
      </Box>
    </Section>
  );
}
