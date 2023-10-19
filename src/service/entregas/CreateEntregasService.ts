import prismaClient from "../../prisma";

interface entregasRequest {
	data_entrega: string,
	quantidade: number,
	funcionariosID: string,
	campanhaID: string
	recebido: string
}

class CreateEntregaService{
	async execute({data_entrega, quantidade,recebido, funcionariosID, campanhaID}: entregasRequest){

		const entregas = await prismaClient.entregas.create({
			data:{
				data_entrega: data_entrega,
				quantidade: quantidade,
				funcionariosID: funcionariosID,
				campanhaID: campanhaID,
				recebido: true
			}
		})
		return entregas
	}
}

export { CreateEntregaService }