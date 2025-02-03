
// import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    // addVariablesForColors
  ],
};

// function addVariablesForColors({ addBase, theme }: { addBase: (base: Record<string, string>) => void, theme: (path: string) => Record<string, string> }) {
//   const allColors = flattenColorPalette(theme("colors"));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
// function flattenColorPalette(colors: Record<string, string | Record<string, string>>) {
//   const result: { [key: string]: string } = {};

//   function recurse(obj: Record<string, string | Record<string, string>>, current: string) {
//     for (const key in obj) {
//       const value = obj[key];
//       const newKey = current ? `${current}-${key}` : key;
//       if (typeof value === "object") {
//         recurse(value, newKey);
//       } else {
//         result[newKey] = value;
//       }
//     }
//   }

//   recurse(colors, "");
//   return result;
// }

