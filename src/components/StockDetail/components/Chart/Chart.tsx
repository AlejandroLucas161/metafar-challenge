import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { FunctionComponent, useEffect, useState } from "react";
import { IStockValue, IntervalsType } from "../../../../types";

type ChartProps = {
  interval: IntervalsType;
  symbol: string;
  currency: string;
  values: Array<IStockValue>;
};

const Chart: FunctionComponent<ChartProps> = ({
  interval,
  symbol,
  currency,
  values,
}) => {
  const [data, setData] = useState<Array<number[]>>([]);

  useEffect(() => {
    const formattedData = values.map((value) => [
      new Date(value.datetime).getTime(),
      parseFloat(value.open),
      parseFloat(value.high),
      parseFloat(value.low),
      parseFloat(value.close),
    ]);

    setData(() => [...formattedData]);
  }, [values]);

  const options = {
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

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
