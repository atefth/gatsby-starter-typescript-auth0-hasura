require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `sneak-in-dashboard`,
    siteUrl: `https://github.com/atefth/sneak-in-bootstrap`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: `/gatsby`,
};

export default config;
