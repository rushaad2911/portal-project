import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["main-style"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          src="https://media.istockphoto.com/id/1305019435/vector/graduation-leaders.jpg?s=612x612&w=0&k=20&c=FjwkCitkMjz_dCFyQjcNWf0UtTsW_7jLNGlnm8999ps="
          alt="Graduation Leaders"
          fill
          className={styles["home-img"]}
          unoptimized
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
