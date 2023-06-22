import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import React, { FC } from "react";

const Maintenance: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard gradient="from-[#7CB9E8] to-[#007FFF]" id={id}>
      <></>
    </ListCard>
  );
};

export default Maintenance;
