import { Request, Response } from "express";
import { CloseCampanhaService } from '../../service/campanha/CloseCampanhaService'
import { idValidation } from "../validation/Validation";

class CloseCampanhaController{
	async handle(req: Request, res: Response){
		const id = req.query.id

		await idValidation.validate(req.query);

		const closeCampanhaService = new CloseCampanhaService()

		const closeCampanha = await closeCampanhaService.execute({
			id: String(id)
		})
		
		return res.json('Campanha Finalizada com sucesso!!')
	}
}

export { CloseCampanhaController }