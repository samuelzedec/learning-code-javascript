import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json()); 
  // Aqui iremos fazer a requisição da api e fazer com que fique disponivel no front e back
  return {
    prosp: {
      serverSideData
    }
  };
}
/*
 * Qualquer variável de ambiente que precisa ser acessada 
 * no frontend deve começar com o prefixo NEXT_PUBLIC_. 
 * Isso indica ao Next.js que essa variável estará 
 * disponível tanto no servidor quanto no navegador.
 * 
 * Variáveis de ambiente sem o prefixo NEXT_PUBLIC_ só 
 * estão disponíveis no servidor
 */

const Dynamic: NextPage = (props: {
  children?: ReactNode,
  serverSideData?: ApiResponse 
} ) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data : ApiResponse = await fetch("/api/hello").then((res) => res.json());
    setClientSideData(data);
  };

  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <Row>
        <Col>
          <h3>Gerado no servidor:</h3>
          <h2>
            {props?.serverSideData?.timestamp.toString()}
          </h2>
        </Col>

        <Col>
          <h3>Gerado no cliente:</h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Dynamic;
