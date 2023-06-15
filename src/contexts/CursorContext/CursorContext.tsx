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

export type CursorVariantType = "default" | "expand" | "image";
export type MousePositionType = {
  x: number;
  y: number;
};

interface CursorContextValues {
  variant: CursorVariantType;
  setVariant: Dispatch<SetStateAction<CursorVariantType>>;
  content: JSX.Element;
  setContent: Dispatch<SetStateAction<JSX.Element>>;
  image: string | null;
  setImage: Dispatch<SetStateAction<string | null>>;
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
  const [image, setImage] = useState<string | null>(null);

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
        image,
        setImage,
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

  const { setVariant, setContent, setImage } = context;

  function setCursor(
    variant: CursorVariantType,
    content?: JSX.Element,
    image?: string
  ) {
    setContent(content ?? <></>);
    setVariant(variant);
    setImage(image ?? null);
  }

  return {
    variant: context.variant,
    content: context.content,
    image: context.image,
    mousePos: context.mousePos,
    setCursor,
  };
};

export { CursorProvider, useCursor };
