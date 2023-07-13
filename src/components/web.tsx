import { Link } from "@chakra-ui/next-js";
import { useColorModeValue } from "@chakra-ui/react";
export default function OnWeb({
  href,
  children,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      variant='ghost'
      display='flex'
      justifyContent='flex-start'
      gap='2'
      fontSize='16'
      py='2'
      px='4'
      alignItems='center'
      color={useColorModeValue(`green.400`, `teal.200`)}
      fontWeight='bold'
      href={href}
      target='_blank'
      borderRadius='10'
      maxW='max-content'
      minW='max-content'
      transition='200ms all ease-in-out'
      _hover={{
        backgroundColor: `rgba(129, 230, 217, 0.12)`,
      }}
    >
      {children}
    </Link>
  );
}
