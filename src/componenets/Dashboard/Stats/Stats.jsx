import React from "react";
import { counts } from "../../../Data/Data.js";
import Card from "./Card.jsx";

const Stats = () => {
  return (
    <section
      /* className="stats-grid" */ className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
    >
      {counts.map((it) => (
        <Card key={it.id} {...it} />
      ))}
    </section>
  );
};

export default Stats;
