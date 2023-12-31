import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoDocker,
} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandSocketIo,
  TbBrandGit,
  TbBrandVscode,
} from "react-icons/tb";
import { CharkUiIcon } from "@/components/icons/charkaIcon";
import { MaterialUiIcon } from "@/components/icons/materialUiIcon";
import { FcLinux } from "react-icons/fc";
import { PostManIcon } from "@/components/icons/postManIcon";

export const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: BiLogoJavascript,
      color: "yellow.500",
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
      color: "cyan.700",
    },
  ],

  client: [
    {
      name: "HTML5",
      icon: BiLogoHtml5,
      color: "red.500",
    },
    {
      name: "CSS3",
      icon: BiLogoCss3,
      color: "cyan.500",
    },
    {
      name: "SASS",
      icon: BiLogoSass,
      color: "pink.500",
    },
    {
      name: "TailwindCSS",
      icon: BiLogoTailwindCss,
      color: "blue.500",
    },
    {
      name: "ReactJS",
      icon: BiLogoReact,
      color: "cyan",
    },
    {
      name: "Redux",
      icon: BiLogoRedux,
      color: "purple.500",
    },
    {
      name: "ChakraUi",
      icon: CharkUiIcon,
      color: "cyan.2000",
    },
    {
      name: "MaterialUi",
      icon: MaterialUiIcon,
      color: "cyan.800",
    },
  ],
  server: [
    {
      name: "NodeJS",
      icon: BiLogoNodejs,
      color: "green.400",
    },
    {
      name: "Redis",
      icon: DiRedis,
      color: "red.600",
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
      color: "green.400",
    },
    {
      name: "FireBase",
      icon: BiLogoFirebase,
      color: "orange.400",
    },
    {
      name: "GraphQL",
      icon: BiLogoGraphql,
      color: "pink.400",
    },
    {
      name: "Socket.io",
      icon: TbBrandSocketIo,
      color: "black.400",
    },
  ],
  other: [
    {
      name: "NextJS",
      icon: TbBrandNextjs,
      color: "blackAlpha.800",
    },
    {
      name: "Docker",
      icon: BiLogoDocker,
      color: "cyan.500",
    },
    {
      name: "Postman",
      icon: PostManIcon,
      color: "orange.500",
    },
    {
      name: "Linux",
      icon: FcLinux,
      color: "purple.500",
    },
    {
      name: "Git",
      icon: TbBrandGit,
      color: "#f05539",
    },
    {
      name: "VSCode",
      icon: TbBrandVscode,
      color: "cyan.500",
    },
  ],
};
