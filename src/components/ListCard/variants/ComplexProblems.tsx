import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import Image from "next/image";
import React, { FC } from "react";

const ComplexProblems: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard backgroundColor="bg-primary" id={id}>
      <Image
        src="/images/rocket.png"
        alt={""}
        fill={true}
        className="absolute"
      />
    </ListCard>
  );
};

export default ComplexProblems;
