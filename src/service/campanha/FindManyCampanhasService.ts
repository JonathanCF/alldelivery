import prismaClient from "../../prisma";

class FindManyCamapanhasService {
  async execute() {
    const findManyCampanhas = await prismaClient.campanhas.findMany({
      where: {
        status: false,
      },
      include: {
        empresa: {
          select: {
            nome: true,
            id: true,
            funcionarios: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
      },
    });
    return findManyCampanhas;
  }
}

export { FindManyCamapanhasService };
