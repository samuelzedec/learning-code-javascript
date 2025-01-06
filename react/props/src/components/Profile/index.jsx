import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"
import LinkButton from "../LinkButton"

export default function Profile(props) {
  let fallowButton = "Fallow";

  function handleClick(ev) {
    if (fallowButton == "Fallow") {
      alert("Agora você está seguindo");
      fallowButton = "Unfallow";
      return;
    }

    alert("Agora você parou de seguir");
    fallowButton = "Fallow";
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: </span>
        {props.name}
        <button
          className={styles.followButton}
          onClick={handleClick}
        >
          {fallowButton}
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
  )
}