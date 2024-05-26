"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  // equals -> Providers(props: Props) {const {children} = props}
  return (
    <ThemeProvider
      themes={[
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ]}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}

const useMode = () => {
  // 自定义钩子 customHooks
  const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
    useTheme();
  const [lightMode, setLightMode] = useState(false);
  const [hydrationError, setHydrationError] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      setLightMode(true);
    } else if (theme === "dark") {
      setLightMode(false);
    }
  }, [theme]);

  useEffect(() => {
    setHydrationError(true); // 加载不完全是false
  }, []); //只被运行一次

  return {
    lightMode,
    themes,
    theme,
    setTheme,
    forcedTheme,
    systemTheme,
    resolvedTheme,
    hydrationError,
  };
};

export default useMode;
