import module from "./App.module.css";
import { Title } from "./Title";
import { Text } from "./Text";
import { BuyButton } from "./BuyButton"
import { Image } from "./Image";

function App() {
  return (
    <div
      className={`${module.App} ${module.AppFlex}`}
    >
      <div>
        <Image />
      </div>

      <div
        style={{
          height: "400px",
          padding: "0px",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column"
        }}
      >
        <Title />
        <Text />
        <BuyButton />
      </div>
    </div>
  );
}

export default App
