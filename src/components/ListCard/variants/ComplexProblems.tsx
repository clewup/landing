import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import React, { FC } from "react";

const ComplexProblems: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard gradient="from-[#FFB52E] to-[#ff7940]" id={id}>
      <></>
    </ListCard>
  );
};

export default ComplexProblems;
