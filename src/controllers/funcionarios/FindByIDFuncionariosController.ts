import { Request, Response } from "express";
import { FindByIDFuncionariosService } from "../../service/funcionarios/FindByIDFuncionariosService";
import { idValidation } from "../validation/Validation";

class FindByIDFuncionariosController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    await idValidation.validate(req.query)

    const findByIDFuncionariosService = new FindByIDFuncionariosService();

    const findByIDFuncionarios = await findByIDFuncionariosService.execute({
      id: String(id),
    });
    return res.json(findByIDFuncionarios);
  }
}

export { FindByIDFuncionariosController };
