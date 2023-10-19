import prismaClient from "../../prisma";

class FindManyEmpresaService{
	async execute(){

		const findManyEmpresa = await prismaClient.empresa.findMany({
			orderBy:{
				nome: 'asc'
			},
			select:{
				id: true,
				cnpj: true,
				nome: true,
				endereco: true,
			_count:{
				select:{
					funcionarios: true
				}
			}
			},
		})

		return findManyEmpresa
	}
}

export { FindManyEmpresaService }