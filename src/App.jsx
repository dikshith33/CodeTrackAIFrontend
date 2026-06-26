import { useState } from "react";
import {
    getLeetCodeProfile,
    getCodeforcesProfile,
    getCodeforcesHistory
} from "./services/api";

import ProfileCard from "./components/ProfileCard";
import CodeforcesProfileCard from "./components/CodeforcesProfileCard";

function App() {

    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [history, setHistory] = useState([]);
    const [platform, setPlatform] = useState("leetcode");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleSearch = async () => {

        try {

            setLoading(true);

            let data;

            if (platform === "leetcode") {

                data = await getLeetCodeProfile(username);

                setProfile(data);
                setHistory([]);

            } else {

                const profileData =
                    await getCodeforcesProfile(username);

                const historyData =
                    await getCodeforcesHistory(username);

                setProfile(profileData);
                setHistory(historyData);
            }

        } catch (error) {

            console.log(error);

            alert("User not found");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={`
        min-h-screen
        transition-all

        ${darkMode
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-black"
                }
    `}
        >

            <div className="max-w-7xl mx-auto p-8">

                <div className="flex justify-end mb-8 ">
                    <h1 className="text-5xl font-bold text-center mr-93">
                        CodeTrack AI
                    </h1>
                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                        className={`
            px-4 py-2 rounded-lg
            transition

            ${darkMode
                                ? "bg-yellow-500 text-white"
                                : "bg-slate-800 text-white"
                            }`}
                    >
                        {darkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>

                </div>

                {/* Platform Selector */}

                <div className="flex justify-center gap-4 mb-8">

                    <button
                        onClick={() => setPlatform("leetcode")}
                        className={`
            px-6 py-3
            rounded-xl
            font-semibold
            transition

            ${platform === "leetcode"
                                ? "bg-blue-600 text-white"
                                : darkMode
                                    ? "bg-slate-800 text-white border border-slate-700"
                                    : "bg-white text-slate-900 shadow"
                            }
        `}
                    >
                        LeetCode
                    </button>

                    <button
                        onClick={() => setPlatform("codeforces")}
                        className={`
            px-6 py-3
            rounded-xl
            font-semibold
            transition

            ${platform === "codeforces"
                                ? "bg-cyan-600 text-white"
                                : darkMode
                                    ? "bg-slate-800 text-white border border-slate-700"
                                    : "bg-white text-slate-900 shadow"
                            }
        `}
                    >
                        Codeforces
                    </button>

                </div>

                {/* Search */}

                <div
                    className={`
        rounded-2xl
        shadow-md
        p-6
        mb-8

        ${darkMode
                            ? "bg-slate-800"
                            : "bg-white"
                        }
    `}
                >
                    <div className="flex gap-3">

                        <input
                            type="text"
                            value={username}
                            placeholder={`Enter ${platform} username`}
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                            className="flex-1 border rounded-lg px-4 py-3"
                        />

                        <button
                            onClick={handleSearch}
                            disabled={loading}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                        >
                            {loading
                                ? "Loading..."
                                : "Search"}
                        </button>

                    </div>

                </div>

                {/* Dashboard */}

                {
                    platform === "leetcode"
                        ? (
                            <ProfileCard
                                profile={profile}
                                darkMode={darkMode}
                            />


                        )
                        : (
                            <CodeforcesProfileCard
                                profile={profile}
                                history={history}
                                darkMode={darkMode}
                            />
                        )
                }

            </div>

        </div>
    );
}

export default App;