import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useScroll, useSpring } from "framer-motion";

const BoxProcessBar = styled.div`
  .progress-bar {
    height: 5px;
    transform-origin: 0%;
    z-index: 3;
  }
`;

export default function ProcessBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <BoxProcessBar>
      {
        <motion.div
          className='progress-bar'
          style={{
            scaleX: scaleX,
            backgroundColor: useColorModeValue(`ActiveBorder`, `GrayText`),
          }}
        />
      }
    </BoxProcessBar>
  );
}
