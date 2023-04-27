import React from "react";

import "./_Auth.scss";

import GoogleOAuth from "./GoogleOAuth";
import KakaoOAuth from "./KakaoOAuth";

const AuthCtrl: React.FC = () => (
  <div className="authCtrl">
    <GoogleOAuth />
    <KakaoOAuth />
  </div>
);

export default AuthCtrl;
