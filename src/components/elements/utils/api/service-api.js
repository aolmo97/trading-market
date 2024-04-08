const baseUrl = "https://www.alphavantage.co/query?";
const apiKey = "VGJJZ3G6O35GAZRW";

// Método para obtener datos en tiempo real de una acción específica
export const getRealTimeData = (symbol) => {
  const url = `${baseUrl}function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data["Error Message"]) {
        throw new Error("Error al obtener datos de la acción");
      }
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener datos en tiempo real:", error);
    });
};

// Método para obtener datos históricos de una acción
export const getHistoricalData = (symbol, interval = "daily") => {
  const functionType =
    interval === "daily" ? "TIME_SERIES_DAILY" : "TIME_SERIES_INTRADAY";
  const url = `${baseUrl}function=${functionType}&symbol=${symbol}&apikey=${apiKey}`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data["Error Message"]) {
        throw new Error("Error al obtener datos históricos de la acción");
      }
      return data;
    })
    .catch((error) => {
      console.error("Error al obtener datos históricos:", error);
    });
};

// Puedes añadir más métodos para diferentes funcionalidades de la API
// Uso de la clase
