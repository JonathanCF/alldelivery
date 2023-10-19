import { Request, Response } from "express";
import { CreateEntregaService } from '../../service/entregas/CreateEntregasService'
import { entregasValidation } from "../validation/Validation";

class CreateEntregasController{
	async handle(req: Request, res: Response){
		const {data_entrega, quantidade,recebido, funcionariosID, campanhaID} = req.body

		await entregasValidation.validate(req.body)

		const createEntregasService = new CreateEntregaService()

		const entregas = await createEntregasService.execute({
			data_entrega,
			quantidade,
			funcionariosID,
			campanhaID,
			recebido
		})

		return res.json(entregas)
	}
}

export { CreateEntregasController }