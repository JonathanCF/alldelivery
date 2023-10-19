import { Request, Response } from "express";
import { CreateCampanhaService } from '../../service/campanha/CreateCampanhaService'
import { campanhaValidation } from "../validation/Validation";

class CreateCampanhaController{
	async handle(req: Request, res: Response){
		const {empresaID, nome, descricao, dataInicio, dataFim} = req.body

		await campanhaValidation.validate(req.body)

		const createCampanhaService = new CreateCampanhaService()

		const campanha = await createCampanhaService.execute({
			empresaID,
			nome,
			descricao,
			dataInicio,
			dataFim
		})
		return res.json(campanha)
	}
}

export { CreateCampanhaController }