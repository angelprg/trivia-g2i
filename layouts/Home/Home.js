import React from "react";
import Link from "next/link";

import { Button, Heading, Logo } from "components";
import { StyledBackground } from "layouts";

import styles from "./Home.module.sass";
import HomeIllustration from "assets/img/questioning.svg";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Logo />
      <Heading>Welcome to the Trivia Challenge!</Heading>
      <div className={styles.instructions_text}>
        You will be presented with 10 True or False questions.
      </div>
      <img
        className={styles.illustration}
        src={HomeIllustration}
        alt="Trivia Home Image"
      />
      <StyledBackground roundedUp>
        <div className={styles.challenge_text}>Can you score 100%?</div>
        <Button primary>
          <Link href="/quiz">Begin</Link>
        </Button>
      </StyledBackground>
    </div>
  );
};

export default Home;
