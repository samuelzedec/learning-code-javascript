import Image from "next/image";

export default function ViewMacbook({
  imageLink,
  macbookName,
  pol,
  chip,
  description,
  price,
}) {
  return (
    <div className="mt-10 w-[400px]">
      <Image src={imageLink} width={300} height={255} alt="macbook air" className="mx-auto" />

      <p className="text-2xl mt-6 text-center">{macbookName}</p>
      <p className="text-2xl text-center">{pol}</p>
      <p className="text-center mt-2 text-sm font-bold">{chip}</p>

      <p className="w-[320] text-center mx-auto mt-6">{description}</p>
      <p className="mt-5 font-bold text-center">{price}</p>

      <div className="flex gap-10 mt-6 justify-center">
        <button className="rounded-3xl text-white w-[100] h-[40] bg-[#3881ff]">Saiba Mais</button>
        <button className="rounded-3xl text-[#3881ff] border border-[#3881ff] w-[100] h-[40]" >Comprar</button>
      </div>
    </div>
  );
}
