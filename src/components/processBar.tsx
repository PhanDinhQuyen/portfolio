import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BoxProcessBar = styled.div`
  .progress-bar {
    height: 5px;
    transform-origin: 0%;
    z-index: 3;
  }
`;

export default function ProcessBar() {
  const pathName = usePathname();
  console.log(pathName);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    scaleX.set(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

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
