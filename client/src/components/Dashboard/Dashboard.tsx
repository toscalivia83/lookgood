import React from "react";
import styles from "./Dashboard.module.css";
import Button from "../common/Button/Button";
import PageWrapper from "../common/PageWrapper/PageWrapper";
import SingleItem from "../common/Card/SingleItem";
import HairBrush from "../../assets/images/HairBrush.svg";
import DoubleItem from "../common/Card/DoubleItem";

const Dashboard = (): React.ReactElement => {
  return (
    <>
      <PageWrapper >
        <div className={styles.content}>
          <div className={styles.topLine}>
            <SingleItem
              title={"Best hair products"}
              imageUrl={HairBrush}
              contentTitle={"Curly hair conditioner"}
              contentText={"Coconut, Shea butter, other good things for your hair"}
              seeMore={"See 250+ more products"}
              />
            <DoubleItem
              title={"Hair routines"}
              firstContent={{
                title: "Curly hair",
                text: "4 blog posts"
              }}
              secondContent={{
                title: "Curly hair",
                text: "4 blog posts"
              }}
              />
          </div>

          <div>
            <div>
              <h2>Top Ambassadors</h2>
              <p>There are more than 50 ambassadors who can help you!</p>
            </div>
            <div>
              <div>Sara Jones</div>
              <div>Sara Jones</div>
              <div>Sara Jones</div>
              <div><Button name={"gfhuygiug"} onClick={() => console.log("clicked")}>gvhjjhb</Button></div>
            </div>
          </div>
          
        </div>
      </PageWrapper>
    </>
  );
};

export default Dashboard;