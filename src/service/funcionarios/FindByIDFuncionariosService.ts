import prismaClient from "../../prisma";

interface funcionarioRequest {
  id: string;
}

class FindByIDFuncionariosService {
  async execute({ id }: funcionarioRequest) {
    if (!id) {
      throw new Error("Informar o req.query.id!!");
    }

    const findByIDFuncionarios = await prismaClient.funcionarios.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        matricula: true,
        cracha: true,
        entregas: {
          where: {
            funcionariosID: id,
          },
          select: {
            campanhas: {
              select: {
                id: true,
                nome: true,
                descricao: true
              },
            },
            quantidade: true,
            data_entrega: true,
          },
        },
      },
    });
    return findByIDFuncionarios;
  }
}

export { FindByIDFuncionariosService };
