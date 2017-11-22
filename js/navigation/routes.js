import { createRouter } from "@expo/ex-navigation";

import Layout from "./NavigationLayout";

import About from "../scenes/about";
import Schedule from "../scenes/schedule";
import Maps from "../scenes/map";
import Faves from "../scenes/faves";
import Session from "../scenes/session";
import Speaker from "../scenes/speaker";

export const Router = createRouter(() => ({
  // home: () => HomeScreen,
  layout: () => Layout,

  about: () => About,
  schedule: () => Schedule,
  map: () => Maps,
  faves: () => Faves,
  session: () => Session,
  speaker: () => Speaker
}));
