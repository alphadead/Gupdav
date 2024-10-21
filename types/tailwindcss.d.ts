declare module 'tailwindcss/lib/util/flattenColorPalette' {
    // Replace `any` with more specific types if you know them
    const flattenColorPalette: (colors: Record<string, any>) => Record<string, any>;
    export = flattenColorPalette;
  }