export default function ExperienceCard({ experience }) {
    
    return (
        <div className={`experience${experience.isActive ? " active" : ""}`}>
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
            <p className="exp-description">
                {experience.description}
            </p>
            <div className="tech-tags">
                {experience.techTags.map(tech =>
                    <div className="tech-tag" key={`tech${tech}`}>
                        {tech}
                    </div>
                )}
            </div>
        </div>
    );

}