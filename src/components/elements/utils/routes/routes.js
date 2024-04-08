import { html } from "lit";
import "../../../views/portfolio/portfolio";
import { URL_BASE } from "../../../constant/url";
import { mockPortfolioData } from "../../../constant/mockPortfolio";

export const routesComponent = [
  {
    path: `${URL_BASE}/`,
    render: () =>
      html`<portfolio-view .portfolio=${mockPortfolioData}></portfolio-view>`,
  },
  {
    path: `${URL_BASE}/real-time`,
    render: () =>
      html`<portfolio-view .portfolio=${mockPortfolioData}></portfolio-view>`,
  },
  // {
  //   path: `${URL_BASE}/game/:playerName`,
  //   render: (data) => {
  //     const playerName = data.playerName || "";
  //     return html`<game-view .playerName=${playerName}></game-view>`;
  //   },
  // },
];
