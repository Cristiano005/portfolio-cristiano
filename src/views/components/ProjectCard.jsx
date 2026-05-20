export default function ProjectCard({ project }) {

    return (
        <a href={project.url} target="_blank" className="project-card">
            <div className="project-header">
                <p> {project.id} </p>
                <div className="redirect-icon">
                    ↗
                </div>
            </div>
            <h3 className="project-name">
                {project.name}
            </h3>
            <p className="project-desc">
                {project.description}
            </p>
            <div className="tech-tags">
                {project.techTags.map(tag => 
                    <div className="tech-tag" key={"projectKey" + tag}>
                       {tag}
                    </div>
                )}
            </div>
        </a>
    )

}