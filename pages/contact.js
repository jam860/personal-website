import Form from "../components/Form";
import SocialMedia from "../components/SocialMedia";
import styles from '../styles/contact.module.css';

export default function Contact() {
    return (
        <div>
            <div className={styles["contact-page"]}>
                <div className={styles["contact-container"]}>
                    <img className={styles["about-me-photo"]} src="img/james-2.jpg" alt="james"/>
                    <div className={styles["contact-text"]}>
                        <h2>About Me</h2>
                        <p>I'm an Informatics student with a focus in Human-Computer Interaction and Software Development at the University of Washington iSchool! I am currently the director of outreach for the iSchool's queer affinity group, iQueeries.</p>
                        
                        <p>I'm currently interested in front-end development and creating web applications that everyone can use. Furthermore, I'm interested in the Human-Computer Interaction side of informatics, specifically learning about how we can make user interfaces and systems user-friendly and efficient.</p>
                        
                        <p>Outside of academics, I enjoy learning languages, playing video games and exploring Seattle!</p>
                        <p>Have any questions or comments? Connect with me on Linkedin or by email!
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