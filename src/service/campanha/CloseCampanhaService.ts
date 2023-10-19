import prismaClient from "../../prisma";

interface closeRequest {
  id: string;
  
}

class CloseCampanhaService {
  async execute({ id }: closeRequest) {
   const closeCampanha = await prismaClient.campanhas.update({
		where:{
			id: id
		},
		data:{
			status: true
		}
	})
	return closeCampanha
  }
}

export { CloseCampanhaService };
