import React from "react";
import { getIcon } from "../../../common";
import "../_Footer.scss";
import { FooterDevCardData } from "./FooterDevCardData";

const FooterDevCard: React.FC = () => (
  <div className="footer-dev-cards">
    {FooterDevCardData.map(({ gitHubRepoLink, name, portrait, position }) => (
      <div key={name} className="footer-dev-card">
        <div className="left">
          {getIcon(portrait, undefined, { fontSize: "2.3rem" })}
          <h2>{name}</h2>
        </div>

        <div className="right">
          <p>{position}</p>
          <p>{gitHubRepoLink}</p>
        </div>
      </div>
    ))}
  </div>
);

export default FooterDevCard;
