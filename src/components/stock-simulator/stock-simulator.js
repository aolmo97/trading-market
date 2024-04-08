import { LitElement, html } from "lit";
import { getRealTimeData } from "../elements/utils/api/service-api";

class StockSimulator extends LitElement {
  static get properties() {
    return {
      portfolio: { type: Array },
      balance: { type: Number },
    };
  }

  constructor() {
    super();
    this.portfolio = [];
    this.balance = 10000; // Simula un saldo inicial
  }

  setCompany(company) {
    this.selectedCompany = company;
    this.fetchCompanyData();
  }

  fetchCompanyData() {
    if (this.selectedCompany) {
      getRealTimeData(this.selectedCompany.symbol)
        .then((data) => {
          console.log("Datos de la empresa:", data);
          // Aquí puedes procesar los datos recibidos, por ejemplo, actualizar el precio de la acción
        })
        .catch((error) => {
          console.error("Error al obtener datos de la empresa:", error);
        });
    }
  }

  // Métodos para comprar y vender acciones...
  async buyStock(amount) {
    // Implementar lógica para comprar acciones de la empresa seleccionada
  }

  async sellStock(amount) {
    // Implementar lógica para vender acciones de la empresa seleccionada
  }

  render() {
    return html`
      <!-- UI para mostrar el portafolio y realizar operaciones -->
      <div>
        Balance: ${this.balance}
        <div>Portafolio:</div>
        <ul>
          ${this.portfolio.map(
            (stock) => html`<li>${stock.name} - ${stock.shares} shares</li>`
          )}
        </ul>
        <div>
          Empresa seleccionada:
          ${this.selectedCompany ? this.selectedCompany.name : "Ninguna"}
        </div>
        <!-- Aquí puedes agregar elementos de UI para comprar/vender acciones -->
      </div>
    `;
  }
}

customElements.define("stock-simulator", StockSimulator);
