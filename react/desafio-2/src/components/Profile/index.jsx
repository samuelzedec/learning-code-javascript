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
      <Container value={bio} />
      <Container value={phone} />
      <Container value={email} />

      <div
        className={style.DivButtons}
      >
        <Button value="Github" link="https://github.com/" />
        <Button value="LinkedIn" link="https://www.linkedin.com/feed/" />
        <Button value="Twitter" link="https://x.com/?lang=en&mx=2" />
      </div>
    </div>
  );
};