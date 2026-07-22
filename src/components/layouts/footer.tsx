import { Box, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      position='relative'
      as='footer'
      textAlign='center'
      fontSize='sm'
      paddingBottom='8'
      paddingTop='4'
      minW='max-content'
    >
      <Divider marginBottom='4' opacity={0.2} />
      &copy; {new Date().getFullYear()} Louis Phan. All Rights Reserved.
    </Box>
  );
};

export default Footer;
