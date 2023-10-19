import { Request, Response } from "express";
import { DeleteEmpresaService } from "../../service/empresa/DeleteEmpresaService";
import { idValidation } from "../validation/Validation";

class DeleteEmpresaController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;
    await idValidation.validate(req.query);

    const deleteEmpresaService = new DeleteEmpresaService();

    const deleteEmpresa = await deleteEmpresaService.execute({
      id: String(id),
    });

    return res.json("Empresa excluida com sucesso!");
  }
}

export { DeleteEmpresaController };
