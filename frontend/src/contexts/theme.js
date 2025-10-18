// import React from "react";

// define store initial state
export const lightTheme = {
  color: {
    primary: "#805ad5", //   represents colors of brand
    primary_variant: "#6d48b1", // lighter or darker shades of brand
    secondary: "#d5be5a", // tron represent accent colors of brand
    secondary_variant: "#ffe605ff", // darker shades of brand
    tertiary: "#5ad580",
    tertiary_variant: "#48b16d",
    quaternary: "#5a72d5",
    quaternary_variant: "#486db1",
    quinary: "#9f83df",
    quinary_variant: "#7a5eb1",
    surface: "#000", // sheets - cards, backgrounds
    background: "#af97e5", // background of app
    error: "#B00020", // for errors and warnings
    on: {
      hover: "#805ad5",
      nav: "#FFFFFF",
      navHover: "#dcd0ff",
      header: "#FFFFFF",
      primary: "#FFFFFF", // white text against primary color
      secondary: "#000000", // white text against secondary color
      tertiary: "#FFFFFF",
      quaternary: "#FFFFFF",
      quinary: "#FFFFFF",
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

export const darkTheme = {
  color: {
    primary: "#222222", // #2a52BE blue represents colors of brand
    primary_variant: "#7a7a7a", // lighter or darker shades of brand
    secondary: "#18cae6", // tron represent accent colors of brand
    secondary_variant: "#108da1", // darker shades of brand
    surface: "#222222", // sheets - cards, backgrounds
    background: "#000000", // background of app
    error: "#B00020", // for errors and warnings
    on: {
      primary: "#FFFFFF", // white text against primary color
      secondary: "#FFFFFF", // white text against secondary color
      surface: "#000000", // black text on white surface
      background: "#000000", // black text on white background
      error: "#FFFFFF", // white text on red error background
    },

  },
  fonts: {
    main: 'Arial, sans-serif',
  },
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 768px)",
  desktop: "screen and (max-width: 768px)",
};



