import { ListCardProps } from "@/components/ListCard/ListCard";
import { FC } from "react";

export type ProcessType = {
  id: string;
  text: string;
  card: FC<ListCardProps>;
};
