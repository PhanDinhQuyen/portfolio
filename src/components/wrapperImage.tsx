"use client";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";

import { useState } from "react";

interface ImageType {
  src: string;
  height?: number;
}

export default function WrapperImage({
  image,
  text,
}: {
  image: ImageType;
  text: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoad, setLoad] = useState(true);

  return (
    <Box as='figure'>
      {isLoad && (
        <Skeleton
          height={{
            base: "200px",
            md: "400px",
          }}
          width='full'
        />
      )}
      <Image
        onClick={onOpen}
        userSelect='none'
        loading='lazy'
        onLoad={() => {
          setLoad(false);
        }}
        fill='whiteAlpha.400'
        alt=''
        src={image.src}
        cursor='pointer'
        borderRadius='4'
      />

      <Text
        fontSize='sm'
        fontStyle='italic'
        textAlign='center'
        marginTop='2'
        as='figcaption'
      >
        {text}
      </Text>
      <Modal size='6xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            justifyContent='center'
            alignContent='center'
            display='flex'
            position={{
              base: "absolute",
              md: "relative",
            }}
            padding='0'
            margin='0'
            top={{
              base: "20vh",
              md: "0",
            }}
          >
            <ModalCloseButton background='red.500' zIndex='3' />
            <Image flex='1' alt='' src={image.src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
