import StatCard from "./StatCard";
import RatingHistoryChart from "./RatingHistoryChart";
import ContestStats from "./ContestStats";
import AIChatbot from "./AIChatbot";

function CodeforcesProfileCard({
    profile,
    history,
    darkMode
}) {

    if (!profile) return null;

    return (
        <div>

            <div className="mb-8">

                <h2
                    className={`
                        text-4xl
                        font-bold

                        ${
                            darkMode
                                ? "text-white"
                                : "text-slate-900"
                        }
                    `}
                >
                    {profile.handle}
                </h2>

                <p
                    className={
                        darkMode
                            ? "text-slate-300"
                            : "text-slate-500"
                    }
                >
                    Codeforces Analytics Dashboard
                </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <StatCard
                    title="Rating"
                    value={profile.rating}
                    color="bg-gradient-to-r from-blue-500 to-indigo-600"
                />

                <StatCard
                    title="Max Rating"
                    value={profile.maxRating}
                    color="bg-gradient-to-r from-purple-500 to-fuchsia-600"
                />

                <StatCard
                    title="Rank"
                    value={profile.rank}
                    color="bg-gradient-to-r from-green-500 to-emerald-600"
                />

                <StatCard
                    title="Max Rank"
                    value={profile.maxRank}
                    color="bg-gradient-to-r from-amber-500 to-orange-500"
                />

            </div>

            <RatingHistoryChart
                history={history}
                darkMode={darkMode}
            />

            <ContestStats
                history={history}
                darkMode={darkMode}
            />
            <AIChatbot 
             darkMode={darkMode}/>
        </div>
    );
}

export default CodeforcesProfileCard;