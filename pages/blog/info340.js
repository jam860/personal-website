import Link from "next/link"
import styles from "/styles/article.module.css";

export default function Info340() {
    return (
        <div className={styles["article-page"]}>
            <div className={styles["article-content-container"]}>
                <div className={styles["content"]}>
                    <div className={styles["article-intro-photo-container"]}>
                        <img className={styles["article-intro-photo"]} src="/img/info340.png" alt="logo" />
                        <figcaption className={styles["picture-caption"]}>Photo of my logo!
                        </figcaption>
                    </div>
                    <div className={styles["article-content"]}>
                        <h1 className={styles["article-title"]}>Personal Website</h1>
                        <section>
                            <p>Before making this website, I took a class called INFO 340, a web development class that inspired me to make this website. Since this was my first web development class, I was worried at first since I was a pretty slow coder. However, my professor, Joel Ross, made the content super approachable and made me absolutely love the experience. This class consisted of several problem sets along with a big group project at the end. It definitely was not the easiest class I had taken at UW, but I am super glad that I was able to take this class! However, in this article, I&apos;m going to emphasize more on my website process and the skills that I took from INFO 340 to create this website. This will probably be a smaller blog since there&apos;s not much to mention besides the layout and how I implemented some of the sections of the website! In addition, this website is still a work in progress.</p>
                        </section>

                        <section>
                            <h2>Website Goals</h2>
                            <p>Before starting to code, I needed to think of what I wanted for this website. I wanted to incorporate a blogging section where I journal about the classes I&apos;ve taken, projects that I&apos;ve done, and other extracurricular activities that I did outside of academics. I wasn&apos;t quite sure if I wanted to separate projects and blogs, but I decided that it would probably be easier for people to find articles by having everything under the blog section! Plus, I&apos;m thinking of adding a search feature so that it&apos;s easier to go through the articles as well.</p>
                            <p>Since I was still relatively new to HTML/CSS, JavaScript and React, I knew that I didn&apos;t want to make a super complex website, but I thought of ways to make it a somewhat challenging project. I used a React framework called next.js which is super helpful with routing websites and have server-side rendering to make everything super fast. In terms of styling, I wanted a palette that was welcoming and easy on the eyes. Blue has always been one of my favorite colors, so I decided to surround my palette around a muted blue color.</p>
                        </section>

                        <section>
                            <h2>The Process</h2>
                            <p>Starting with the navigation bar, I wanted to keep it super simple. I had my logo which redirects to the homepage, along with two other links that point the user to either the blog page or the contact me page. For the start of my homepage, I had a picture of myself and a little introduction. Below that, I had a couple of images that others could click on to get in contact with me. Below the introduction, I had another section that has a carousel with featured blogs. I used a new library called Swiper.js, which I hadn&apos;t used before, but it was interesting to see how it worked. Lastly, for all pages, I wanted to add a footer with ways to contact me. I once again included a links that users could use to get in touch with me. In order to make these sections, I heavily relied on using flexboxes in order to align everything correctly. </p>
                            <p>As for the about me page, I expanded more on myself from the homepage. It mostly gives more information about activities that I partake in within the iSchool, and other activities I like to do outside of school.</p>
                            <p>The blog page consists of written articles that I&apos;ve made about my classes, projects, and some of the non-academic things. I also made a lot of components using React such as “article cards” and the actual “article preview” which lists those article cards. Each card basically led to a blog about the topic that I was writing about. Each article card contains the title, a small description of the article and a small image on the right. I used a flexbox to center everything so that it was easy to look through the articles.</p>
                            <p>As for the articles themselves, I included a picture on the top of each article along with the title of the article and its content. I centered everything and included subheadings for each of my articles to make it easier for people to read! Again, I used a flexbox to center everything and make it the <em>center</em> of attention.</p>
                        </section>

                        <section>
                            <h2>Reflection</h2>
                            <p>I had a ton of fun making this website! It really helped to practice a lot of the skills that are fundamental to web development, and I thoroughly enjoyed making the components to make this website feel more alive. There are a lot of parts of the website that I could improve on, but I think this is a really good starting point. Some ideas that I had in mind include adding a search bar so that it&apos;s easy to search for the articles that I had written. My homepage and other sections of the website are simple, but I wanted to add more smaller details to give it a bit more spice. I hope I can continually improve on this website throughout the rest of my college years, and perhaps enlighten future students about classes/projects that are at the iSchool. Thanks for reading!</p>
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