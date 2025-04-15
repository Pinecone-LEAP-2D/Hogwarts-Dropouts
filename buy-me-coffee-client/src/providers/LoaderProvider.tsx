"use client";

import {
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
);
export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? (
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/07f9/97c5/b22f6bc9ba535eec9efcdd0bacb3bb4d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RVZlgTF6mUtalHooEWzMyYfM0RgAC90fdGSXBtxoXzCaWiMx1OwKNvEuhBZneVMa2Javz1blckCYcaoiQLyVwAjunKFlb5X5iHOaH9IPnaAUCpxYUaWwDkD8ATVuV9McSLVXQJqS1FPMS1PvmkzYDUZ3n5T8pxGNmBeYyLMd2v~JYlHAaEpePhO5h3xbPJafLXnq91XrGvuQCPPOcLXQZvPQdnqz1F-MugK4H3N~u7AjGkajbLu1wCfWyNaomxgQUGaHsFX8SUF3alEaKnDd73cJpsHgod0vXTQyZLudW78ekgKa01d1H7FdBPdf67K5Dvw0cUjkw6i1q4uK6av9Pw__" />
          <p>aaaa bisda</p>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};
export const useLoading = () => useContext(LoadingContext);
