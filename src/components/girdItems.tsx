import {
  Grid,
  GridItem,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface ListItem {
  color: string;
  name: string;
  icon: React.ElementType;
}

interface Props {
  list: Array<ListItem>;
}

export default function GirdItems({ list }: Props) {
  return (
    <Grid
      marginY='8'
      placeItems='center'
      gap='4'
      templateColumns='repeat(3, 1fr)'
    >
      {list.map((item) => (
        <GridItem textAlign='center' key={item.name}>
          <Icon
            // eslint-disable-next-line react-hooks/rules-of-hooks
            backgroundColor={useColorModeValue(`blackAlpha.200`, `transparent`)}
            borderRadius='8'
            fontSize={{ base: "5xl", sm: "6xl" }}
            as={item.icon}
            color={item.color}
            xlinkTitle={item.name}
          />
          <Text fontSize='14' fontWeight='500'>
            {item.name}
          </Text>
        </GridItem>
      ))}
    </Grid>
  );
}
