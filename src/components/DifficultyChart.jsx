import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Cell
} from "recharts";

function DifficultyChart({ profile ,darkMode }) {

    if (!profile) return null;

    const data = [
        {
            name: "Easy",
            value: profile.easy
        },
        {
            name: "Medium",
            value: profile.medium
        },
        {
            name: "Hard",
            value: profile.hard
        }
    ];

    const COLORS = [
        "#10b981", // Easy - Emerald
        "#f59e0b", // Medium - Amber
        "#ef4444"  // Hard - Red
    ];

    return (
        <div className={`
                rounded-2xl
                shadow-lg
                p-6
                mt-8

                ${
                    darkMode
                        ? "bg-slate-800 text-white"
                        : "bg-white text-black"
                }
            `}>

            <h2 className="text-2xl font-bold">
                Difficulty Distribution
            </h2>

            <p className="text-slate-500 mt-2 mb-6">
                Breakdown of solved problems by difficulty
            </p>

            <div className="h-96">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >

                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index]}
                                />
                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default DifficultyChart;