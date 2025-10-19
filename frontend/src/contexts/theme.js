// import React from "react";

// define store initial state
export const lightTheme = {
  color: {
    primary: "#805ad5", //   represents colors of brand
    secondary: "#302053ff", // tron represent accent colors of brand
    tertiary: "#5ad580",
    surface: "#858585ff", // sheets - cards, backgrounds
    background: "#dddbdbff", // background of app
    error: "#B00020", // for errors and warnings
    link: "#FFFFFF",
    on: {
      hover: "#805ad5",
      header: "#FFFFFF",
      primary: "#FFFFFF", // white text against primary color
      secondary: "#ffffffff", // white text against secondary color
      tertiary: "#FFFFFF",
      link: "#FFFFFF",
      surface: "#cacacaff", // black text on white surface
      background: "#000000", // black text on white background
      error: "#ffffffff", // white text on red error background
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
    secondary: "#d5be5a", // tron represent accent colors of brand
    tertiary: "#5ad580",
    surface: "#858585ff", // sheets - cards, backgrounds
    background: "#ffffffff", // background of app
    error: "#B00020", // for errors and warnings
    link: "#FFFFFF",
    on: {
      hover: "#805ad5",
      header: "#FFFFFF",
      primary: "#FFFFFF", // white text against primary color
      secondary: "#000000", // white text against secondary color
      tertiary: "#FFFFFF",
      link: "#FFFFFF",
      surface: "#d2c8e9ff", // black text on white surface
      background: "#000000", // black text on white background
      error: "#ffffffff", // white text on red error background
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



