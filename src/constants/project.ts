import { Url } from "url";

export interface ProjectProps {
  title: String;
  url: string;
  technique: Technique;
  description: Array<String>;
}

export interface Technique {
  client: Array<Props>;
  server: Array<Props>;
}

export interface Props {
  name: String;
  color: string;
}

export const listProjects: ProjectProps[] = [
  {
    title: `Online Sales Management`,
    url: `https://github.com/PhanDinhQuyen/e-commerce`,
    technique: {
      client: [
        { name: `HTML`, color: `red.500` },
        { name: `SCSS`, color: `pink.400` },
        { name: `ReactJS`, color: `cyan.500` },
      ],
      server: [
        { name: `Express`, color: `green.500` },
        { name: `MongoDB`, color: `green.500` },
        { name: `Cloudinary`, color: `orange.500` },
      ],
    },
    description: [
      `RESTful API, MVC pattern`,
      `Utilize tokens for authentication and authorization (JWT)`,
      `Sign In/Up account`,
      `CURD/Sort/Search products`,
      `Utilize Cloudinary for storing product images`,
      `Administrators can manage product, purchase history and users`,
      `Update/Store user's shopping carts`,
      `Users can make payments for products using Paypal`,
    ],
  },
  {
    title: `Note App`,
    url: `https://github.com/PhanDinhQuyen/noteapp`,
    technique: {
      client: [
        { name: `ReactJS`, color: `red.500` },
        { name: `Material UI`, color: `pink.400` },
        { name: `Draft`, color: `teal.500` },
      ],
      server: [
        { name: `Express`, color: `green.500` },
        { name: `MongoDB`, color: `green.500` },
        { name: `Firebase`, color: `orange.500` },
        { name: `GraphQL`, color: `pink.500` },
      ],
    },
    description: [
      `GraphQL API`,
      `Utilize the Google-generated token for authentication`,
      `Sign In/Up using Google account`,
      `CURD files and folders`,
      `Use Draft for text editor files`,
      `Automatically save files`,
      `Support displaying text files from NoSQL database (MongoDB)`,
    ],
  },
];
