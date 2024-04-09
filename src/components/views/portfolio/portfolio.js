import { LitElement, html, css } from "lit";
import { portfolioStyles } from "./css/portfolio.style";
import * as api from "../../elements/utils/api/service-api";
import { mockPortfolioData, exchangeRate } from "../../constant/mockPortfolio";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db, app } from "../../../firebase";

const PORTFOLIO_DOC_ID = "defaultPortfolio";

class PortfolioView extends LitElement {
  static styles = [portfolioStyles];

  static get properties() {
    return {
      portfolio: { type: Array },
      isRealTime: { type: Boolean },
      totalCost: { type: Number },
    };
  }

  constructor() {
    super();
    this.portfolio = [];
    this.isRealTime = false;
    this.totalCost = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.routeChange();
    window.addEventListener("popstate", () => this.routeChange());
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", () => this.routeChange());
    super.disconnectedCallback();
  }

  routeChange() {
    const path = window.location.pathname;
    this.isRealTime = path.includes("/real-time");
    if (this.isRealTime) {
      this.updatePortfolioPrices();
    } else {
      this.loadPortfolio();
    }
  }

  async loadPortfolio() {
    const db = getFirestore(app);
    const portfolioCollection = collection(db, "portfolio");
    const querySnapshot = await getDocs(portfolioCollection);

    if (querySnapshot.empty) {
      this.portfolio = mockPortfolioData;
    } else {
      this.portfolio = querySnapshot.docs.map((doc) => doc.data());
    }
    this.calculateTotalCost();
  }

  loadMockPortfolio() {
    this.portfolio = mockPortfolioData.map((stock) => {
      const priceInEur = stock.priceUSD
        ? stock.priceUSD * exchangeRate
        : stock.priceEUR;
      const totalValueEur = stock.shares * priceInEur;

      return {
        ...stock,
        priceEUR: priceInEur,
        totalValueEur: parseFloat(totalValueEur.toFixed(2)),
      };
    });
    this.calculateTotalCost();
  }

  async updatePortfolioPrices() {
    const updates = this.portfolio.map((stock) =>
      api.getRealTimeData(stock.symbol).then((data) => {
        const timeSeries = data["Time Series (5min)"];
        const latestInterval = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestInterval];
        const priceUSD = parseFloat(latestData["4. close"]);
        return {
          ...stock,
          priceUSD,
          totalValueEur: stock.shares * priceUSD * exchangeRate,
        };
      })
    );

    try {
      this.portfolio = await Promise.all(updates);
      this.calculateTotalCost();
      const portfolioDocRef = doc(db, "portfolioData", PORTFOLIO_DOC_ID);
      await setDoc(portfolioDocRef, { prices: this.portfolio });
    } catch (error) {
      console.error("Error al actualizar los precios en tiempo real:", error);
    }
  }

  calculateTotalCost() {
    this.totalCost = this.portfolio.reduce((sum, stock) => {
      const totalValueEur = parseFloat(stock.totalValueEur) || 0;
      return sum + totalValueEur;
    }, 0);

    this.totalCost = parseFloat(this.totalCost.toFixed(2));
  }

  render() {
    return html`
      <div class="portfolio-list">
        <div class="portfolio-total">
          <h1>Capital at risk</h1>
          <span>${this.totalCost}€</span>
        </div>
        ${this.portfolio.map(
          (stock) => html`
            <div class="portfolio-item">
              <div class="portfolio-name">
                <span class="symbol">${stock.name} (${stock.symbol})</span>
                <div class="portfolio-data">
                  <span class="shares">${stock.shares.toFixed(2)} shares</span>
                  <span class="price">€${stock.totalValueEur.toFixed(2)}</span>
                </div>
              </div>
              <div class="info-user">
                <span class="total-value"
                  >€${stock.totalValueEur.toFixed(2)}</span
                >
                <span
                  class="change ${stock.changePercent >= 0
                    ? "change-positive"
                    : "change-negative"}"
                >
                  ${stock.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("portfolio-view", PortfolioView);
