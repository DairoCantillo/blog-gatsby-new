module.exports = {
  siteMetadata: {
    title: `Blog de prueba`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "este es un blog de prueba",
    author: "Deca",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "oGn-rPsqE34jxSYMK6v9Pg3bBLSaW4uhYmpBNuhFUBE",
        spaceId: "q4qgmmcy06au",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
