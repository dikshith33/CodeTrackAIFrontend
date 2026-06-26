function Recommendations({
    learningTrack,
    focusTopics,
    recommendations,
    darkMode
}) {

    if (!recommendations?.length)
        return null;

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

            <h2 className="text-2xl font-bold mb-2">
                Personalized Learning Path
            </h2>

            <p
                className={
                    darkMode
                        ? "text-slate-300 mb-6"
                        : "text-slate-500 mb-6"
                }
            >
                Current Track:
                {" "}
                <span className="font-semibold capitalize">
                    {learningTrack}
                </span>
            </p>

            <h3 className="font-semibold mb-3">
                Focus Topics
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">

                {focusTopics.map(topic => (

                    <span
                        key={topic.tagName}
                        className="
                            bg-indigo-100
                            text-indigo-700
                            px-3
                            py-1
                            rounded-full
                        "
                    >
                        {topic.tagName}
                        {" "}
                        ({topic.problemsSolved})
                    </span>

                ))}

            </div>

            <h3 className="font-semibold mb-4">
                Recommended Problems
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

                {recommendations.map(
                    (item, index) => (

                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`
                                block
                                rounded-xl
                                p-4
                                transition

                                ${
                                    darkMode
                                        ? "bg-slate-700 hover:bg-slate-600"
                                        : "bg-slate-100 hover:bg-slate-200"
                                }
                            `}
                        >

                            <div className="flex justify-between items-start">

                                <div>

                                    <div className="font-semibold">
                                        {item.title}
                                    </div>

                                    <div
                                        className={
                                            darkMode
                                                ? "text-sm text-slate-300"
                                                : "text-sm text-slate-500"
                                        }
                                    >
                                        {item.topic}
                                    </div>

                                </div>

                                <span
                                    className={`
                                        px-2 py-1 rounded text-xs

                                        ${
                                            item.difficulty === "Easy"
                                                ? "bg-green-100 text-green-700"
                                                : item.difficulty === "Medium"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }
                                    `}
                                >
                                    {item.difficulty}
                                </span>

                            </div>

                        </a>

                    )
                )}

            </div>

        </div>
    );
}

export default Recommendations;