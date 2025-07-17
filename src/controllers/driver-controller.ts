import { FastifyReply, FastifyRequest } from "fastify";
import { driverService } from "../services/driver-service";
import { StatusCode } from "../utils/status-code";
import { DriverParams } from "../models/driver-params-model";

export async function getAllDrivers(req: FastifyRequest, reply: FastifyReply) {
    const drivers = driverService.getDrivers();
    reply.type("application/json").code(StatusCode.OK).send(drivers);
}

export async function getDriverById(req: FastifyRequest<{ Params: DriverParams }>, reply: FastifyReply) {
    const id = parseInt(req.params.id);
    const driver = driverService.getDriverById(id);

    if (!driver) {
        reply.type("application/json").code(StatusCode.NOT_FOUND).send({ message: "Driver not found." });
    } else {
        reply.type("application/json").code(StatusCode.OK).send({ driver });
    }
}
