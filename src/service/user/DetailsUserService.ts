import prismaClient from "../../prisma";

class DetailsUserService {
	async execute(user_id: string){

		const user = await prismaClient.user.findFirst({
			where:{
				id: user_id
			},
			select:{
				id: true,
				nome: true,
				email: true
			}
		})

		return user
	}
}

export { DetailsUserService }