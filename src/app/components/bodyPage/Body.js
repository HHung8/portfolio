"use client";
import f8 from "@/app/assets/f8.jpg";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/bodyPage/body.module.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.bodyLeft}>
        <Image
          src={f8}
          alt="Picture of the author"
          style={{ width: "293px", height: "293px" }}
        />
        <h2>My skills</h2>
        <p>
          <b>Web developer:</b> REST API, React.js, Next.js, Redux, Context,
          CSS3, HTML5, UI/UX, Figma, Photoshop...
        </p>
        <hr />
        <p>
          <b>Other skills:</b> Relatively good research and search skills.
          Working thinking, good teamwork skills compared to age.
        </p>
        <h2>Histories</h2>
        <p>2016: One of junior high school</p>
        <hr />
        <p>2017-2019: Other Junior high school</p>
        <hr />
        <p>2019-2021: Other high school</p>
        <hr />
        <p> 2022-2023: College studies </p>
        <hr />
      </div>
      <div className={styles.bodyRight}>
        <h2 className={styles.title}>Social contact</h2>
        <p>
          Zalo:
          <Link href="https://zalo.me" target="_blank" className={styles.text}>
            https://zalo.me
          </Link>
        </p>
        <p>
          Email:
          <Link
            href="contact@fullstack.edu.vn"
            target="_blank"
            className={styles.text}
          >
            contact@fullstack.edu.vn
          </Link>
        </p>
        <p>
          Facebook:
          <Link
            href="https://www.facebook.com/groups/f8official"
            target="_blank"
            className={styles.text}
          >
            https://www.facebook.com/groups/f8official
          </Link>
        </p>
        <p>
          Youtube:
          <Link
            href="https://www.youtube.com/c/F8VNOfficial"
            target="_blank"
            className={styles.text}
          >
            https://www.youtube.com/c/F8VNOfficial
          </Link>
        </p>
        <hr />
        <div className={styles.backGround}>
          <h2 className={styles.title}>Self project</h2>
          <h3>Project Code snippet</h3>
          <p>A small project completed within a day</p>
          <p>
            A simple website that allows you to create and share code snippets.
            Using HTML, CSS, JS and custom elements.
          </p>
          <div className={styles.demoCode}>
            <p>
              <Link
                href="https://codefast.vercel.app/"
                target="_blank"
                className={styles.text}
                style={{ marginRight: "10px" }}
              >
                Demo
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/duongnguyenf8/demo_custom-element"
                target="_blank"
                className={styles.text}
              >
                Code
              </Link>
            </p>
          </div>

          <hr />
          <h3>Project blog</h3>
          <p>A bigger project done in three days</p>
          <p>
            A personal blog website with posts about programming and learning.
            Using React.js.
          </p>
          <div className={styles.demoCode}>
            <p>
              <Link
                href="https://code-exercise-blog.vercel.app/"
                target="_blank"
                className={styles.text}
                style={{ marginRight: "10px" }}
              >
                Demo
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/duongnguyenf8/code_exercise-blog"
                target="_blank"
                className={styles.text}
              >
                Code
              </Link>
            </p>
          </div>
          <hr />
          <h3>Project 20f8</h3>
          <p>A fun project made in a day</p>
          <p>
            A puzzle game based on the 2048 game. Using Next.js and Tailwind
            CSS.
          </p>
          <div className={styles.demoCode}>
            <p>
              <Link
                href="http://f8-2048.sanphamkythuat.online:880/"
                target="_blank"
                className={styles.text}
                style={{ marginRight: "10px" }}
              >
                Demo
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/duongnguyenf8/20f8"
                target="_blank"
                className={styles.text}
              >
                Code
              </Link>
            </p>
          </div>

          <hr />
        </div>
        <h2 className={styles.title}>My hobbies</h2>
        <ul>
          <li>
            Enjoy Relaxing Music, Rap Music From Đen Vâu And Other Artists,…
          </li>
          <li>
            Read Books, Learn More About New Programming Languages. Currently, I
            Am Self-Studying Python
          </li>
          <li>
            Follow The Technology Trends, News About Famous Products Like
            Iphone, Huawei, GoogleAI,…
          </li>
        </ul>
        <p
          className={styles.text}
          style={{ display: "flex", justifyContent: "center" }}
        >
          © 2023 The Example Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Body;
