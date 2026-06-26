import { useState } from "react";
import { askAI } from "../services/api";
import ReactMarkdown from "react-markdown";

function AIChatbot({ darkMode }) {
const [question, setQuestion] = useState("");
const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);
const [open, setOpen] =
        useState(false);

const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = {
        role: "user",
        content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
        const response = await askAI(question);

        setMessages((prev) => [
            ...prev,
            {
                role: "assistant",
                content: response.answer,
            },
        ]);
    } catch (error) {
        console.error(error);

        setMessages((prev) => [
            ...prev,
            {
                role: "assistant",
                content:
                    "❌ Failed to generate response.",
            },
        ]);
    } finally {
        setLoading(false);
        setQuestion("");
    }
};

return (
    <>
        {/* Floating AI Button */}

        <button
            onClick={() => setOpen(!open)}
            className="
                fixed
                bottom-20
                right-6
                h-16
                w-16
                rounded-full
                bg-indigo-600
                text-white
                text-2xl
                shadow-2xl
                z-50
                hover:scale-110
                transition
            "
        >
            🤖
        </button>

        {/* Sidebar */}

        <div
            className={`
                fixed
                top-0
                right-0
                h-screen
                w-[50vw]
                z-40
                shadow-2xl
                transition-transform
                duration-300

                ${
                    open
                        ? "translate-x-0"
                        : "translate-x-full"
                }

                ${
                    darkMode
                        ? "bg-slate-900"
                        : "bg-white"
                }
            `}
        >

            {/* Header */}

            <div
                className={`
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    border-b

                    ${
                        darkMode
                            ? "border-slate-700"
                            : "border-slate-200"
                    }
                `}
            >

                <h2
                    className={`
                        text-xl
                        font-bold

                        ${
                            darkMode
                                ? "text-white"
                                : "text-slate-900"
                        }
                    `}
                >
                    🤖 AI Mentor
                </h2>

                <button
                    onClick={() =>
                        setOpen(false)
                    }
                    className={`
                        text-2xl

                        ${
                            darkMode
                                ? "text-white"
                                : "text-slate-900"
                        }
                    `}
                >
                    ×
                </button>

            </div>

           
            {/* Chat Container */}

            <div className="px-4 pb-4 flex flex-col h-[calc(100vh-70px)]">

                {/* Messages */}

                <div
                    className={`
                        flex-1
                        overflow-y-auto
                        rounded-2xl
                        border
                        p-4
                        space-y-6

                        ${
                            darkMode
                                ? "bg-slate-950 border-slate-700"
                                : "bg-slate-50 border-slate-200"
                        }
                    `}
                >

                    {messages.map((msg, idx) => (
                        <div key={idx}>
                            {msg.role === "user" ? (

                                <div className="flex justify-end">

                                    <div className="max-w-[80%]">

                                        <div
                                            className="
                                                bg-indigo-600
                                                text-white
                                                px-4
                                                py-3
                                                rounded-2xl
                                            "
                                        >
                                            {msg.content}
                                        </div>

                                    </div>

                                </div>

                            ) : (

                                <div className="flex gap-4">

                                    <div
                                        className="
                                            h-10
                                            w-10
                                            rounded-full
                                            bg-indigo-600
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                            font-bold
                                            shrink-0
                                        "
                                    >
                                        AI
                                    </div>

                                    <div
                                        className={`
                                            flex-1
                                            rounded-2xl
                                            border
                                            p-5

                                            ${
                                                darkMode
                                                    ? `
                                                        bg-slate-800
                                                        border-slate-700
                                                        text-white
                                                    `
                                                    : `
                                                        bg-white
                                                        border-slate-200
                                                        text-slate-900
                                                    `
                                            }
                                        `}
                                    >

                                        <div
                                            className="
                                                prose
                                                max-w-none
                                                prose-headings:text-indigo-500
                                            "
                                        >

                                            <ReactMarkdown
                                                components={{
        h1: ({ children }) => (
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-indigo-500">
                    📘 {children}
                </h1>
            </div>
        ),

        h2: ({ children }) => {
            const title = Array.isArray(children)
                ? children.join("")
                : children?.toString()?.trim();

            const icons = {
                "Problem Explanation": "📘",
                "Intuition": "💡",
                "Brute Force": "🐢",
                "Better Solution": "🔥",
                "Optimal Solution": "⚡",
                "Complexity Analysis": "📊",
                "Common Mistakes": "❌",
                "Similar Problems": "🔗",
            };

            return (
                <div
                    className={`
                        mt-10
                        mb-5
                        p-4
                        rounded-xl
                        border-l-4
                        border-indigo-500
                        shadow-sm

                        ${
                            darkMode
                                ? "bg-slate-800"
                                : "bg-indigo-50"
                        }
                    `}
                >
                    <h2 className="text-xl font-semibold">
                        {icons[title] || "📌"} {title}
                    </h2>
                </div>
            );
        },

        p: ({ children }) => (
            <p
                className="
                    leading-8
                    text-[16px]
                    mb-4
                "
            >
                {children}
            </p>
        ),

        ul: ({ children }) => (
            <ul
                className="
                    list-disc
                    pl-6
                    space-y-2
                    mb-4
                "
            >
                {children}
            </ul>
        ),

        ol: ({ children }) => (
            <ol
                className="
                    list-decimal
                    pl-6
                    space-y-2
                    mb-4
                "
            >
                {children}
            </ol>
        ),

        li: ({ children }) => (
            <li className="leading-7">
                {children}
            </li>
        ),

        table: ({ children }) => (
            <div className="overflow-x-auto my-4">
                <table
                    className={`
                        w-full
                        border
                        rounded-xl
                        overflow-hidden

                        ${
                            darkMode
                                ? "border-slate-700"
                                : "border-slate-300"
                        }
                    `}
                >
                    {children}
                </table>
            </div>
        ),

        th: ({ children }) => (
            <th
                className={`
                    border
                    p-3
                    text-left

                    ${
                        darkMode
                            ? "bg-slate-700 border-slate-600"
                            : "bg-slate-100 border-slate-300"
                    }
                `}
            >
                {children}
            </th>
        ),

        td: ({ children }) => (
            <td
                className={`
                    border
                    p-3

                    ${
                        darkMode
                            ? "border-slate-700"
                            : "border-slate-300"
                    }
                `}
            >
                {children}
            </td>
        ),

        blockquote: ({ children }) => (
            <blockquote
                className="
                    border-l-4
                    border-indigo-500
                    pl-4
                    italic
                    my-4
                "
            >
                {children}
            </blockquote>
        ),

        hr: () => (
            <hr
                className={`
                    my-8

                    ${
                        darkMode
                            ? "border-slate-700"
                            : "border-slate-300"
                    }
                `}
            />
        ),

        code({ className, children }) {
            const isBlock =
                className?.includes("language-");

            if (!isBlock) {
                return (
                    <code
                        className={`
                            px-2
                            py-1
                            rounded-md
                            text-sm
                            font-mono

                            ${
                                darkMode
                                    ? "bg-slate-700 text-pink-400"
                                    : "bg-slate-200 text-pink-600"
                            }
                        `}
                    >
                        {children}
                    </code>
                );
            }

            return (
                <pre
                    className="
                        bg-slate-950
                        text-green-400
                        p-5
                        rounded-2xl
                        overflow-x-auto
                        shadow-lg
                        my-4
                    "
                >
                    <code>{children}</code>
                </pre>
            );
        },
    }}
>
    {msg.content}
                                            </ReactMarkdown>

                                        </div>

                                    </div>

                                </div>

                            )}
                        </div>
                    ))}

                    {loading && (

                        <div className="flex gap-4">

                            <div
                                className="
                                    h-10
                                    w-10
                                    rounded-full
                                    bg-indigo-600
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    font-bold
                                "
                            >
                                AI
                            </div>

                            <div
                                className={`
                                    px-5
                                    py-4
                                    rounded-2xl

                                    ${
                                        darkMode
                                            ? "bg-slate-800 text-slate-300"
                                            : "bg-white text-slate-600"
                                    }
                                `}
                            >
                                AI is thinking...
                            </div>

                        </div>

                    )}

                </div>

                {/* Input */}

                <div className="flex gap-3 mt-4">

                    <input
                        value={question}
                        onChange={(e) =>
                            setQuestion(
                                e.target.value
                            )
                        }
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            handleSend()
                        }
                        placeholder="Ask any DSA question..."
                        className={`
                            flex-1
                            px-4
                            py-3
                            rounded-xl
                            border

                            ${
                                darkMode
                                    ? `
                                        bg-slate-800
                                        border-slate-700
                                        text-white
                                    `
                                    : `
                                        bg-white
                                        border-slate-300
                                    `
                            }
                        `}
                    />

                    <button
                        onClick={handleSend}
                        disabled={loading}
                        className="
                            bg-indigo-600
                            hover:bg-indigo-700
                            text-white
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                        "
                    >
                        Send
                    </button>

                </div>

            </div>

        </div>
    </>
);
}
export default AIChatbot;
