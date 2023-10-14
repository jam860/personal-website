import Link from "next/link";
import styles from '/styles/blogpreview.module.css';


export default function ArticleCard(props) {
    return (
            <div className={styles["article-card"]}>
                <div className={styles["article-description"]}>
                    <Link href={"blog/" + props.class} className={styles["article-link"]} ><h2 className={styles["preview-title"] }>{props.title}</h2></Link>
                    <Link href={"blog/" + props.class} className={styles["article-link"]}><p className={styles["preview-descr"]}>{props.description}</p></Link>
                </div>
                <div className={styles["article-image"]}>
                    <Link href={"blog/" + props.class} className={styles["article-link"]}><img className={`${styles.blogPreviewImg} ${styles[props.class]}`} src={"/img/" + props.class + ".png"} alt="article preview" /></Link>
                </div>
                
            </div>

    )
}