import React from "react";
import classnames from "classnames";
import styles from "./SingleItem.module.css"

enum Colours {
  YELLOW = "yellow",
  PINK = "pink",
}

interface Props {
  title: string;
  imageUrl: string;
  contentTitle: string;
  contentText: string;
  seeMore: string;
  colour?: Colours;
}

const SingleItem = ({ title, imageUrl, contentTitle, contentText, seeMore, colour }: Props) => {
  return (
    <div className={classnames(styles.container, colour ? styles[colour] : styles[Colours.YELLOW])}>
      <div className={styles.heading}>{title}</div>
      <img
        src={imageUrl}
        alt="Item"
        className={styles.image}/>
      <div>
        <div className={styles.contentTitle}>{contentTitle}</div>
        <div className={styles.contentText}>{contentText}</div>
      </div>
      <div className={styles.seeMore}>{seeMore}</div>
    </div>
  )
}

export default SingleItem;