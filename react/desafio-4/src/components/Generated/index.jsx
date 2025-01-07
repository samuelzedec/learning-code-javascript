import { useState } from "react";
import { usePassword } from "../../hooks/usePassword";
import { generatedPassword } from "./generatedPassword";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.css";

export function Generated() {
  const { password, reload } = usePassword();
  const [copy, setCopy] = useState("Copiar!");
  const [passwordSize, setPasswordSize] = useState(12);

  function reloadButton() {
    navigator.clipboard.writeText(password);
    setCopy("Copiado !");
  }

  function resetButton() {
    setCopy("Copiar !");
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gerador de Senhas</h1>

      <div className={styles.container}>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      </div>

      <div className={styles.container}>
        <Button
          styles={styles.button}
          colorBorder="1px solid #58ff5b"
          func={() => {
            resetButton();
            reload(() => generatedPassword(passwordSize));
          }}
        >
          {"Gerar Senha!"}
        </Button>

        <Button
          styles={styles.button}
          colorBorder="1px solid #ff2a2a"
          func={reloadButton}
        >
          {copy}
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          color: "white",
          fontSize: "2em",
        }}
      >
        {password}
      </div>
    </>
  );
}
