import { Router } from "express";
import { healthCheck } from "./helthCheck.controller";

const routerHealth = Router();

routerHealth.get("/healthcheck", healthCheck);

export default routerHealth;
