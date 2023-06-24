"use client";

import useListStore from "@/lib/zustand/hooks/useListStore/useListStore";
import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface BaseListCardProps {
  children: ReactNode;
  backgroundColor: string;
  id: string;
}

export interface ListCardProps {
  id: string;
}

const ListCard: FC<BaseListCardProps> = ({ backgroundColor, children, id }) => {
  const inViewListItem = useListStore((store) => store.inViewListItem);

  return (
    <div
      className={cx(
        "absolute inset-0 rounded-2xl transition-opacity",
        backgroundColor,
        inViewListItem === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default ListCard;
