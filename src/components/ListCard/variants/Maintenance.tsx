import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import React, { FC } from "react";

const Maintenance: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard backgroundColor="bg-primary" id={id}>
      <></>
    </ListCard>
  );
};

export default Maintenance;
