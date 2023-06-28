import ListCard, { ListCardProps } from "@/components/ListCard/ListCard";
import Image from "next/image";
import React, { FC } from "react";

const Collaboration: FC<ListCardProps> = ({ id }) => {
  return (
    <ListCard backgroundColor="bg-primary" id={id}>
      <Image
        src="/images/person.png"
        alt={""}
        fill={true}
        className="absolute"
      />
    </ListCard>
  );
};

export default Collaboration;
