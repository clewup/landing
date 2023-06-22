"use client";

import useListStore from "@/lib/zustand/hooks/useListStore/useListStore";
import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface BaseListCardProps {
  children: ReactNode;
  gradient: string;
  id: string;
}

export interface ListCardProps {
  id: string;
}

const ListCard: FC<BaseListCardProps> = ({ gradient, children, id }) => {
  const inViewListItem = useListStore((store) => store.inViewListItem);

  return (
    <div
      className={cx(
        "absolute inset-0 rounded-2xl bg-gradient-to-br transition-opacity",
        gradient,
        inViewListItem === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default ListCard;
