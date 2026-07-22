import {
  Box,
  Heading,
  Icon,
  Wrap,
  WrapItem,
  Tag,
  Text,
  Card,
  CardBody,
  CardHeader,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "./section";
import { ProjectProps, Technique } from "@/constants/project";

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
      <Box key={key} marginBottom='3'>
        <Heading
          as='h5'
          textTransform='capitalize'
          fontFamily='heading'
          fontSize='sm'
          color='brand.500'
          marginBottom='2'
        >
          {key}
        </Heading>
        <Wrap spacing='2'>
          {data[key].map((item, idx) => (
            <WrapItem key={idx}>
              <Tag size='sm' colorScheme='brand' color={item.color}>
                {item.name}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    ));
  };

  return (
    <Section delay={0.15 * index}>
      <Card variant='outline' borderRadius='xl' overflow='hidden'>
        <CardHeader paddingBottom='0'>
          <Heading fontSize='xl' as='h3' display='flex' alignItems='center' gap='2'>
            <Icon as={ChevronRightIcon} color='brand.500' />
            {props.title}
          </Heading>
        </CardHeader>
        <CardBody>
          {renderTechnique(props.technique)}
          <Heading paddingY='3' fontSize='sm' as='h4' color='brand.500'>
            Description
          </Heading>
          <UnorderedList spacing='1' marginLeft='4'>
            {props.description.map((desc, idx) => (
              <ListItem key={idx}>{desc}</ListItem>
            ))}
          </UnorderedList>
          <Box marginTop='4'>
            <Link
              href={props.url}
              target='_blank'
              color='brand.400'
              fontWeight='semibold'
              display='inline-flex'
              alignItems='center'
              gap='1'
            >
              View on GitHub <Icon as={ExternalLinkIcon} />
            </Link>
          </Box>
        </CardBody>
      </Card>
    </Section>
  );
}
