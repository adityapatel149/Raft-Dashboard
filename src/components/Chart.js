import { Column } from "@ant-design/plots";

const Chart = () => {
  const data = [
    {
      date: "1-5 Aug",
      sales: 35,
    },
    {
      date: "5-10 Aug",
      sales: 47,
    },
    {
      date: "11-15 Aug",
      sales: 39,
    },
    {
      date: "15-20 Aug",
      sales: 60,
    },
    {
      date: "20-25 Aug",
      sales: 30,
    },
    {
      date: "26-30 Aug",
      sales: 43,
    },
  ];
  const config = {
    data,
    autoFit: true,
    xField: "date",
    yField: "sales",
    seriesField: "date",
    xAxis: false,
    legend: {
      position: "bottom",
      flipPage: false,
    },

    color: ({ date }) => {
      /*if (date === "1-10 Aug") {
        return "#6E62E5";
      }*/

      return "#6E62E5";
    },
    label: {
      position: "top",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "#000",
      },
    },
    appendPadding: 40,

    meta: {
      sales: {
        min: 20,
        nice: true,
        tickInterval: 20,
      },
      date: {
        tickCount: 4,
      },
    },
  };
  return <Column {...config} />;
};

export default Chart;
