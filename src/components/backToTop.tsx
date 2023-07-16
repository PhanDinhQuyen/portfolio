import { Box, IconButton } from "@chakra-ui/react";
import { useState, useEffect, useCallback, useRef } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    if (global.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  const handleClickMoveTop = useCallback(() => {
    global.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollEventListener = useRef<() => void>();

  useEffect(() => {
    scrollEventListener.current = toggleVisible;

    const handleScroll = () => {
      if (scrollEventListener.current) {
        scrollEventListener.current();
      }
    };

    global.addEventListener("scroll", handleScroll);

    return () => {
      global.removeEventListener("scroll", handleScroll);
    };
  }, [toggleVisible]);

  return (
    <Box
      position='fixed'
      zIndex='2'
      bottom={visible ? "8" : "-10"}
      right={visible ? "8" : "-10"}
      opacity={visible ? 1 : 0}
      transition='all 200ms ease-in-out'
      style={{
        rotate: visible ? "0deg" : "180deg",
      }}
    >
      <IconButton
        aria-label='icon'
        onClick={handleClickMoveTop}
        as={TriangleUpIcon}
        background='transparent'
      />
    </Box>
  );
}
