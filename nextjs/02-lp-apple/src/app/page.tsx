import ViewMacbook from "./components/ViewMac";

export default function Home() {
  return (
    <div className="grid place-content-center min-h-screen">
      <div>
        <h1 className="font-bold text-6xl text-center leading-relaxed	">
          Conheça a família Macbook
        </h1>
        <p className="text-2xl font-light text-center">Agora com novos modelos M3</p>
      </div>
      <div className="flex">
        <ViewMacbook
          imageLink="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
          macbookName="Macbook Air"
          pol="de 13 e 15 pol."
          chip="Chip M2 ou M3"
          description="Superfinos e rápidos para trabalhar, jogar ou criar aonde quer que você vá."
          price="A partir de R$916,58/mês ou R$ 10.999*"
        />

        <ViewMacbook
          imageLink="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
          macbookName="Macbook Pro"
          pol="de 14 e 16 pol."
          chip="Chip M3, M3 Pro e M3 Max"
          description="Os notebooks Mac mais avançados para fluxos de trabalho pesados."
          price="A partir de R$1.541,58/mês ou R$ 18.499*"
        />
      </div>
    </div>
  );
}
