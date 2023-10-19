import prismaClient from "../../prisma";

interface campanhasEmpresaRequest {
  id: string;
}

class FindEmpresasCampanhaService {
  async execute({ id }: campanhasEmpresaRequest) {
    const campanhasEmpresa = await prismaClient.empresa.findFirst({
      where: {
        id: id,
        campanha:{
          every:{
            status: false,
          },
        },
      },
      include:{
        campanha:{}
      }
   
    });
    return campanhasEmpresa;
  }
}

export { FindEmpresasCampanhaService };
