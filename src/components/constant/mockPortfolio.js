// Supongamos que 1 USD = 0.9 EUR
export const exchangeRate = 0.9;

export const mockPortfolioData = [
  {
    name: "Apple",
    symbol: "AAPL",
    shares: 0.2,
    priceUSD: 170.2,
    totalValueEur: 0.2 * 170.2 * exchangeRate,
    changePercent: -7.43,
  },
  {
    name: "Amazon",
    symbol: "AMZN",
    shares: 0.14,
    priceUSD: 183.42,
    totalValueEur: 0.14 * 183.42 * exchangeRate,
    changePercent: 9.44,
  },
  {
    name: "Alphabet (Class C)",
    symbol: "GOOG",
    shares: 0.15,
    priceUSD: 155.43,
    totalValueEur: 0.15 * 155.43 * exchangeRate,
    changePercent: 5.79,
  },
  {
    name: "Microsoft",
    symbol: "MSFT",
    shares: 0.05,
    priceUSD: 422.65,
    totalValueEur: 0.05 * 422.65 * exchangeRate,
    changePercent: 9.61,
  },
  {
    name: "Meta Platforms",
    symbol: "META",
    shares: 0.04,
    priceUSD: 514.7,
    totalValueEur: 0.04 * 514.7 * exchangeRate,
    changePercent: 36.63,
  },
  {
    name: "Nvidia",
    symbol: "NVDA",
    shares: 0.01,
    priceUSD: 898.43,
    totalValueEur: 0.01 * 898.43 * exchangeRate,
    changePercent: 22.19,
  },
  {
    name: "C4 Therapeutics",
    symbol: "CCCC",
    shares: 1.57,
    priceUSD: 7.81,
    totalValueEur: 1.57 * 7.81 * exchangeRate,
    changePercent: 5.42,
  },
  // LVMH Moët Hennessy Louis Vuitton ya está en euros, no se requiere conversión.
  {
    name: "LVMH Moët Hennessy Louis Vuitton",
    symbol: "LVMH",
    shares: 0.01,
    priceEUR: 816.45,
    totalValueEur: 0.01 * 816.45,
    changePercent: 12.94,
  },
  {
    name: "Cazoo",
    symbol: "CZOO",
    shares: 0.43,
    priceUSD: 11.58,
    totalValueEur: 0.43 * 11.58 * exchangeRate,
    changePercent: 27.42,
  },
  {
    name: "Sanmina Corporation",
    symbol: "SANM",
    shares: 0.06,
    priceUSD: 61,
    priceEUR: 61 * exchangeRate,
    totalValueEur: 0.06 * 61 * exchangeRate,
    changePercent: -2.29,
  },
  {
    name: "Iamgold Corp",
    symbol: "IAG",
    shares: 1,
    priceUSD: 3.66,
    priceEUR: 3.66 * exchangeRate,
    totalValueEur: 1 * 3.66 * exchangeRate,
    changePercent: 2.44,
  },
  {
    name: "System1",
    symbol: "SST",
    shares: 1,
    priceUSD: 2.14,
    priceEUR: 2.14 * exchangeRate,
    totalValueEur: 1 * 2.14 * exchangeRate,
    changePercent: -13.27,
  },
  // ... más acciones
];

// Asegúrate de redondear los valores totales si es necesario, por ejemplo:
// totalValueEur: Math.round(((0.2 * 170.20) * exchangeRate) * 100) / 100
