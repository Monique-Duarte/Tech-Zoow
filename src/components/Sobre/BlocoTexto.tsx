import { ReactNode } from "react";

const BlocoTexto = ({ children }: { children: ReactNode }) => {
  return <p className="text-base p-1 leading-relaxed">{children}</p>;
};

export default BlocoTexto;
