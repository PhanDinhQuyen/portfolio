import {
  Grid,
  GridItem,
  Icon,
  Text,
  Box,
  Tooltip,
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
      marginY='6'
      templateColumns={{
        base: "repeat(3, 1fr)",
        sm: "repeat(4, 1fr)",
        md: "repeat(6, 1fr)",
      }}
      gap='4'
      justifyItems='center'
    >
      {list.map((item) => (
        <GridItem textAlign='center' key={item.name}>
          <Tooltip label={item.name} hasArrow placement='top'>
            <Box
              p='3'
              borderRadius='xl'
              transition='all 0.2s'
              _hover={{
                transform: "translateY(-4px)",
                bg: "whiteAlpha.100",
                boxShadow: "md",
              }}
            >
              <Icon
                fontSize='4xl'
                as={item.icon}
                color={item.color}
                marginBottom='2'
              />
              <Text fontSize='xs' fontWeight='500' noOfLines={1}>
                {item.name}
              </Text>
            </Box>
          </Tooltip>
        </GridItem>
      ))}
    </Grid>
  );
}
