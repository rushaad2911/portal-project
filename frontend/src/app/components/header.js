import Link from 'next/link';
import './styles/header.css';

export default function Header(props) {
    return (
        <div className='main-header'>
            <div className="pagename">{props.pagename}</div>
            <Link href="/user/profile">Profile</Link>
            <Link href="/">Home</Link>
        </div>
    );
}


Header.defaultProps={
    pagename:null,
}