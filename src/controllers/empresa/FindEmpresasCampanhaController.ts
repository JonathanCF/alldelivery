import { Request, Response } from "express";
import { FindEmpresasCampanhaService } from "../../service/empresa/FindEmpresasCampanhaService";
import { idValidation } from "../validation/Validation";

class FindEmpresasCampanhaController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    await idValidation.validate(req.query);

    const findEmpresaCampanhaService = new FindEmpresasCampanhaService();

    const campanhasEmpresa = await findEmpresaCampanhaService.execute({
      id: String(id),
    });

    return res.json(campanhasEmpresa);
  }
}

export { FindEmpresasCampanhaController };
