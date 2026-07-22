import { forwardRef, ReactNode, Ref, RefObject } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const DogSpinner = () => (
  <Spinner
    size='xl'
    position='absolute'
    left='50%'
    top='50%'
    ml='calc(0px - var(--spinner-size) / 2)'
    mt='calc(0px - var(--spinner-size))'
  />
);

export const DogContainer = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLDivElement>) => (
    <Box
      ref={ref as RefObject<HTMLDivElement>}
      className='voxel-dog'
      m='auto'
      mt={["-20px", "-40px", "-60px"]}
      mb={["-40px", "-80px", "-120px"]}
      w={[200, 280, 360]}
      h={[200, 280, 360]}
      position='relative'
    >
      {children}
    </Box>
  )
);

DogContainer.displayName = "DogContainer";

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
