import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import React, { FC } from "react";

const Collaboration: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard backgroundColor="bg-primary" id={id}>
      <></>
    </ListCard>
  );
};

export default Collaboration;
