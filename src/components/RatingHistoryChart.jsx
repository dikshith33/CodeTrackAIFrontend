import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

function RatingHistoryChart({
    history,
    darkMode
}) {

    if (!Array.isArray(history) ||
        history.length === 0)
        return null;

    const data = history.map(contest => ({
        contest: contest.contestName,
        rating: contest.newRating
    }));

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
                Rating Progress
            </h2>

            <div className="h-96">

                <ResponsiveContainer>

                    <LineChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={
                                darkMode
                                    ? "#475569"
                                    : "#e2e8f0"
                            }
                        />

                        <XAxis
                            dataKey="contest"
                            hide
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
                                backgroundColor:
                                    darkMode
                                        ? "#1e293b"
                                        : "#ffffff",

                                border: "none",

                                borderRadius: "12px",

                                color:
                                    darkMode
                                        ? "#ffffff"
                                        : "#000000"
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="rating"
                            stroke={
                                darkMode
                                    ? "#22d3ee"
                                    : "#06b6d4"
                            }
                            strokeWidth={3}
                            dot={false}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default RatingHistoryChart;