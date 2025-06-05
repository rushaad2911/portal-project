import styles from "./profile.page.css";
import Skills from "../../components/skills";
import certificate from "../../components/certificate";
import LeetCodeStats from "@/app/components/contributions/leetcode";
import Resume from "@/app/components/resume";
import Projects from "@/app/components/projects";
import College_func from "@/app/components/college-func";
export default function Profile(prams) {
  return (
    <div className="profile-style">
      <Skills />
      <certificate />
      <LeetCodeStats username="rushaad29" />
      <Resume />
      <Projects />
      <College_func />
    </div>
  );
}
