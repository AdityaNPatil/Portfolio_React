// points is an array received as prop from Experience component
function ExperienceCard({ experienceTitle, company, duration, points , imgSrc}) {
    return (
        <>
            <div className="experienceCard">
                <img src={imgSrc} alt="Experience Image" />
                <main>
                    <h2>{experienceTitle}</h2>
                    <p>{company} ({duration})</p>
                    <ul>
                        {/* Giving unique key */}
                        {points.map(point =>
                            <li key={point.length}>
                                {point}
                            </li>
                        )}
                    </ul>
                </main>
            </div>
        </>
    );
}

export default ExperienceCard;