import graph from "../../assets/graph.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
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
            margin={{ top: 10, bottom: 10, right: 5 }}
          >
            <XAxis
              dataKey="label"
              tickLine={false}
              tick={{ fill: "#aaaaaa", fontSize: 12 }}
              interval={0}
              label={{
                value: "(시)",
                position: "insideBottomRight",
                offset: 0,
                fill: "#aaaaaa",
                fontSize: 12,
              }}
            />
            <YAxis
              domain={[0, "auto"]}
              interval={0}
              width={25}
              tickCount={4}
              label={{
                value: "(회)",
                position: "insideTop",
                offset: -10,
                fill: "#aaaaaa",
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
                    y={y}
                    fontSize={12}
                    fill="#aaa"
                    fillOpacity={isFirst ? 0 : 1}
                  >
                    {payload.value}
                  </text>
                );
              }}
              tickLine={false}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#E57373" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
