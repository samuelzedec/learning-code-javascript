import { Profile } from "./components/Profile";
import avatarImage from "./assets/react.png";
import style from "./app.module.css";

function App() {
  return (
    <div
      className={style.App}
    >
      <Profile
        avatar={avatarImage}
        name="React Avatar"
        bio="Aprendendo react em uma semana para o trabalho"
        email="aprendendoreact@next.com"
        phone="(92) 99239-9090"
        githubUrl="https://github.com/"
        linkedinUrl="https://www.linkedin.com/feed/"
        twitterUrl="https://x.com/?lang=en&mx=2"
      />  
    </div>
  );
}

export default App;
