import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Stocks from "../components/stocks/Stocks";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/stocks",
    name: "Stocks",