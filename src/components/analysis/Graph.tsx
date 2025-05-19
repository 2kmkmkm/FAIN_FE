import graph from "../../assets/graph.svg";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", value: 1 },
  { time: "06:00", value: 0 },
  { time: "12:00", value: 5 },
  { time: "18:00", value: 3 },
  { time: "24:00", value: 2 },
];

const formattedData = data.map((d) => ({
  ...d,
  label: d.time.startsWith("0") ? d.time[1] : d.time.split(":")[0], // "06:00" → "6", "12:00" → "12"
}));

export default function Graph() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row px-2 justify-between items-center">
        <div className="flex flex-row gap-2.5 items-center">
          <img src={graph} className="w-5 h-5" />
          <div className="title">그래프</div>
        </div>
      </div>
      <div className="flex h-48 body-s">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 30, bottom: 10, right: 15 }}
          >
            <CartesianGrid vertical={true} horizontal={true} stroke="#ddd" />
            <XAxis
              dataKey="label"
              type="category"
              scale="band"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fill: "#aaa", fontSize: 12 }}
              label={{
                value: "(시)",
                position: "insideBottomRight",
                offset: 0,
                fill: "#aaa",
                fontSize: 12,
              }}
            />
            <YAxis
              domain={[0, "auto"]}
              axisLine={false}
              interval={0}
              width={25}
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
                    x={x - 8}
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
            <Bar dataKey="value" fill="#E57373" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
