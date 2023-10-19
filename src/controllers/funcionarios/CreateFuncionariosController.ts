import { Request, Response } from "express";
import { CreateFuncionariosService } from '../../service/funcionarios/CreateFuncionariosService'
import { funcionariosValidation } from "../validation/Validation";

class CreateFuncionariosController{
	async handle(req: Request, res: Response){
		const {cpf, nome, matricula, cracha, empresaID} = req.body

		await funcionariosValidation.validate(req.body)

		const createFuncionariosService = new CreateFuncionariosService()

		const funcionarios = await createFuncionariosService.execute({
			cpf,
			nome,
			matricula,
			cracha,
			empresaID
		})
		return res.json(funcionarios)
	}
}

export { CreateFuncionariosController }