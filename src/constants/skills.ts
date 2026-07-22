import {
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoDocker,
} from "react-icons/bi";
import {
  DiRedis,
  DiLinux,
  DiMysql,
  DiNginx,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandGit,
  TbBrandVscode,
} from "react-icons/tb";
import {
  SiApache,
  SiElasticsearch,
} from "react-icons/si";
import { BsTerminal, BsGear, BsArrowRepeat } from "react-icons/bs";
import { CharkUiIcon as ChakraUiIcon } from "@/components/icons/charkaIcon";
import { PostManIcon } from "@/components/icons/postManIcon";

export const skills = {
  languages: [
    { name: "Python", icon: BiLogoPython, color: "yellow.400" },
    { name: "Bash", icon: BsTerminal, color: "gray.400" },
    { name: "JavaScript", icon: BiLogoJavascript, color: "yellow.500" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "cyan.700" },
    { name: "SQL", icon: BsTerminal, color: "blue.400" },
  ],
  client: [
    { name: "HTML5", icon: BiLogoHtml5, color: "red.500" },
    { name: "CSS3", icon: BiLogoCss3, color: "cyan.500" },
    { name: "TailwindCSS", icon: BiLogoTailwindCss, color: "blue.500" },
    { name: "ReactJS", icon: BiLogoReact, color: "cyan" },
    { name: "Redux", icon: BiLogoRedux, color: "purple.500" },
    { name: "ChakraUi", icon: ChakraUiIcon, color: "teal.400" },
  ],
  server: [
    { name: "NodeJS", icon: BiLogoNodejs, color: "green.400" },
    { name: "MongoDB", icon: BiLogoMongodb, color: "green.400" },
    { name: "Redis", icon: DiRedis, color: "red.600" },
    { name: "MySQL", icon: DiMysql, color: "blue.500" },
    { name: "Nginx", icon: DiNginx, color: "green.500" },
    { name: "Apache", icon: SiApache, color: "red.500" },
  ],
  systems: [
    { name: "Linux", icon: DiLinux, color: "yellow.500" },
    { name: "Rocky Linux", icon: BsGear, color: "green.400" },
    { name: "systemd", icon: BsTerminal, color: "gray.400" },
    { name: "rsync", icon: BsArrowRepeat, color: "red.400" },
    { name: "SSH", icon: BsTerminal, color: "gray.300" },
    { name: "SELinux", icon: BsGear, color: "purple.400" },
  ],
  other: [
    { name: "NextJS", icon: TbBrandNextjs, color: "blackAlpha.800" },
    { name: "Docker", icon: BiLogoDocker, color: "cyan.500" },
    { name: "Git", icon: TbBrandGit, color: "#f05539" },
    { name: "Postman", icon: PostManIcon, color: "orange.500" },
    { name: "ELK Stack", icon: SiElasticsearch, color: "green.400" },
    { name: "VSCode", icon: TbBrandVscode, color: "cyan.500" },
  ],
};
