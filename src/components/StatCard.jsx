function StatCard({
    title,
    value,
    color,
    darkMode
}) {

    return (

        <div
            className={`
                ${color}
                rounded-2xl
                p-6
                shadow-lg
                text-white
            `}
        >

            <p className="opacity-80">
                {title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
                {value}
            </h2>

        </div>

    );
}

export default StatCard;