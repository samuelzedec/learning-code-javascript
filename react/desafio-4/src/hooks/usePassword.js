import { useState } from "react";

export function usePassword() {
  const [password, setPassword] = useState("");

  function reload(func) {
    setPassword(() => func());
  }

  return { password, reload };
}
