import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Layout page="About">
      <main className="contenedor">
        <h2 className="heading">About us</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="About us image"
          />
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              qui, reprehenderit tenetur ullam quisquam saepe! Sit recusandae,
              unde placeat eum vitae delectus doloribus ab non, animi
              dignissimos, deleniti distinctio ullam! Aliquid fugiat amet facere
              ad sequi, dignissimos libero nesciunt dolore, voluptatibus cumque
              corrupti possimus eius sed ullam repellat.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              qui, reprehenderit tenetur ullam quisquam saepe! Sit recusandae,
              unde placeat eum vitae delectus doloribus ab non, animi
              dignissimos, deleniti distinctio ullam! Aliquid fugiat amet facere
              ad sequi, dignissimos libero nesciunt dolore, voluptatibus cumque
              corrupti possimus eius sed ullam repellat.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
