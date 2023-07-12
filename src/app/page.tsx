"use client";
import { Box, Text, Avatar, Heading } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpg";
import { pacifico } from "@/libs/fonts";
export default function Home() {
  console.log(avatar);

  return (
    <Box p='2' w='full' margin='auto' maxW='lg' as='article' height='100vh'>
      <Text
        fontSize='16'
        bg='whiteAlpha.200'
        textAlign='center'
        borderRadius='5'
        py='3'
        px='2'
        marginBottom='5'
      >
        Hello, I am a Web Developer based in VietNam!
      </Text>

      <Box
        display='flex'
        flexWrap='wrap-reverse'
        justifyContent='center'
        alignItems='center'
      >
        <Box flex='1' textAlign='center'>
          <Heading
            as='h2'
            fontFamily={pacifico.style.fontFamily}
            fontSize='4xl'
            fontWeight='bold'
            marginBottom='2'
            minW='max-content'
          >
            Phan Đình Quyền
          </Heading>
          <Text as='p'>Web Developer ( FontEnd / BackEnd )</Text>
        </Box>

        <Avatar
          as={"div"}
          border='2px'
          borderColor={"red"}
          loading='lazy'
          w='32'
          h='32'
          name='louis phan'
          src={avatar.src}
        />
      </Box>
    </Box>
  );
}
