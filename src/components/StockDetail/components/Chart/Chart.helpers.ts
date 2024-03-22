import Highcharts from "highcharts/highstock";
import { IntervalsType } from "../../../../types";

export const getChartOptions = (
  data: Array<number[]>,
  interval: IntervalsType,
  symbol: string,
  currency: string
) => {
  return {
    // Título que aparece en la parte superior del gráfico
    title: {
      text: symbol,
    },

    // Remueve la leyenda
    legend: {
      enabled: false,
    },

    // Personalizar eje Y
    yAxis: {
      title: {
        text: null,
      },

      labels: {
        format: "{text} " + currency,
      },
    },

    // Personalizar eje X
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject
        ) {
          return Highcharts.dateFormat("%d %m %H:%M", +this.value);
        },
      },
      tickInterval: interval * (60 * 1000),
    },

    // Personalizar tooltip
    tooltip: {
      formatter(this: { x: number; y: number }) {
        const formattedDate = Highcharts.dateFormat("%d-%m %H:%M", this.x);
        return `<b>${formattedDate}</b><br/><b>${symbol}:</b> ${this.y} ${currency}`;
      },
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },

    // Setea el tipo de gráfico, su nombre y los datos
    series: [
      {
        type: "line",
        name: `${symbol} stock`,
        color: "#00CA73", // Color del grafico
        data: data,
        lineWidth: 2,
        marker: {
          enabled: false,
        },
      },
    ],
  };
};
