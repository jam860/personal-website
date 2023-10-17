
import SocialMedia from '../components/SocialMedia';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],

      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      autoplay: {
        delay: 5800,
        disableOnInteraction: false,
      },
    })
  }, []);

  return (
    <>
    <Head>
				<title>James Nguyen</title>
				<meta name="James Nguyen"/>
				<meta name="description" content="introduction of James"/>
        <link rel="icon" type="image/png" href="/img/logo-icon.png"></link>
		</Head>
    <section>
      <div className={styles.intro}>
        <div className={styles['photo-container']}>
          <img className={styles['personal-photo']} src={"/img/james.jpg"} width="200" height="300" alt="James Nguyen" />
        </div>
        <div className={styles['intro-text-container']}>
          <h1>Hey there!<span className="wave">👋</span></h1>
          <div className={styles['photo-container-mobile']}>
            <img className={styles['personal-photo']} src={"/img/james.jpg"} width="200" height="300" alt="James Nguyen" />
          </div>
          <p>I&apos;m James!</p>
          <p>I&apos;m an Informatics student with a focus in Human-Computer Interaction and Software Development at the University of Washington iSchool!</p>
          <p>Let&apos;s connect!<br/>Email: jam860@uw.edu</p>
          <SocialMedia />
        </div>
      </div>
      </section>

    <section>
      <div className={styles["carousel"]}>
      <h1 className={styles["carousel-title"]}>FEATURED BLOGS</h1>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className={styles["imagecontainer"]}>
              <img className={styles["horizontal"]} src="/img/info340.png" alt="Personal website homepage"/><Link href="/blog/info340"><div className={styles["centered"]}>
                <h1 className="carousel-class">Personal Website</h1>
                <p className={styles["carousel-text"]}>Read about how I created this website using React, HTML/CSS and JavaScript!</p></div></Link>
            </div>
          </div>
          <div className="swiper-slide">
            <div className={styles["imagecontainer"]}>
              <img className={styles["horizontal"]} src="/img/info330.png" alt="Entity Relationship Diagram for INFO330 project"/><Link href="/blog/info330"><div className={styles["centered"]}>
                <h1 className="carousel-class">Theater Database</h1>
                <p className={styles["carousel-text"]}>Read about my journey with SQL, databases and making stored procedueres!</p></div></Link>
            </div>
          </div>
          <div className="swiper-slide">
            <div className={styles["imagecontainer"]}>
              <img className={styles["horizontal"]} src="/img/info200.png" alt="UW Counseling Center Website Redesign for INFO200"/><Link href="/blog/info200"><div className={styles["centered"]}>
                <h1 className="carousel-class">UW Counseling Center Redesign</h1>
                <p className={styles["carousel-text"]}>Read about my process with designing a website for the UW Counseling Center!</p></div></Link>
            </div>
          </div>
          <div className="swiper-slide">
            <div className={styles["imagecontainer"]}>
              <img className={styles["horizontal"]} src="/img/info350.png" alt="a portion of an article about AI"/><Link href="/blog/info350"><div className={styles["centered"]}>
                <h1 className="carousel-class">AI Busted!!</h1>
                <p className={styles["carousel-text"]}>Read about how I helped make a short podcast about the use of AI within the criminal justice system!</p></div></Link>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
      <p className={styles["carousel-subtitle"]}><Link className="links" href="blog">Check out more of my blogs here!</Link></p>
    </div>
    </section>
  </>
  );
}
