import { Router } from "express";
import { adaptExpressRoute as adapt } from '../adapters'
import { makeLoadTeacherAllController } from "../factories/application/controllers/load-teacher-all-controller-factory";
import { makeLoadTeacherByIdController } from "../factories/application/controllers";

export default (router: Router): void => {
    router.get('/teachers', adapt(makeLoadTeacherAllController()));
    router.get('/teachers/:id', adapt(makeLoadTeacherByIdController()));
}