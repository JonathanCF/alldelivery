import prismaClient from "../../prisma";

interface funcionarioRequest{
	id: string
}

class DeleteFuncionariosService{
	async execute({id}: funcionarioRequest){

		if(!id){
			throw new Error('Informar o req.query.id!!')
		}

		const deleteFuncioanrio = prismaClient.funcionarios.delete({
			where: {
				id: id
			}
		})	
		return deleteFuncioanrio
	}
}

export { DeleteFuncionariosService }