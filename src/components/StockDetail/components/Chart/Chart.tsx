import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { FunctionComponent } from "react";
import { ChartType } from "../../StockDetail";
import { IStockValue } from "../../../../types";

type ChartProps = {
  chart: ChartType;
  values: Array<IStockValue>;
};

const Chart: FunctionComponent<ChartProps> = ({ chart, values }) => {
  const data = values.map((value) => [
    new Date(value.datetime).getTime(), // Convert datetime to timestamp
    parseFloat(value.open),
    parseFloat(value.high),
    parseFloat(value.low),
    parseFloat(value.close),
  ]);

  const options = {
    // Título que aparece en la parte superior del gráfico
    title: {
      text: "NFLX",
    },

    // Remueve la leyenda
    legend: {
      enabled: false,
    },

    // Remueve el label del eje Y
    yAxis: {
      title: {
        text: null,
      },
    },

    // Remueve los tooltips del gráfico
    tooltip: {
      enabled: false,
    },

    // Opciones para el area chart
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "blue"],
            [1, "rgba(0,0,0,0)"],
          ],
        },
      },
    },

    // Setea el tipo de gráfico, su nombre y los datos
    series: [
      {
        type: chart,
        name: "Stock chart",
        color: "blue", // Color de subida de gráfico candlestick
        upColor: "red", // Color de bajada de gráfico candlestick
        data: data,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
