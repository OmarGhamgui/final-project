import React from "react";
import "../Components/Cardservice.css";

const Cardservice = ({ id, title, desc, classid }) => {
  return (
    <aside class="profile-card" key={id}>
      <header>
        <a >
          <i class={classid}></i>
        </a>
        <h1>{title}</h1>
      </header>
      <div class="profile-bio">
        <p>{desc}</p>
      </div>
    </aside>
  );
};

export default Cardservice;
