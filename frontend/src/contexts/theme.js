// import React from "react";

// define store initial state
export const lightTheme = {
  color: {
    primary: "#805ad5", //   represents colors of brand
    secondary: "#302053ff", // tron represent accent colors of brand
    tertiary: "#5ad580",
    header: "#424242ff",
    surface: "#8b8b8bff", // sheets - cards, backgrounds
    background: "#dddbdbff", // background of app
    error: "#B00020", // for errors and warnings
    link: "#805ad5",
    on: {
      primary: "#FFFFFF", // white text against primary color
      secondary: "#ffffffff", // white text against secondary color
      tertiary: "#FFFFFF",
      header: "#FFFFFF",
      hover: "#302053ff",
      surface: "#dfdfdfff", // black text on white surface
      background: "#000000", // black text on white background
      error: "#ffffffff", // white text on red error background
      link: "#805ad5",
    },
  },
  fonts: {
    main: '"Alfa Slab One", serif;',
    secondary: '"Open Sans", sans-serif'
  },
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 768px)",
  desktop: "screen and (max-width: 768px)",
};

export const darkTheme = {
  color: {
    primary: "#805ad5", //   represents colors of brand
    secondary: "#302053ff", // tron represent accent colors of brand
    tertiary: "#5ad580",
    header: "#424242ff",
    surface: "#ffffffff", // sheets - cards, backgrounds
    background: "#000000ff", // background of app
    error: "#B00020", // for errors and warnings
    link: "#000000ff",
    on: {
      primary: "#FFFFFF", // white text against primary color
      secondary: "#ffffffff", // white text against secondary color
      tertiary: "#FFFFFF",
      header: "#FFFFFF",
      hover: "#302053ff",
      surface: "#dfdfdfff", // black text on white surface
      background: "#000000", // black text on white background
      error: "#ffffffff", // white text on red error background
      link: "#805ad5"
    },
  },
  fonts: {
    main: '"Alfa Slab One", serif;',
    secondary: '"Open Sans", sans-serif'
  },
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 768px)",
  desktop: "screen and (max-width: 768px)",
};



