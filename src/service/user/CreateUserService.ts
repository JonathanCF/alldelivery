import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface createUserRequest{
	nome: string
	password: string
	email: string
}

class CreateUserService{
	async execute({nome, password, email}: createUserRequest){

		const emailExist = await prismaClient.user.findFirst({
			where:{
				email: email
			}
		})

		if(emailExist){
			throw new Error('Email já cadastrado!!')
		}

		const passwordHash = await hash(password, 8)

		const createUser = await prismaClient.user.create({
			data:{
				nome: nome,
				password: passwordHash,
				email: email
			},
			select:{
				id: true,
				nome: true,
				email: true
			}
		})
		return createUser
	}
}

export { CreateUserService }