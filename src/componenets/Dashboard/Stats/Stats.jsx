import React from "react";
import { counts } from "../../../Data/Data.js";
import Card from "./Card.jsx";

const Stats = () => {
  return (
    <section className="stats-grid">
      {counts.map((it) => (
        <Card key={it.id} {...it} />
      ))}
    </section>
  );
};

export default Stats;
