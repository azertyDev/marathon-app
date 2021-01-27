import React from "react";
import s from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <>
      <section class={s.root} id={props.id}>
        <div class={s.wrapper}>
          <article>
            <div class={s.title}>
              <h3>{props.title}</h3>
              <span class={s.separator}></span>
            </div>
            <div class={(s.desc, s.full)}>
              <p>{props.descr}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
