import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { FunctionComponent } from "react";
import { IStockValue } from "../../../../types";

type ChartProps = {
  symbol?: string;
  values: Array<IStockValue>;
};

const Chart: FunctionComponent<ChartProps> = ({ symbol, values }) => {
  const data = values.map((value) => [
    new Date(value.datetime).getTime(),
    parseFloat(value.open),
    parseFloat(value.high),
    parseFloat(value.low),
    parseFloat(value.close),
  ]);

  const options = {
    // Título que aparece en la parte superior del gráfico
    title: {
      text: symbol,
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

    // Setea el tipo de gráfico, su nombre y los datos
    series: [
      {
        type: "line",
        name: "Stock chart",
        color: "#00CA73", // Color de subida de gráfico candlestick
        upColor: "#FF6960", // Color de bajada de gráfico candlestick
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
