function SkillCard({ imgSrc, text }) {
    return (
        <>
            <li>
                <div className="container">
                    <img src={imgSrc} alt="Avatar" class="imageSkill" />
                    <div className="overlay">
                        <div className="text">{text}</div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default SkillCard;