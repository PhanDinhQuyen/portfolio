import {
  Box,
  Heading,
  Icon,
  List,
  ListItem,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "./section";
import { ProjectProps, Technique } from "@/constants/project";
import { Link } from "@chakra-ui/next-js";
import { Fragment } from "react";

export default function ProjectItem({
  props,
  index,
}: {
  props: ProjectProps;
  index: number;
}) {
  const renderTechnique = (data: Technique) => {
    const keys: Array<keyof Technique> = Object.keys(data) as Array<
      keyof Technique
    >;
    return keys.map((key) => (
      <Fragment key={key}>
        <Heading
          as='h5'
          textTransform='capitalize'
          fontFamily='monospace'
          fontSize='18'
        >
          {key}
        </Heading>
        <List
          paddingY='1'
          flexWrap='wrap'
          display='flex'
          gap='3'
          flexDirection='row'
        >
          {data[key].map((item, index) => {
            return (
              <ListItem key={index}>
                <Tag
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  colorScheme={useColorModeValue(`blackAlpha`, `teal`)}
                  color={item.color}
                >
                  {item.name}
                </Tag>
              </ListItem>
            );
          })}
        </List>
      </Fragment>
    ));
  };

  return (
    <Section delay={0.2 * index}>
      <Box
        flexWrap='wrap'
        display='inline-flex'
        gap='2'
        alignItems='center'
        py='5'
      >
        <Heading fontSize='20' as='h3'>
          <Icon as={ChevronRightIcon} />
          {props.title}
        </Heading>
        <Link
          minW='max-content'
          fontStyle='italic'
          color='pink.500'
          href={props.url}
          target='_blank'
        >
          Link here
        </Link>
      </Box>
      <Box paddingLeft='3'>
        <Heading py='5' fontSize='18' as='h4'>
          Technique
        </Heading>
        {renderTechnique(props.technique)}
        <Heading paddingY='5' fontSize='18' as='h4'>
          Decription
        </Heading>
        <Text textIndent='1em'>{props.description.join(". ")}.</Text>
      </Box>
    </Section>
  );
}
