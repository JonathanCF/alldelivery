import prismaClient from "../../prisma";

interface findManyRequest{
	empresaID: string
}

class FindManyFuncionariosService {
	async execute({empresaID}: findManyRequest){

		if(!empresaID){
			throw new Error('Informar o req.query.empresaID!!')
		}
		
		const findManyFuncionarios = await prismaClient.funcionarios.findMany({
			where: {
				empresaID: empresaID
			}
		})
			return findManyFuncionarios
	}	
}

export { FindManyFuncionariosService }