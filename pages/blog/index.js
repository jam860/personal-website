import ArticleCard from "../../components/ArticleCard"
import styles from "/styles/blogpreview.module.css";
import Head from "next/head";

export default function Blog() {
    const articleAPI = [
        { title: "Personal Website", description: "Before making this website, I took a class called INFO 340, a web development class that inspired me to make this website. Since this was my first web development class, I was worried at first since I was a pretty slow...", class: "info340" },
        { title: "VisitUW", description: "We decided to build a mobile application for the University of Washington. More specifically, we wanted to create an application that would help tourists find attractions...", class: "info360" },
        { title: "UW Counseling Center Redesign", description: "Our goal was to identify an information problem within our community, and think of ways that we can solve it. I joined four others for this project project, and many of us had different ideas...", class: "info200" },
        { title: "AI Busted!!", description: "We created a small podcast called AI Busted!! to explore the use of AI in the criminal justice system. We wanted to learn more about how AI is utilized in law enforcement and to educate people about the potential...", class: "info350" },
        { title: "Theater Database", description: " Our primary goal for this project was to create a database that provided relavent data about the movie industry. We had various users that were included in this database: directors, consumers, theater operators...", class: "info330" },
    ]

    let ArticleCardComponents = articleAPI.map((article) => {
        return (<ArticleCard title={article.title} description={article.description} class={article.class} key={article.class} />)
    })

    return (
        <>
            <Head>
                <title>Blog Preview</title>
                <meta name="James Nguyen" />
                <meta name="description" content="Blog Preview Page" />
                <link rel="icon" type="image/png" href="/img/logo-icon.png"></link>
            </Head>
            <div className={styles["article-preview"]}>
                <div className={styles["article-preview-content"]}>
                    <div className={styles["blog-preview-description"]}>
                        <h1 className={styles["blog-title"]}>Blog</h1>
                        <div className={styles["blog-description-container"]}>
                            <p className={styles["blog-description"]}>I blog about projects I&apos;ve done and my expereinces with classes at UW!</p>
                        </div>
                    </div>
                    <div className={styles["article-cards"]}>
                        {ArticleCardComponents}
                    </div>
                </div>
            </div>
        </>
    )
}