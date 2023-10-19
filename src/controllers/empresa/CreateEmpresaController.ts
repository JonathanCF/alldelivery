import { Request, Response } from "express";
import { CreateEmpresaService } from "../../service/empresa/CreateEmpresaService";
import { empresaValidation } from "../validation/Validation";

class CreateEmpresaController {
  async handle(req: Request, res: Response) {
    const { cnpj, nome, endereco } = req.body;
    const createEmpresaService = new CreateEmpresaService();

    await empresaValidation.validate(req.body);
    const empresa = await createEmpresaService.execute({
      cnpj,
      nome,
      endereco,
    });

    return res.json(empresa);
  }
}

export { CreateEmpresaController };
