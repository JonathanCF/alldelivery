import { Request, Response } from "express";
import { FindManyEmpresaService } from '../../service/empresa/FindManyEmpresaService'

class FindManyController{
	async handle(req: Request, res: Response){

		const findManyEmpresaService = new FindManyEmpresaService()

		const findManyEmpresa = await findManyEmpresaService.execute()

		return res.json(findManyEmpresa)
	}
}

export { FindManyController }