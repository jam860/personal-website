import ArticleCard from "../../components/ArticleCard"
import styles from "/styles/blogpreview.module.css";

export default function Blog() {
    const articleAPI = [
            {title:"Personal Website", description:"Before making this website, I took a class called INFO 340, a web development class that inspired me to make this website. Since this was my first web development class, I was worried at first since I was a pretty slow...", class: "info340"},
            {title:"INFO 360: Design Methods", description:"INFO 360 is a course that analyzes the process of creating a user interface, discussing what makes them effective, and applying theories that guides us in being good...", class:"info360"},
            {title:"INFO 200: Foundations of Informatics", description:"INFO 200 was my very first course taken at the University of Washington. It was an overview of all the topics the Informatics major covered, and heavily emphasized how...", class:"info200"},
            {title:"INFO 350: Information Ethics and Policy", description:"INFO 350 covered the ethical side of technology. We focused on current events that were happening our world such as ChatGPT's upbringing, AI in creative spaces, and...", class:"info350"},
            {title:"INFO 330: Databases and Data Modeling", description:"INFO 330 delved into databases, learned about SQL and making stored procedures, and more. Learning about the uses of a database and how they all intertwine...", class:"info330"},
    ]

    let ArticleCardComponents = articleAPI.map((article) => {
        return (<ArticleCard title={article.title} description={article.description} class={article.class} key={article.class}/>)
    })

    return (
        <div className={styles["article-preview"]}>
            <div className={styles["article-preview-content"]}>
            <div className={styles["blog-preview-description"]}>
                <h1 className={styles["blog-title"]}>Blog</h1>
                <div className={styles["blog-description-container"]}>
                    <p className={styles["blog-description"]}>I blog about classes I&apos;ve taken and projects I&apos;ve done!</p>
                </div>
            </div>
            <div className={styles["article-cards"]}>
            {ArticleCardComponents}
            </div>
        </div>
        </div>
    )
}