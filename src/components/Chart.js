import { ReactComponent as ArrowDownSvg } from "../assets/icons/dashicons_arrow-down.svg";
import Icon from "@ant-design/icons";

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

    autofFit: true,
    xField: "date",
    yField: "sales",
    seriesField: "date",
    xAxis: false,
    yAxis: {
      label: {
        offsetX: -24,
        style: {
          fontSize: 14,
        },
      },
      grid: {
        line: {
          style: {
            lineDash: [4, 4],
          },
        },
      },
    },

    legend: {
      position: "bottom",
      flipPage: false,
      marker: false,
      label: {
        style: {
          fontSize: 14,
        },
      },
    },

    color: ({ date }) => {
      return "#6E62E5";
    },
    /*
    label: {
      position: "top",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "#fff",
      },
      background: {
        style: { fill: "#000" },
      },
    },
*/
    padding: [24, 0, 48, 48],
    color: ["#C5C0F5", "#6E62E5"],

    columnStyle: {
      radius: 8,
    },
    minColumnWidth: 48,
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

  return (
    <div className="flex flex-col items-start flex-[1_0_0] self-stretch gap-10">
      <div className="flex justify-between items-end self-stretch">
        <div className="flex items-end gap-2">
          <p className="text-[#1E1E1E] text-xl not-italic font-medium leading-[normal] tracking-[-0.03125rem]">
            Analytic
          </p>
          <p className="text-[#3DC764] text-base not-italic font-medium leading-[normal] tracking-[-0.025rem]">
            +5.4%
          </p>
        </div>
        <div className="flex justify-end items-start">
          <p className="text-[#1E1E1E] text-sm not-italic font-normal leading-[normal] tracking-[-0.02188rem]">
            Month
          </p>
          <Icon component={() => <ArrowDownSvg className="fill-[#1E1E1E]" />} />
        </div>
      </div>
      <div className="flex flex-[1_0_0] self-stretch">
        <Column {...config} />
      </div>
    </div>
  );
};

export default Chart;
