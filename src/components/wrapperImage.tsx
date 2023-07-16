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
} from "@chakra-ui/react";

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
  console.log(`calc(50%-${image.height})`);
  return (
    <Box p='4' as='figure'>
      <Image
        onClick={onOpen}
        userSelect='none'
        loading='lazy'
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
