import { Request, Response } from "express";
import { DeleteFuncionariosService } from '../../service/funcionarios/DeleteFuncionariosService'
import { idValidation } from "../validation/Validation";

class DeleteFuncionariosController{
	async handle(req: Request, res: Response){
		const id = req.query.id

		await idValidation.validate(req.query)

		const deleteFuncionariosService = new DeleteFuncionariosService()

		const deleteFuncionario = await deleteFuncionariosService.execute({
			id: String(id)
		})
		return res.json('Funcionario deletado')
	}
}

export { DeleteFuncionariosController }