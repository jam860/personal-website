import Link from "next/link"
import styles from "/styles/article.module.css";
import Head from "next/head";

export default function Info350() {
    return (
        <>
        <Head>
			<title>AI Busted!! Blog</title>
			<meta name="James Nguyen"/>
			<meta name="description" content="expereinces with making a podcast for AI Busted!! and INFO350"/>
            <link rel="icon" type="image/png" href="/img/logo-icon.png"></link>
		</Head>
        <div className={styles["article-page"]}>
            <div className={styles["article-content-container"]}>
                <div className={styles["content"]}>
                    <div className={styles["article-intro-photo-container"]}>
                        <img className={styles["article-intro-photo"]} src="/img/info350.png" alt="a portion of an article about AI" />
                        <figcaption className={styles["picture-caption"]}>Photo from article I wrote about AI within the criminal justice system</figcaption>
                    </div>
                    <div className={styles["article-content"]}>
                        <h1 className={styles["article-title"]}>AI Busted!!</h1>
                        <section><p>Feel free to take a look at the project me and my group made: <a href="https://medium.com/@JamesUW/ai-busted-a-podcast-about-the-use-of-ai-surrounding-the-criminal-justice-system-23f4bfff4fa9" target="_blank">AI Within The Criminal Justice System</a>.</p></section>
                        <section>
                            <p>We created a small podcast called <a href="https://www.youtube.com/playlist?list=PLhY4MaSyvllfbazGmjblBjQVLgUypW4Vr">AI Busted!!</a> to explore the use of AI in the criminal justice system. We wanted to learn more about how AI is utilized in law enforcement and to educate people about the potential of AI. While AI is super cool and has benefits, we wanted to note how AI has been a somewhat overhyped subject that prevents people from seeing the dangers behind using AI in certain environments. The podcast consists of three episodes, each focusing on a specific topic related to AI in the criminal justice system: DNA analysis, predictive policing, and surveillance.</p>
                            
                            <img className={styles["article-intro-photo"]} src="/img/info350-podcast.png" alt="podcast logo" />
                            <figcaption className={styles["picture-caption"]}>Photo of our podcast logo!</figcaption>
                            
                            <p>
                            The project aims to inform a broad audience about these topics, including individuals interested in AI&apos;s role in law enforcement, those who work in the field, and marginalized communities affected by biased data and over-policing. This project is intended to raise awareness and empower our audience in safeguarding their rights and privacy in the face of AI&apos;s increasing role in the criminal justice system. For more details about our project, I highly recommend visiting our article that we wrote on Medium: <a href="https://medium.com/@JamesUW/ai-busted-a-podcast-about-the-use-of-ai-surrounding-the-criminal-justice-system-23f4bfff4fa9" target="_blank">AI Busted!! — A Podcast About the Use of AI Surrounding the Criminal Justice System</a>.
                            </p>
                        </section>

                        <section>
                        <h2>INFO 350: Information Ethics & Policy</h2>
                            <p>INFO 350 covered a wide range of topics related to information, ethics, and policy. We focused on current events that were happening in our world such as ChatGPT&apos;s upbringing, AI in creative spaces, and more. We also examined some of the policy issues surrounding information technology, systems and industries as well. We put a heavy emphasis on looking at the different dimensions surrounding these issues. The topics that our classes examined included privacy, intellectual property, online speech, misinformation, algorithmic inequality, and the environmental consequences of information technology. </p>
                            <p>Our class had many forms of assignments for students to engage in. We had readings, quizzes, papers and a final project. Readings helped to expose us to some of the topics that were introduced in this class. There were a lot of serious and boring articles that we had to read about, but there were also a handful of funny articles. One of the articles that I wanted to highlight from this class that I found super interesting was <a href="https://www.nytimes.com/2023/02/16/technology/bing-chatbot-transcript.html" target="_blank">Bing&apos;s AI Chatbot: &apos;I Want to Be Alive&apos;</a> written by Kevin Roose. This article discusses his conversation with the chatbot, which was a little unsettling to read. The bot, who calls itself Sydney, talks about wanting to be human, and tries to express their emotions as if it were human. It also suddenly tries to declare it&apos;s love for the writer at one point. I highly recommend checking it out, it was super interesting!
                            </p>
                        </section>

                        <section>
                            <h2>Analyzing Topics</h2>
                            <p>This quarter, we had to write three papers talking about privacy, intellectual property and misinformation. For my privacy analysis, I talk about the issue of privacy and data collection in the context of dating app&apos;s privacy policy, and whether users should share their personal information in exchange for the app&apos;s services. Many of the dating apps privacy policies I looked at collected three types of data: personal information for verification, location data for proximity matching, and device data for app improvement. I talked about the drawbacks of giving away one&apos;s data, but I ended my paper with saying that providing one&apos;s information is necessary if wanting to benefit from these apps. As for intellectual property analysis, I explored the question of whether artists should be compensated when their images are used as training data for AI models. I noted throughout the article that artists usually have images used without permission, raising copyright issues, and that using an artist&apos;s work without compensation could harm the original creators. And while AI art can be seen as cool, I note at the end that artists should be compensated for the reasons above. As for my misinformation analysis, I explored the misinformation surrounding COVID-19, and the spread of it. I talked about conspiracy theories related to the COVID-19 vaccines, such as microchips for surveillance, and how some of these myths gained traction on platforms like TikTok. It was interesting writing about these topics.</p></section>
                    </div>
                    <div className={styles["return-blog-container"]}>
                        <Link href="/blog"> <button className={styles["return-blogs"]}>Back to Blogs</button> </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}