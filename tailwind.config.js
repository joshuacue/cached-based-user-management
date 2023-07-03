// This function generates a set of custom font sizes for Tailwind CSS.
// It loops from 1 to 100 to create font sizes from 1px to 10em.
// Forming the class names where text-0.1 == fontSize:1px to to text-10 === fontSize: 100px.
function generateSizes() {
  let sizes = {};
  for (let i = 1; i <= 100; i++) {
    let emValue = i / 10;

    // If the emValue is a whole number, we convert it to integer to remove the .0
    if (emValue === parseInt(emValue)) {
      emValue = parseInt(emValue);
    }

    sizes[emValue] = `${emValue}em`;
  }
  return sizes;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: generateSizes(),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: generateSizes(),
      margin: generateSizes(),
      space: generateSizes(),
      borderSpacing: generateSizes(),
      borderRadius: generateSizes(),
      borderWidth: generateSizes(),
      width: generateSizes(),
      height: generateSizes(),
      minWidth: generateSizes(),
      minHeight: generateSizes(),
      maxWidth: generateSizes(),
      maxHeight: generateSizes(),
      letterSpacing: generateSizes(),
      lineHeight: generateSizes(),
      gap: generateSizes(),
      colors: {
        "gray-1": "#e6e6e6",
        "gray-2": "#f5f5f5",
        "gray-3": "#585858",
        "gray-4": "#898989",
      },
    },
  },
  plugins: [],
};
