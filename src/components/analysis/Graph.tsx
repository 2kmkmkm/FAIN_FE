import graph from "../../assets/graph.svg";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Graph({ ...rest }) {
  const formattedData = [
    { time: 0, value: rest.graphData.dawn },
    { time: 6, value: rest.graphData.morning },
    { time: 12, value: rest.graphData.afternoon },
    { time: 18, value: rest.graphData.night },
  ];

  console.log("Rest", rest);
  console.log(formattedData);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <img src={graph} className="w-5 h-5" />
          <div className="title">낙상 그래프</div>
        </div>
      </div>
      <div className="flex h-48 body-s">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            barCategoryGap="55%"
            margin={{ top: 30, bottom: 10 }}
          >
            <CartesianGrid stroke="#ddd" vertical={false} horizontal={false} />
            <XAxis
              dataKey="time"
              type="category"
              scale="band"
              domain={[0, 24]}
              ticks={[0, 6, 12, 18, 24]}
              axisLine={{ stroke: "#aaa", strokeWidth: 1, strokeOpacity: 0.5 }}
              tickLine={false}
              interval={0}
              tick={{ fill: "#aaa", fontSize: 12 }}
              label={{
                value: "(시)",
                position: "insideBottom",
                offset: -5,
                fill: "#aaa",
                fontSize: 12,
              }}
            />
            <YAxis
              domain={[0, "auto"]}
              allowDecimals={false}
              interval={0}
              width={20}
              axisLine={{ stroke: "#aaa", strokeWidth: 1, strokeOpacity: 0.5 }}
              tickLine={false}
              label={{
                position: "insideTop",
                offset: -25,
                value: "(회)",
                fill: "#aaa",
                fontSize: 12,
              }}
              tick={({
                x,
                y,
                payload,
              }: {
                x: number;
                y: number;
                payload: { value: number };
              }) => {
                const isFirst = payload.value === 0;
                return (
                  <text
                    x={x - 6}
                    y={y + 5}
                    fontSize={12}
                    fill="#aaa"
                    fillOpacity={isFirst ? 0 : 1}
                  >
                    {payload.value}
                  </text>
                );
              }}
            />
            <Bar dataKey="value" fill="#E57373" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
