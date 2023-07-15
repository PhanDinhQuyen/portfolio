import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      position='relative'
      as='div'
      textAlign='center'
      opacity={0.4}
      fontSize='sm'
      paddingTop='8'
      minW='max-content'
    >
      &copy; {new Date().getFullYear()} Louis Phan. All Rights Reserved.
    </Box>
  );
};

export default Footer;
