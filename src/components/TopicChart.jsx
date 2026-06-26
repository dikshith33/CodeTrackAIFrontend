import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

function TopicChart({
    topics,
    darkMode
}) {

    if (!topics?.length) return null;

    const data = [...topics]
        .sort(
            (a, b) =>
                b.problemsSolved -
                a.problemsSolved
        )
        .slice(0, 10);

    return (
        <div
            className={`
                rounded-2xl
                shadow-lg
                p-6
                mt-8
                ${
                    darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-black"
                }
            `}
        >

            <h2 className="text-2xl font-bold mb-4">
                Topic Strength Analysis
            </h2>

            <div className="h-96">

                <ResponsiveContainer>

                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={
                                darkMode
                                    ? "#475569"
                                    : "#e2e8f0"
                            }
                        />

                        <XAxis
                            dataKey="tagName"
                            angle={0}
                            textAnchor="middle"
                            interval={0}
                            stroke={
                                darkMode
                                    ? "#cbd5e1"
                                    : "#334155"
                            }
                        />

                        <YAxis
                            stroke={
                                darkMode
                                    ? "#cbd5e1"
                                    : "#334155"
                            }
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: darkMode
                                    ? "#1e293b"
                                    : "#ffffff",
                                border: "none",
                                borderRadius: "12px",
                                color: darkMode
                                    ? "#ffffff"
                                    : "#000000"
                            }}
                        />

                        <Bar
                            dataKey="problemsSolved"
                            fill={
                                darkMode
                                    ? "#8b5cf6"
                                    : "#6366f1"
                            }
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default TopicChart;