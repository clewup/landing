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
  text: string;
  setText: Dispatch<SetStateAction<string>>;
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
  const [text, setText] = useState("");

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
      value={{ variant, setVariant, text, setText, mousePos }}
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

  return context;
};

export { CursorProvider, useCursor };
