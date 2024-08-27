/** @type {import('tailwindcss').Config} */

const rootFontSize = 16; // 1rem = 16px

const convertPxToRem = (px) => `${px / rootFontSize}rem`;

const generateValues = (max, unit = "rem") => {
  const values = {};
  for (let i = 1; i <= max; i++) {
    if (unit === "rem") {
      values[`${i}px`] = convertPxToRem(i);
    } else {
      values[`${i}${unit}`] = `${i}${unit}`;
    }
  }
  return values;
};

const colorWithOpacity = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textStrokeWidth: {
        1: "1px",
      },
      textStrokeColor: {
        black: "rgba(0,0,0,0.21)",
      },
      colors: {
        dark: {
          100: colorWithOpacity("dark-100"),
          200: colorWithOpacity("dark-200"),
          300: colorWithOpacity("dark-300"),
          400: colorWithOpacity("dark-400"),
          500: colorWithOpacity("dark-500"),
          600: colorWithOpacity("dark-600"),
          700: colorWithOpacity("dark-700"),
          800: colorWithOpacity("dark-800"),
          900: colorWithOpacity("dark-900"),
        },
        light: {
          100: colorWithOpacity("light-100"),
          200: colorWithOpacity("light-200"),
          300: colorWithOpacity("light-300"),
          400: colorWithOpacity("light-400"),
          500: colorWithOpacity("light-500"),
          600: colorWithOpacity("light-600"),
          700: colorWithOpacity("light-700"),
          800: colorWithOpacity("light-800"),
          900: colorWithOpacity("light-900"),
        },
        primary: {
          100: colorWithOpacity("primary-100"),
          200: colorWithOpacity("primary-200"),
          300: colorWithOpacity("primary-300"),
          400: colorWithOpacity("primary-400"),
          500: colorWithOpacity("primary-500"),
          600: colorWithOpacity("primary-600"),
          700: colorWithOpacity("primary-700"),
          800: colorWithOpacity("primary-800"),
          900: colorWithOpacity("primary-900"),
        },
        secondary: {
          100: colorWithOpacity("secondary-100"),
          200: colorWithOpacity("secondary-200"),
          300: colorWithOpacity("secondary-300"),
          400: colorWithOpacity("secondary-400"),
          500: colorWithOpacity("secondary-500"),
          600: colorWithOpacity("secondary-600"),
          700: colorWithOpacity("secondary-700"),
          800: colorWithOpacity("secondary-800"),
          900: colorWithOpacity("secondary-900"),
        },
        accent: {
          100: colorWithOpacity("accent-100"),
          200: colorWithOpacity("accent-200"),
          300: colorWithOpacity("accent-300"),
          400: colorWithOpacity("accent-400"),
          500: colorWithOpacity("accent-500"),
          600: colorWithOpacity("accent-600"),
          700: colorWithOpacity("accent-700"),
          800: colorWithOpacity("accent-800"),
          900: colorWithOpacity("accent-900"),
        },
        danger: {
          100: colorWithOpacity("danger-100"),
          200: colorWithOpacity("danger-200"),
          300: colorWithOpacity("danger-300"),
          400: colorWithOpacity("danger-400"),
          500: colorWithOpacity("danger-500"),
          600: colorWithOpacity("danger-600"),
          700: colorWithOpacity("danger-700"),
          800: colorWithOpacity("danger-800"),
          900: colorWithOpacity("danger-900"),
        },
        success: {
          100: colorWithOpacity("success-100"),
          200: colorWithOpacity("success-200"),
          300: colorWithOpacity("success-300"),
          400: colorWithOpacity("success-400"),
          500: colorWithOpacity("success-500"),
          600: colorWithOpacity("success-600"),
          700: colorWithOpacity("success-700"),
          800: colorWithOpacity("success-800"),
          900: colorWithOpacity("success-900"),
        },
        warning: {
          100: colorWithOpacity("warning-100"),
          200: colorWithOpacity("warning-200"),
          300: colorWithOpacity("warning-300"),
          400: colorWithOpacity("warning-400"),
          500: colorWithOpacity("warning-500"),
          600: colorWithOpacity("warning-600"),
          700: colorWithOpacity("warning-700"),
          800: colorWithOpacity("warning-800"),
          900: colorWithOpacity("warning-900"),
        },
      },
      height: generateValues(1000),
      maxHeight: generateValues(1000),
      minHeight: generateValues(1000),
      width: generateValues(1000),
      maxWidth: generateValues(1000),
      minWidth: generateValues(1000),
      fontSize: generateValues(800),
      padding: generateValues(800),
      margin: generateValues(800),
      spacing: generateValues(800),
      borderRadius: {
        inherit: "inherit",
        "4xl": "2rem",
        ...generateValues(800),
      },
      flexGrow: generateValues(9, ""),
      screens: {
        xs: { min: "450px" },
        xl: { min: "1374px" },
        "2xl": { min: "1500px" },
        "max-xs": { max: "451px" },
        "max-sm": { max: "641px" },
        "max-md": { max: "769px" },
        "max-lg": { max: "1025px" },
        "max-xl": { max: "1374px" },
        "max-2xl": { max: "1500px" },
        "mm-xs-sm": { min: "450px", max: "640px" },
        "mm-xs-md": { min: "450px", max: "769px" },
        "mm-xs-lg": { min: "450px", max: "1025px" },
        "mm-sm-md": { min: "640px", max: "768px" },
        "mm-sm-lg": { min: "640px", max: "1024px" },
        "mm-md-lg": { min: "769px", max: "1025px" },
        "mm-lg-xl": { min: "1024px", max: "1374px" },
        "mm-md-xl": { min: "768px", max: "1374px" },
        "mm-sm-xl": { min: "640px", max: "1374px" },
        "mm-xs-xl": { min: "450px", max: "1374px" },
        "mm-xl-2xl": { min: "1374px", max: "1500px" },
        "mm-lg-2xl": { min: "1024px", max: "1500px" },
        "mm-md-2xl": { min: "768px", max: "1500px" },
        "mm-sm-2xl": { min: "640px", max: "1500px" },
        "mm-xs-2xl": { min: "450px", max: "1500px" },
      },
      lineHeight: {
        "extra-loose": "2.5",
        1.0: "1.0",
        ...generateValues(300),
      },
      inset: generateValues(800),
      textOpacity: generateValues(100, ""),
      letterSpacing: generateValues(40),
      aspectRatio: {
        ...generateValues(20),
      },
      outlineOffset: generateValues(1000),
      fontFamily: {
        body: "var(--body-font)",
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-strokeWidth": "1px",
          "-webkit-text-stroke-color": "#000",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
