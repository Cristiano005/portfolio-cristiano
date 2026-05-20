export default function ExperienceCard({ experience, activeId, onClick }) {

    return (
        <div className={`experience${experience.id === activeId ? " active" : ""}`} onClick={onClick}>
            <div className="header">
                <div className="role">
                    {experience.role}
                </div>
                <div className="period">
                    {experience.period}
                </div>
            </div>
            <div className="exp-company">
                {experience.company}
            </div>
            <p className="exp-note">
                {experience.note}
            </p>
            <p className="exp-description">
                {experience.description}
            </p>
            <div className="exp-tech-tags">
                {experience.techTags.map(tech =>
                    <div className="exp-tech-tag" key={`tech${tech}`}>
                        {tech}
                    </div>
                )}
            </div>
        </div>
    );

}