import prismaClient from "../../prisma";

interface empresaRequest {
	id: string
}

class FindByIDEmpresaService{
	async execute({id}: empresaRequest){


		const FindByIDEmpresa = await prismaClient.empresa.findFirst({
			where: {
				id: id
			},
			include:{
				funcionarios:{
					select:{
						id: true,
						nome: true
					}
				}
			}
		}) 

		return FindByIDEmpresa
	}
}

export { FindByIDEmpresaService }