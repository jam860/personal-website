import Link from "next/link"
import styles from '/styles/article.module.css';


export default function Info200() {
    return (
        <div className={styles["article-page"]}>
            <div className={styles["article-content-container"]}>
                <div className={styles["content"]}>
                    <div className={styles["article-intro-photo-container"]}>
                        <img className={styles["article-intro-photo"]} src="/img/info200.png" alt="UW Counseling Center Website Redesign for INFO200" />
                        <figcaption className={styles["picture-caption"]}>Photo of my group's figma project for the UW Counseling Center!</figcaption>
                    </div>
                    <div className={styles["article-content"]}>
                        <h1 className={styles["article-title"]}>INFO 200: Foundations of Informatics</h1>
                        <section>
                            <p>For this class's project, we were challenged to redesign the UW Counseling Website! To learn more, feel free to scroll down to the <a href="#project">project section</a> to learn more. You can also take a peak of our project here: <a href="https://www.figma.com/proto/Avrd5dcAezVn2QTnHtHF2b/The-BIPOC-Wellness-Project?type=design&node-id=7-2&t=GSlMqz6yLUE4mzSZ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2&show-proto-sidebar=1&mode=design" target="_blank">UW Counseling Center Website Redesign</a></p>
                            <p>INFO 200 was my very first course taken at the University of Washington. It was an overview of all the topics the Informatics major covered, and heavily emphasized conceps surrounding people, information and technology. My professor for this class, Joseph Janes, was truly a wonderful person who had so much knowledge and passion for the field of information. Every lecture was truly wonderful, and I will almost remember the passion he had for his students. I highly recommend checking out some of <a href="https://ischool.uw.edu/podcasts/dtctw?offset=12">his podcasts</a>, where he talks about the stories of various documents throughout history. Seriously, you will learn a lot from what he has to say!</p>
                            <p>Okay, back to talking about the class. In this class, we were introduced to a variety of topics: an introduction to the idea of information, user research, how people interact with information, information systems, a bit of design, information behavior, information architecture, and intellectual properties/privacy. This quarter covered several concepts, but I decided to only cover a handful of the units that I was super interested in. On top of all of this, we had a group project, where we conducted user research and solve an information problem that we see in our community. This project was super fun, but I'll talk more about that later. We also had to write a paper about a topic within the field of information that we were passionate about. In addition, we had to think of an everyday "object" people used, and redesign it so that it can help improve more people's lives. Finally, there were a handful of exams that tested our knowledge on the concepts within the field of information.</p>
                        </section>

                        <section>
                            <h2>What is information?</h2>
                            <p>Before taking this class, I had a super broad idea of what information was and, honestly, didn't think much of it. After taking this class, I realized that information is such a core part of our lives. From Professor Janes' lectures, there were a couple of things that I wanted to note that others may find super useful. While it is super common to hear that "information is power", Professor Janes emphasizes that information "wields" power rather than "is". Information is only powerful if we're able to find it, use it, potentially withhold it, and destroy it. We live in a world where information is so easily obtainable, that it can be a bit scary to think about. Information can create small snippets to the past or potentially improve the lives of others. But at the same time, it's a double-edged sword. It can be used to exploit, blackmail, and hurt others that we love the most. This was the first time that I really thought about how it's so important to consider how we have  to be careful when creating new technology and their implications. While creating systems that try to help people, we may be hurting others as well. Is it possible to create systems that eliminates harm? Or should we only try our best to minimize it? This unit really made think about the ethical surrounding the field of information, and how we need to consider the user in order to create systems that will truly help others.</p>
                        </section>

                        <section id="project">
                            <h2>Project</h2>
                            <p>For this class, our class project was to identify an information problem within our community, and think of ways that we can solve it. I joined 4 others for project, and many of us had different ideas of what to do. While talking about the topics that we were interested in, we realized that we were supper interested in students' mental health, especially students of color. As a result, we looked at the UW counseling center's website, and were surprised about the resources that they had to offer for students. However, none of us really knew about these resources beforehand. We realized that we wanted to make a website in order to connect more students to services at the UW counseling center. Our first step in this project was needing to understand the problem from a user perspective. As a result, we set up an interview with two UW students and a counselor from the UW counselor center to answer our questions related to mental health and UW. While we are also students at the UW, we wanted to cover other people's perspectives to make sure that we were covering all four bases. After interviewing our users, we created personas, fictional people, that represented a groups information problem and the things that they needed. A common problem that we saw was that people often didn't know about the resources for UW students. In addition, the counselor noted how they had a service for students of color, but not many people know about it. They also wanted a way to easily talk to students. When starting to create our website, we decided on four primary sections: a student's story page, an online drop-in counseling page, workshops, and a profile page. In the student's story page, it includes other student's experiences with the UW counseling center so that other students feel more confident visiting. We also had a workshops tab, where people can sign up for workshops that the counseling center has to offer. There was also the online drop-in counseling tab, where students can sign-in and talk to counselors even if they never made an appointment. Lastly, there's a profile tab in order for students to remember workshops that they signed up for, or potentially create an appointment with the counseling center. We followed UW's branding by using their colors and their fonts to create our website. We designed our website using Figma. Overall, our group was super happy about how our project turned out. This project really thought us about how we can think of information problems, and solve them.</p>

                            <p>Feel free to take a look at our project: <a href="https://www.figma.com/proto/Avrd5dcAezVn2QTnHtHF2b/The-BIPOC-Wellness-Project?type=design&node-id=7-2&t=GSlMqz6yLUE4mzSZ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2&show-proto-sidebar=1&mode=design" target="_blank">UW Counseling Center Website Redesign</a></p>
                        </section>
                    </div>
                    <div className={styles["return-blog-container"]}>
                        <Link href="/blog"> <button className={styles["return-blogs"]}>Back to Blogs</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}