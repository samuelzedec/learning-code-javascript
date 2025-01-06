import module from "./App.module.css";
import { Presentation } from "./Presentation";
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
        <Presentation />
        <BuyButton />
      </div>
    </div>
  );
}

export default App
