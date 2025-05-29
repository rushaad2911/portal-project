import './styles/resume.css';

export default function Resume(params) {
    return (
        <a href="/user/profile/resume">

        <div className='resume-component'>
            <p>Analyze Resume</p>
            <img 
            src="https://img.icons8.com/ios-filled/100/FFFFFF/resume.png"
            width={80}
            height={80}
            className="resume-img"
            />
        </div>
        </a>
    );
};
