interface TituloSecaoProps {
  titulo: string;
}

const TituloSecaoServicos = ({ titulo }: TituloSecaoProps) => {
  return (
    <h1 className="text-lg md:text-2xl font-bold mb-2 relative overflow-y-hidden text-[#036016]">
      {titulo}
    </h1>
  );
};

export default TituloSecaoServicos;
