import nextVitals from "eslint-config-next/core-web-vitals";

const config = [...nextVitals];

config.push({
  ignores: ["dist/**", ".next/**"],
});

export default config;
