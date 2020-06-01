import React from "react";

interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <span>{text}</span>
  )
}

export default Badge;