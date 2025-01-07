import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import { useState } from "react";

export default function Profile(props) {
  //Estrutura do state: [valor, função], usamos o useState() para deixar a variavel reativa no html  
  const [followText, setFollowText] = useState("Follow");
  //A Sintaxe de desestruturação no useReact() é mais utilizada, e na parte da função sempre use o set e o msm nome da variável

  function handleClick() {
    if (followText == "Follow") {
      setFollowText("Following");
      return;
    }
    setFollowText("Follow");
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: {props.name}</span>
        <button onClick={handleClick} className={styles.followButton}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}
