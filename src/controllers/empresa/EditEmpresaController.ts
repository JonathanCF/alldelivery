import { Request, Response } from "express";
import { EditEmpresaService } from '../../service/empresa/EditEmpresaService'
import { idValidation, empresaValidation } from '../validation/Validation'

class EditEmpresaController{
	async handle(req: Request, res: Response){
		const id = req.query.id
		
		const {nome, cnpj, endereco} = req.body 

		await idValidation.validate(req.query)
		await empresaValidation.validate(req.body)

		const editEmpresaService = new EditEmpresaService()

		const editEmpresa = await editEmpresaService.execute({
			id: String(id),
			cnpj: cnpj,
			nome: nome,
			endereco: endereco
		})
		return res.json(editEmpresa)
	}
}

export { EditEmpresaController }
