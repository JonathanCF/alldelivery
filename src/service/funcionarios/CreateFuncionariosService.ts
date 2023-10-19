import prismaClient from "../../prisma";

interface FuncionariosRequest{
	cpf: string,
	nome: string,
	matricula: string,
	cracha: string
	empresaID: string
}

class CreateFuncionariosService{
	async execute({cpf, nome, matricula, cracha, empresaID}: FuncionariosRequest){

		if(!cpf || !nome || !empresaID){
			throw new Error('Preencha todos os campos obrigatórios!!')
		}

		if(nome.length < 2){
			throw new Error('nome inválido!!')
		}

		const cpfExist = await prismaClient.funcionarios.findUnique({
			where:{
				cpf : cpf
			}
		})

		if(cpfExist){
			throw new Error('CPF já cadastrado')
		}

		if(cpf.length > 11 || cpf.length < 11){
			throw new Error('CPF inválido!!')
		}

		const funcionarios = await prismaClient.funcionarios.create({
			data:{
				empresaID: empresaID,
				cpf: cpf,
				nome: nome,
				matricula: matricula,
				cracha: cracha
			}
		})
		return funcionarios
	}
}

export { CreateFuncionariosService }