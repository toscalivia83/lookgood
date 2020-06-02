import React, { ReactElement } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./PageWrapper.module.css";

interface Props {
  children: ReactElement;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className={styles.page}>
      <Sidebar />
      {children}
    </div>
  )
}

export default PageWrapper;