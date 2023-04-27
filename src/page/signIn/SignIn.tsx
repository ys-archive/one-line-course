import React from "react";
import AuthCtrl from "~/src/auth/AuthCtrl";
import { placeIconsRandomly } from "~/src/common/";
import Footer from "~/src/component/footer/Footer";
import Menu from "~/src/component/menu/Menu";

import NavFactory from "~/src/component/nav/nav-factory/NavFactory";
import { EMenuMode, ENavType } from "~/src/typings";

import "../_Page.scss";

const SignIn: React.FC = () => (
  <div>
    <NavFactory navType={ENavType.SignIn} />
    <div className="page">
      <AuthCtrl />
      <Menu menuMode={EMenuMode.Others} />
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
    <Footer />
  </div>
);

export default SignIn;
