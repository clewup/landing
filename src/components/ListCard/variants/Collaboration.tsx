import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import React, { FC } from "react";

const Collaboration: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard gradient="from-[#98fb98] to-[#00ff7f]" id={id}>
      <></>
    </ListCard>
  );
};

export default Collaboration;
