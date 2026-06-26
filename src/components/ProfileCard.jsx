import StatCard from "./StatCard";
import DifficultyChart from "./DifficultyChart";
import DifficultyBarChart from "./DifficultyBarChart";
import TopicChart from "./TopicChart";
import Recommendations from "./Recommendations";
import AIChatbot
    from "./AIChatbot";


function ProfileCard({
    profile,
    darkMode
}) {

    if (!profile) return null;

    return (
        <div>

            {/* Header */}

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
                    {profile.username}
                </h2>

                <p
                    className={`
                        mt-2

                        ${
                            darkMode
                                ? "text-slate-300"
                                : "text-slate-500"
                        }
                    `}
                >
                    LeetCode Analytics Dashboard
                </p>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                <StatCard
                    title="Total Solved"
                    value={profile.totalSolved}
                    color="bg-gradient-to-r from-blue-500 to-indigo-600"
                />

                <StatCard
                    title="Ranking"
                    value={profile.ranking}
                    color="bg-gradient-to-r from-purple-500 to-fuchsia-600"
                />

                <StatCard
                    title="Easy"
                    value={profile.easy}
                    color="bg-gradient-to-r from-green-500 to-emerald-600"
                />

                <StatCard
                    title="Medium"
                    value={profile.medium}
                    color="bg-gradient-to-r from-amber-500 to-orange-500"
                />

                <StatCard
                    title="Hard"
                    value={profile.hard}
                    color="bg-gradient-to-r from-rose-500 to-red-600"
                />

            </div>

            {/* Difficulty Charts */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

                <DifficultyChart
                    profile={profile}
                    darkMode={darkMode}
                />

                <DifficultyBarChart
                    profile={profile}
                    darkMode={darkMode}
                />

            </div>

            {/* Topic Analytics */}

            <TopicChart
                topics={profile.topicStats}
                darkMode={darkMode}
            />

            {/* Learning Path */}

            <Recommendations
                learningTrack={profile.learningTrack}
                focusTopics={profile.focusTopics}
                recommendations={profile.recommendations}
                darkMode={darkMode}
            />
            <AIChatbot 
             darkMode={darkMode}/>
        </div>
    );
}

export default ProfileCard;