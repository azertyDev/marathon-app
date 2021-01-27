import React from "react";
import s from "./Header.module.css";

export const Header = (props) => {
  return (
    <>
      <header class={s.root}>
        <div class={s.forest}></div>
        <div class={s.container}>
          <h1>{props.title}</h1>
          <p>{props.descr}</p>
        </div>
      </header>
    </>
  );
};
