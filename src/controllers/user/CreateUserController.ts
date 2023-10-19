import { Request, Response } from "express";
import { CreateUserService } from '../../service/user/CreateUserService'
import { userValidation } from '../validation/Validation'

class CreateUserController {
	async handle(req: Request, res: Response){
		const {nome, password, email} = req.body

		await userValidation.validate(req.body)	

		const createUserService = new CreateUserService()

		const createUser = await createUserService.execute({
			nome,
			password,
			email
		})

		return res.json(createUser)
	}
}

export { CreateUserController }