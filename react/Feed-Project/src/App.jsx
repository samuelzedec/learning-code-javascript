import { useState } from "react";
import { SendingMessages } from "./views/SendingMessages";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageArr, setMessageArr] = useState([]);

  return (
    <div className="flex bg-[#222222] min-h-screen justify-center gap-5 items-center">
      <SendingMessages
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        setMessagearr={setMessageArr}
      />
    </div>
  );
}

export default App;
