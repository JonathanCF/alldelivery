import prismaClient from "../../prisma";

interface campanhaRequest {
  empresaID: string;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
}

class CreateCampanhaService {
  async execute({
    empresaID,
    nome,
    descricao,
    dataInicio,
    dataFim,
  }: campanhaRequest) {
    const campanha = await prismaClient.campanhas.create({
      data: {
        empresaID: empresaID,
        nome: nome,
        descricao: descricao,
        dataInicio: dataInicio,
        dataFim: dataFim,
      },
    });
    return campanha;
  }
}

export { CreateCampanhaService };
