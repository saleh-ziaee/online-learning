import styles from "./LoadingCourseDetail.module.css";

function LoadingCourseDetail({className}) {
  return (
    <div className={`${className} flex`}>
      <div className={styles.book}>
        <div className={styles["book__pg-shadow"]}></div>
        <div className={styles["book__pg"]}></div>
        <div className={styles["book__pg"] + " " + styles["book__pg--2"]}></div>
        <div className={styles["book__pg"] + " " + styles["book__pg--3"]}></div>
        <div className={styles["book__pg"] + " " + styles["book__pg--4"]}></div>
        <div className={styles["book__pg"] + " " + styles["book__pg--5"]}></div>
      </div>
    </div>
  );
}

export default LoadingCourseDetail;
