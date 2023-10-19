import prismaClient from "../../prisma";

interface deleteEmpresaRequest {
	id: string
}

class DeleteEmpresaService{
	async execute({id}: deleteEmpresaRequest){

		const deleteEmpresa = await prismaClient.empresa.delete({
			where:{
				id: id
			}
		})
		return deleteEmpresa
	}
}

export { DeleteEmpresaService }