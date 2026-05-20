export default function SkillCard({ skill }) {

    return (

        <div className="skill-group">
            <div className="skill-group-title">
                {skill.groupSkill}
            </div>
            {skill.techs.map(tech => <div className="skill-item" key={"skillKey" + tech}>
                <span className="dot"></span>
                {tech}
            </div>)}

        </div>

    );

}