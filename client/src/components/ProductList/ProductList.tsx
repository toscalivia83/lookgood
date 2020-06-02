import React from "react";
import styles from "./ProductList.module.css";
import Button from "../common/Button/Button";

const ProductList = (): React.ReactElement => {
  return (
    <>
      <div className={styles.content}>
        coucou
        <Button name={"gfhuygiug"} onClick={() => console.log("clicked")}>gvhjjhb</Button>
        <div>
          <h2>Best hair products</h2>
          <img
            src="../../logo.svg"
            alt="Logo"/>
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

export default ProductList;