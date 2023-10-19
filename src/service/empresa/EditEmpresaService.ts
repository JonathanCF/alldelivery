import prismaClient from '../../prisma'

interface editRequest {
	id: string
	cnpj: string
	nome: string
	endereco: string
}

class EditEmpresaService{
	async execute({id, cnpj, nome, endereco}: editRequest){

		const editEmpresa = await prismaClient.empresa.update({
			where: {
				id: id
			},
			data:{
				cnpj: cnpj,
				nome: nome,
				endereco: endereco
			}
		})

		return editEmpresa
	}
}

export { EditEmpresaService }