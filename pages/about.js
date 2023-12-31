// import Form from "../components/Form";
import SocialMedia from "../components/SocialMedia";
import styles from "../styles/contact.module.css";
import Head from "next/head";

export default function Contact() {
    return (
        <div>
        <Head>
			<title>About Me</title>
			<meta name="James Nguyen"/>
			<meta name="description" content="Information page about James"/>
            <link rel="icon" type="image/png" href="/img/logo-icon.png"></link>
		</Head>
            <div className={styles["contact-page"]}>
                <div className={styles["contact-container"]}>
                    <img className={styles["about-me-photo"]} src="img/james-2.jpg" alt="james"/>
                    <div className={styles["contact-text"]}>
                        <h1>About Me</h1>
                        <p>I&apos;m an Informatics student with a focus in Human-Computer Interaction and Software Development at the University of Washington iSchool! I am currently the director of outreach for the iSchool&apos;s queer affinity group, iQueeries.</p>
                        
                        <p>I&apos;m currently interested in front-end development and creating web applications that everyone can use. Furthermore, I&apos;m interested in the Human-Computer Interaction side of informatics, specifically learning about how we can make user interfaces and systems user-friendly and efficient.</p>
                        
                        <p>Outside of academics, I enjoy learning languages, playing video games and exploring Seattle!</p>
                        <p>Have any questions or comments? Connect with me on LinkedIn or by email!
                            <br />Email: jam860@uw.edu
                        </p>
                        <SocialMedia />
                    </div>
                    {/* <div className={styles["contact-form"]}>
                        <h2 className={styles["message-form-title"]}>Message Form</h2>
                        <Form />
                    </div> */}
                </div>
            </div>
        </div>
    )
}