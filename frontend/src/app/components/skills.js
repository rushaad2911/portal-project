import "./styles/skills.css";

export default function SkillsWidget(params) {
    
    return (
        
        <a href="/user/skill">
        <div className="skill-widget">
        <p className="skill-title">Skills</p>

        <div className="skill-display">
            <AddSkill skillname="Python"/>
            <AddSkill skillname="DSA"/>
            <AddSkill skillname="AWS"/>
            <AddSkill skillname="Django"/>
        </div>
        </div>
        </a>
    );
};


function AddSkill(prams){
    return (
        <div className="skill-box">
            <p>{prams.skillname}</p>
        </div>
    );
}