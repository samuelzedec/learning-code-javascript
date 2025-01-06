import style from "./style.module.css";
import { Container } from "../Container";
import { Button } from "../Button";

export const Profile = ({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) => {
  return (
    <div
      className={style.Main}
    >
			<img
				className={style.Image}
				src={avatar}
				alt={name}
			/>
			<h1>{ name }</h1>
      <Container>
        {bio}
      </Container>
      
      <Container>
        {phone}
      </Container>
      
      <Container>
        {email}
      </Container>
      <div
        className={style.DivButtons}
      >
        <Button value="Github" link={githubUrl} />
        <Button value="LinkedIn" link={linkedinUrl} />
        <Button value="Twitter" link={twitterUrl} />
      </div>
    </div>
  );
};