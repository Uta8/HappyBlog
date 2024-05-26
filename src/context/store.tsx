"use client";

import React from "react";

type Props = { children: React.ReactNode };

interface contextProps {
  value: String;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = React.createContext<contextProps>({
  //全局要用的 所以要定义成context
  value: "light",
  setValue: () => {},
});

export const GloablProvider = ({ children }: Props) => {
  const [value, setValue] = React.useState("light");

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
