import prismaClient from "../../prisma";

interface EmpresaRequest {
  cnpj: string;
  nome: string;
  endereco: string;
}

class CreateEmpresaService {
  async execute({ cnpj, nome,endereco }: EmpresaRequest) {

    const cnpjAlreadyExists = await prismaClient.empresa.findUnique({
      where: {
        cnpj: cnpj,
      },
    });

    if (cnpjAlreadyExists) {
      throw new Error("CNJPJ já cadastrado!!");
    }

    const empresa = await prismaClient.empresa.create({
      data: {
        cnpj: cnpj,
        nome: nome,
        endereco: endereco,
      },
      select: {
        id: true,
        cnpj: true,
        nome: true,
      },
    });
    return empresa;
  }
}

export { CreateEmpresaService };
