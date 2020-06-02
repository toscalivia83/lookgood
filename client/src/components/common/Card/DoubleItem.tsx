import React from "react";
import styles from "./DoubleItem.module.css"

interface ItemContent {
  title: string;
  text: string;
}

interface Props {
  title: string;
  firstContent: ItemContent;
  secondContent: ItemContent;
}

const DoubleItem = ({ title, firstContent, secondContent }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.items}>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{firstContent.title}</div>
          <div className={styles.contentText}>{firstContent.text}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{secondContent.title}</div>
          <div className={styles.contentText}>{secondContent.text}</div>
        </div>
      </div>

    </div>
  )
}

export default DoubleItem;