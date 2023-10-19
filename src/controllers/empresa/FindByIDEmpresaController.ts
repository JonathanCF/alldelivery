import { Request, Response } from "express";
import { FindByIDEmpresaService } from "../../service/empresa/FindByIDEmpresaService";
import { idValidation } from "../validation/Validation";

class FindByIDController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;
    await idValidation.validate(req.query);

    const findByIDEmpresaService = new FindByIDEmpresaService();

    const FindByIDEmpresa = await findByIDEmpresaService.execute({
      id: String(id),
    });
    return res.json(FindByIDEmpresa);
  }
}

export { FindByIDController };
