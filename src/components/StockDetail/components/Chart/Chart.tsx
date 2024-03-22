import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { FunctionComponent, useMemo } from "react";
import { IStockValue, IntervalsType } from "../../../../types";
import { getChartOptions } from "./Chart.helpers";

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
  const options = useMemo(() => {
    const data = values.map((value) => [
      new Date(value.datetime).getTime(),
      parseFloat(value.open),
      parseFloat(value.high),
      parseFloat(value.low),
      parseFloat(value.close),
    ]);

    return getChartOptions(data, interval, symbol, currency);
  }, [values, interval, symbol, currency]);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        updateArgs={[true, true, true]}
      />
    </div>
  );
};

export default Chart;
