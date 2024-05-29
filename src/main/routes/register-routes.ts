import { Router } from "express";
import { adaptExpressRoute as adapt } from '../adapters'
import { makeAddRegisterController } from "../factories/application/controllers";

export default (router: Router): void => {
    router.post('/registers', adapt(makeAddRegisterController()));
}