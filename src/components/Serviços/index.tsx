import React from 'react';
import { ServicosProps } from '../Interfaces/ServicosProps'

const Servicos: React.FC<ServicosProps> = () => {
  return (
    <div className='p-5 mx-auto w-[80vw] bg-[#b1acac]'>
      <h1 className='text-lg md:text-2xl font-bold mb-5 relative overflow-y-hidden'>Lista de serviços</h1>
      <h2 className='text-xl mb-3'>Em empresas</h2>
      <ul className='text-justify list-disc'>
        <li>
          Formulação de produtos para Ruminantes, Equinos, Aqua, Aves & Suínos, Suplementos Minerais e Pet Food
        </li>
        <br></br>
        <li>
          Atualizações dos custos de formulação dos produtos;
        </li>
        <br></br>
        <li>
          Suporte aos departamentos de Garantia da Qualidade e Laboratório;
        </li>
        <br></br>
        <li> Prospecção de mercado para lançamentos de produtos;
        </li>
        <br></br>
        <li>
          Desenvolvimento técnico-comercial-marketing de novos produtos;
        </li>
        <br></br>
        <li>
          Gestão comercial (políticas comerciais, formação de preços, P&L etc.);
        </li>
        <br></br>
        <li>
          Gestão de colaboradores da área comercial (política de remuneração fixa e variável);
        </li>
        <br></br>
        <li>
          Palestras técnicas e mercadológicas, na área de ruminantes;
        </li>
        <br></br>
        <li>
          Palestras motivacionais para as equipes comerciais;
        </li>
        <br></br>
        <li>
          Implantação do programa BPF (junto com empresas parceiras do setor).
        </li>
      </ul>
    </div >
  )
}

export default Servicos;