"use client";

import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type CursorVariantType = "default" | "expand";
export type MousePositionType = {
  x: number;
  y: number;
};

interface CursorContextValues {
  variant: CursorVariantType;
  setVariant: Dispatch<SetStateAction<CursorVariantType>>;
  content: JSX.Element;
  setContent: Dispatch<SetStateAction<JSX.Element>>;
  mousePos: MousePositionType;
}

const CursorContext = createContext<CursorContextValues>(
  {} as CursorContextValues
);

interface CursorProviderProps {
  children: ReactNode;
}

const CursorProvider: FC<CursorProviderProps> = ({ children }) => {
  const [variant, setVariant] = useState<CursorVariantType>("default");
  const [content, setContent] = useState(<></>);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      setMousePos({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <CursorContext.Provider
      value={{
        variant,
        setVariant,
        content,
        setContent,
        mousePos,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

const useCursor = () => {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursor may only be used within the CursorContext");
  }

  const { setVariant, setContent } = context;

  function setCursor(variant: CursorVariantType, content?: JSX.Element) {
    setContent(content ?? <></>);
    setVariant(variant);
  }

  return {
    variant: context.variant,
    content: context.content,
    mousePos: context.mousePos,
    setCursor,
  };
};

export { CursorProvider, useCursor };
