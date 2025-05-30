import styles from './styles/projects.css';


export default function Projects(params) {

    return (
        <div className="projectcard">
            <a href="/user/projects">
            <p className="project-title">Project's</p>
            <div className="project-list">
                <p className="project-name">Project 1 </p>
                <p className="project-name">Project 2 </p>
                <p className="project-name">Project 3 </p>
                <p className="project-name">Project 4 </p>
                <p className="project-name">Project 5 </p>
                <p className="project-name">Project 6 </p>
                <p className="project-name">Project 7 </p>
                <p className="project-name">Project 8 </p>
            </div>
        </a>
        </div>
    );
};
