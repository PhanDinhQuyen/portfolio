import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (props) => {
    return shouldForwardProp(props) || props === "transition";
  },
});

const Section = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay: number;
}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition='0.8'
    transitionDelay={`${delay}`}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
