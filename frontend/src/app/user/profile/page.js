"use client";
import styles from './profile.page.css';
import Skills from '../../components/skills';
import Cirtificate from '../../components/cirtificate';
import LeetCodeStats from '@/app/components/contributions/leetcode';
import Resume from '@/app/components/resume';


export default function Profile(prams){

    return (
        <div className='profile-style'>
        <Skills/>
        <Cirtificate/>
        <LeetCodeStats username="rushaad29"/>
        <Resume/>
        </div>
    );
};