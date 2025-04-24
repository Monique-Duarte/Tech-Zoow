const servicos = [
  'Formulação de produtos para Ruminantes, Equinos, Aqua, Aves & Suínos, Suplementos Minerais e Pet Food',
  'Atualizações dos custos de formulação dos produtos',
  'Suporte aos departamentos de Garantia da Qualidade e Laboratório',
  'Prospecção de mercado para lançamentos de produtos',
  'Desenvolvimento técnico-comercial-marketing de novos produtos',
  'Gestão comercial (políticas comerciais, formação de preços, P&L etc.)',
  'Gestão de colaboradores da área comercial (política de remuneração fixa e variável)',
  'Palestras técnicas e mercadológicas, na área de ruminantes',
  'Palestras motivacionais para as equipes comerciais',
  'Implantação do programa BPF (junto com empresas parceiras do setor)',
];

const ListaServicos = () => {
  return (
    <div>
      <h2 className="text-2xl text-[#036016] mb-3">em empresas</h2>
      <ul className="list-disc text-justify space-y-4 md:text-xl mb-3">
        {servicos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaServicos;
