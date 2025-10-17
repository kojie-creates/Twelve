import React from "react";

// define store initial state
export const lightTheme = {
  color: {
    primary: "#805ad5", // #2a52BE blue represents colors of brand
    primary_variant: "#6d48b1", // lighter or darker shades of brand
    secondary: "#ff0000", // tron represent accent colors of brand
    secondary_variant: "#cc0000", // darker shades of brand
    surface: "#f0f0f0", // sheets - cards, backgrounds
    background: "#FFFFFF", // background of app
    error: "#B00020", // for errors and warnings
    on: {
      hover: "#805ad5",
      primary: "#FFFFFF", // white text against primary color
      secondary: "#FFFFFF", // white text against secondary color
      surface: "#FFFFFF", // black text on white surface
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



