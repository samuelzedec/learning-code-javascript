import { Card } from "../components/Card";
import { Container } from "../components/Container";

function DisplayMessage({ messageArr }) {
  return (
    <Container>
      {messageArr.length > 0 ? (
        <Card>
          {messageArr.map((value) => (
            <p className="text-white" key={value.email}>
              <strong className="text-blue-400">Email:</strong> {value.email} <br />
              <strong className="text-blue-400">Data e hora:</strong> {value.date.toString()} <br />
              <strong className="text-blue-400">Mensagem:</strong> {value.message} <br />
            </p>
          ))}
        </Card>
      ) : (
        <h2 className="text-white text-center text-3xl font-medium my-5">
          Não há mensagem ainda! 
        </h2>      )}
    </Container>
  );
}

export { DisplayMessage };
