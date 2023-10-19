import { Request, Response } from "express";
import { CampanhasAbertasService } from "../../service/campanha/CampanhasAbertasService";
import { idValidation } from "../validation/Validation";

class CampanhasAbertasController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;

    await idValidation.validate(req.query);

    const campanhaAbertasService = new CampanhasAbertasService();

    const campanhaAberta = await campanhaAbertasService.execute({
      id: String(id),
    });
    return res.json(campanhaAberta);
  }
}

export { CampanhasAbertasController };
