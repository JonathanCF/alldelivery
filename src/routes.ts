import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateEmpresaController } from './controllers/empresa/CreateEmpresaController'
import { FindManyController } from './controllers/empresa/FindManyEmpresaController'
import { FindByIDController } from "./controllers/empresa/FindByIDEmpresaController";
import { DeleteEmpresaController } from "./controllers/empresa/DeleteEmpresaController";
import { FindEmpresasCampanhaController } from "./controllers/empresa/FindEmpresasCampanhaController";
import { EditEmpresaController } from "./controllers/empresa/EditEmpresaController";

import { CreateFuncionariosController } from './controllers/funcionarios/CreateFuncionariosController'
import { FindManyFuncionariosController } from "./controllers/funcionarios/FindManyFuncionariosController";
import { FindByIDFuncionariosController } from "./controllers/funcionarios/FindByIDFuncionariosController";
import { DeleteFuncionariosController } from "./controllers/funcionarios/DeleteFuncionariosController";

import { CreateCampanhaController } from './controllers/campanha/CreateCampanhaController'
import { CloseCampanhaController } from "./controllers/campanha/CloseCampanhaController";
import { CampanhasAbertasController } from "./controllers/campanha/CampanhasAbertasController";
import { FindManyCampanhaController } from "./controllers/campanha/FindManyCampanhasController";

import { CreateEntregasController } from './controllers/entregas/CreateEntregasController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router()

// -- ROTAS USER --
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS EMPRESA --
router.post('/empresa',isAuthenticated, new CreateEmpresaController().handle)
router.get('/empresas',isAuthenticated, new FindManyController().handle)
router.get('/empresa',isAuthenticated, new FindByIDController().handle)
router.delete('/deletar/empresa',isAuthenticated, new DeleteEmpresaController().handle)
router.get('/empresa/campanha',isAuthenticated, new FindEmpresasCampanhaController().handle)
router.put('/edit/empresa',isAuthenticated, new EditEmpresaController().handle)

// -- ROTAS FUNCIONARIOS --
router.post('/funcionarios',isAuthenticated, new CreateFuncionariosController().handle)
router.get('/funcionarios/empresa',isAuthenticated, new FindManyFuncionariosController().handle)
router.get('/funcionarios',isAuthenticated, new FindByIDFuncionariosController().handle)
router.delete('/delete/funcionario',isAuthenticated, new DeleteFuncionariosController().handle)

// -- ROTAS CAMPANHA --
router.post('/campanhas',isAuthenticated, new CreateCampanhaController().handle)
router.put('/closecampanha',isAuthenticated, new CloseCampanhaController().handle)
router.get('/campanhas/abertas',isAuthenticated, new CampanhasAbertasController().handle)
router.get('/campanhas/all', isAuthenticated, new FindManyCampanhaController().handle)

// -- ROTAS ENTREGAS --
router.post('/entrega',isAuthenticated, new CreateEntregasController().handle)

export { router }


