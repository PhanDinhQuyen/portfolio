import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { ReactNode } from "react";

const StyledSection = chakra(motion.section, {
  shouldForwardProp: (props) => {
    return shouldForwardProp(props) || props === "transition";
  },
});

const Section = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <StyledSection
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: `0.8`, delay: String(delay) }}
    mb={6}
  >
    {children}
  </StyledSection>
);

export default Section;
