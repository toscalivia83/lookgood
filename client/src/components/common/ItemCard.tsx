import React from "react";

interface Props {
  title: string;
  imageUrl: string;
  contentTitle: string;
  contentText: string;
  seeMore: string;
}

const ItemCard = ({ title, imageUrl, contentTitle, contentText, seeMore }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} />
      <div>
        <h3>{contentTitle}</h3>
        <div>{contentText}</div>
      </div>
      <div>{seeMore}</div>
    </div>
  )
}

export default ItemCard;