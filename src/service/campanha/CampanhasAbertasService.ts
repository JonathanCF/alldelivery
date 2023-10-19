import prismaClient from "../../prisma";

interface campanhaAbertaRequest {
  id: string;
}

class CampanhasAbertasService {
  async execute({ id }: campanhaAbertaRequest) {
    const campanhaAberta = await prismaClient.campanhas.findMany({
      where: {
        id: id,
      },
      include: {
        empresa: {
          select: {
            id: true,
            nome: true,
            funcionarios: {
              orderBy: {
                nome: "asc",
              },
              where: {
                entregas: {
                  every: {
                    NOT: {
                      campanhaID: id,
                      recebido: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    return campanhaAberta;
  }
}

export { CampanhasAbertasService };
