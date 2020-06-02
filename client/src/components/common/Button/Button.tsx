import React, { ReactElement, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>): ReactElement =>
    <button className={styles.button} {...props}>{props.children}</button>;

export default Button;