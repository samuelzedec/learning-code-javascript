import { Container } from "../components/Container";
import { TextInput } from "../components/TextInput";
import { TextareaInput } from "../components/TextareaInput";
import { Card } from "../components/Card";

function SendingMessages({
  email,
  setEmail,
  message,
  setMessage,
  setMessageArr,
}) {
  const handleShipping = (ev) => {
    ev.preventDefault();
    console.log({ email, message, date: new Date() });
    setMessageArr((state) =>
      [...state, { email, message, date: new Date() }].sort(
        (a, b) => b.date - a.date
      )
    );
  };

  return (
    <Container>
      <form onSubmit={handleShipping}>
        <h2 className="text-white text-center text-3xl font-medium my-5">
          Envie sua mensagem
        </h2>
        <Card>
          <TextInput
            additionalInfo={{
              title: "Informe seu e-mail: ",
              name: "email",
            }}
            setValues={{
              state: email,
              setState: setEmail,
            }}
          />
        </Card>
        <Card>
          <TextareaInput
            additionalInfo={{
              title: "Digite sua mensagem: ",
              name: "message",
            }}
            setValues={{
              state: message,
              setState: setMessage,
            }}
          />
        </Card>
        <Card>
          <button
            className="h-[40px] w-[100px] p-5 rounded-xl border flex justify-center items-center text-white border-[#8ccfff]"
            type="submit"
          >
            Enviar
          </button>
        </Card>
      </form>
    </Container>
  );
}
export { SendingMessages };
