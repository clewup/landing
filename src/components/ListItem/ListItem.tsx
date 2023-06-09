import { useCursor } from "@/contexts/CursorContext/CursorContext";
import useListStore from "@/lib/zustand/hooks/useListStore/useListStore";
import cx from "classnames";
import { motion as m, useInView } from "framer-motion";
import React, { FC, ReactNode, useEffect, useRef } from "react";

interface ListItemProps {
  children: ReactNode;
  id: string;
}

const ListItem: FC<ListItemProps> = ({ children, id }) => {
  const { setCursor } = useCursor();

  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const inViewListItem = useListStore((state) => state.inViewListItem);
  const setInViewListItem = useListStore((state) => state.setInViewListItem);

  useEffect(() => {
    if (isInView) setInViewListItem(id);
    if (!isInView && inViewListItem === id) setInViewListItem(null);
  }, [isInView, id, inViewListItem, setInViewListItem]);

  return (
    <m.li
      onMouseEnter={() => setCursor("text")}
      onMouseLeave={() => setCursor("default")}
    >
      <p
        className={cx(
          "text-4xl py-16 transition-colors md:text-5xl",
          isInView ? "text-white" : "text-base-light"
        )}
        ref={ref}
      >
        {children}
      </p>
    </m.li>
  );
};

export default ListItem;
