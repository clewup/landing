"use client";

import Loader from "@/components/Loader/Loader";
import { CursorProvider } from "@/contexts/CursorContext/CursorContext";
import { AnimatePresence, motion as m } from "framer-motion";
import { FC, ReactNode, useEffect, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    isLoading
      ? document.body.classList.add("loading")
      : document.body.classList.remove("loading");
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <m.div key="loader">
          <Loader setLoading={setLoading} />
        </m.div>
      ) : (
        <CursorProvider>{children}</CursorProvider>
      )}
    </AnimatePresence>
  );
};

export default Providers;
