import { Text, Highlight } from "@chakra-ui/react";
import { HeadingTitle } from "../bio";

import Section from "@/components/section";

export default function Description() {
  return (
    <Section delay={0.2}>
      <HeadingTitle fontSize={undefined}>Description</HeadingTitle>

      <Text>
        <Highlight
          styles={{ color: "cyan.500", fontWeight: "bold" }}
          query={["javascript", "typescript"]}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;I understand JavaScript , TypeScript, and
          object-oriented programming. I can implement design patterns like
          Facade, Observer, and Strategy
        </Highlight>
        <br />
        <br />
        <Highlight
          styles={{
            color: "teal.500",
            fontWeight: "bold",
          }}
          query={["reactjs", "redux", "chakra ui"]}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;My skills include ReactJS, Redux, Chakra UI
          for creating modern UIs with efficient state management
        </Highlight>
        <br />
        <br />
        <Highlight
          styles={{
            color: "pink.400",
            fontWeight: "bold",
          }}
          query={["RestfulAPI", "GraphQLAPI", "OAuth 2.0", "JWT", "MongoDB"]}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;I understand RestfulAPI, GraphQLAPI, OAuth
          2.0, JWT, and I can work with MongoDB
        </Highlight>
        <br />
        <br />
        <Highlight
          styles={{
            color: "purple.400",
            fontWeight: "bold",
          }}
          query={[" Next.js", "Docker"]}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;Additionally, I can use Next.js for
          server-side rendering and Docker for seamless deployment
        </Highlight>
      </Text>
    </Section>
  );
}
