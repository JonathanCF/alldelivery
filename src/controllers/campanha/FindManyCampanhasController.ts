import { Request, Response } from "express";
import { FindManyCamapanhasService } from "../../service/campanha/FindManyCampanhasService";

class FindManyCampanhaController {
  async handle(req: Request, res: Response) {
    const findManyCampanhasService = new FindManyCamapanhasService();

    const findManyCampanhas = await findManyCampanhasService.execute();

    return res.json(findManyCampanhas);
  }
}

export { FindManyCampanhaController };
