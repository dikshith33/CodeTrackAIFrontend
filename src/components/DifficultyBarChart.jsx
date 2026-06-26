import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

function DifficultyBarChart({ profile ,darkMode}) {

    if (!profile) return null;

    const data = [
        {
            difficulty: "Easy",
            solved: profile.easy
        },
        {
            difficulty: "Medium",
            solved: profile.medium
        },
        {
            difficulty: "Hard",
            solved: profile.hard
        }
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

            <h2 className="text-2xl font-bold mb-6">
                Problems Solved
            </h2>

            <div className="h-96">
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="difficulty" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="solved"
                            fill="#6366f1"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default DifficultyBarChart;