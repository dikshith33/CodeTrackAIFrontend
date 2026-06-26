import StatCard from "./StatCard";

function ContestStats({
    history,
    darkMode
}) {

    if (!history || history.length === 0)
        return null;

    const totalContests = history.length;

    const peakRating = Math.max(
        ...history.map(
            contest => contest.newRating
        )
    );

    const lastContest =
        history[history.length - 1];

    const lastChange =
        lastContest.newRating -
        lastContest.oldRating;

    const avgGain = (
        history.reduce(
            (sum, contest) =>
                sum +
                (
                    contest.newRating -
                    contest.oldRating
                ),
            0
        ) / history.length
    ).toFixed(2);

    return (
        <div className="mt-8">

            <h2
                className={`
                    text-2xl
                    font-bold
                    mb-4

                    ${
                        darkMode
                            ? "text-white"
                            : "text-slate-900"
                    }
                `}
            >
                Contest Analytics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <StatCard
                    title="Contests"
                    value={totalContests}
                    color="bg-gradient-to-r from-cyan-500 to-blue-600"
                />

                <StatCard
                    title="Peak Rating"
                    value={peakRating}
                    color="bg-gradient-to-r from-purple-500 to-fuchsia-600"
                />

                <StatCard
                    title="Last Change"
                    value={
                        lastChange > 0
                            ? `+${lastChange}`
                            : lastChange
                    }
                    color="bg-gradient-to-r from-green-500 to-emerald-600"
                />

                <StatCard
                    title="Avg Gain"
                    value={avgGain}
                    color="bg-gradient-to-r from-orange-500 to-red-500"
                />

            </div>

        </div>
    );
}

export default ContestStats;