import { Request, Response } from "express";
import { FindManyFuncionariosService } from "../../service/funcionarios/FindManyFuncionariosService";
import { idValidation } from "../validation/Validation";

class FindManyFuncionariosController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    await idValidation.validate(req.query);

    const findManyFuncionariosService = new FindManyFuncionariosService();

    const findManyFuncionarios = await findManyFuncionariosService.execute({
      empresaID: String(id),
    });

    return res.json(findManyFuncionarios);
  }
}

export { FindManyFuncionariosController };
