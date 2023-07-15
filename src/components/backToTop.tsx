import { IconButton } from "@chakra-ui/react";
import { useState, useEffect, useCallback, useRef } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  const handleClickMoveTop = useCallback(() => {
    window.scrollTo({
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleVisible]);

  return (
    <IconButton
      position='fixed'
      bottom={visible ? "4" : "-10"}
      right={visible ? "4" : "-10"}
      opacity={visible ? 1 : 0}
      aria-label='icon'
      onClick={handleClickMoveTop}
      transition='all 300ms ease-in-out'
    ></IconButton>
  );
}
