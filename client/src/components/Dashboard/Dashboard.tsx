import React from "react";
import Sidebard from "../Sidebar/Sidebar";
import styles from "./Dashboard.module.css";
import ItemCard from "../common/ItemCard";

const Dashboard = (): React.ReactElement => {
  return (
    <>
      <Sidebard />
      <div className={styles.content}>
        coucou
        <div>
          <h2>Best hair products</h2>
          <img src="../../logo.svg" />
          <div>
            <h3>Curly hair conditioner</h3>
            <div>Coconut, Shea butter, other good things for your hair</div>
          </div>
          <div>See 250+ more products</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;