import React from "react";
import { MahjongWrapper } from "../game-wrapper";

import "./style.scss";

export const MainGame = () => {
  return (
    <section className="mahjong pt-16">
      <h1 className="mahjong__title mb-64">Mahjong-like game</h1>
      <MahjongWrapper />
    </section>
  );
};
