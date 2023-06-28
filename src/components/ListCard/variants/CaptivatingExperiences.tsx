import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import Image from "next/image";
import React, { FC } from "react";

const CaptivatingExperiences: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard backgroundColor="bg-primary" id={id}>
      <Image
        src="/images/paintbrush.png"
        alt={""}
        fill={true}
        className="absolute"
      />
    </ListCard>
  );
};

export default CaptivatingExperiences;
