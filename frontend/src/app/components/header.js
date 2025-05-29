import Link from 'next/link';
import './styles/header.css';

export default function Header() {
    return (
        <div className='main-header'>
            <div></div>
            <Link href="/user/profile">Profile</Link>
            <Link href="/">Home</Link>
        </div>
    );
}
