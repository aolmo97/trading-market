import { LitElement, css, html } from "lit";
import "./components/stock-simulator/stock-simulator";
import "./components/views/portfolio/portfolio";
import { Routes } from "@lit-labs/router";
import { routesComponent } from "./components/elements/utils/routes/routes";

export class App extends LitElement {
  static get properties() {
    return {
      companies: { type: Array },
    };
  }

  constructor() {
    super();
    this._routes = new Routes(this, routesComponent);
    this._routes.goto(window.location.pathname);
  }

  render() {
    return html` <main>${this._routes.outlet()}</main> `;
  }
}

window.customElements.define("container-app", App);
