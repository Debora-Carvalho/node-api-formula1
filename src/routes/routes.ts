import { FastifyInstance } from "fastify";
import { getAllDrivers, getDriverById } from "../controllers/driver-controller";
import { getAllTeams, getTeamById } from "../controllers/team-controller";

export const Routes = {
    TEAMS: "/teams",
    TEAMS_BY_ID: "/teams/:id",
    DRIVERS: "/drivers",
    DRIVERS_BY_ID: "/drivers/:id"
};

export function registerRoutes(server: FastifyInstance) {
    server.get(Routes.TEAMS, getAllTeams);
    server.get(Routes.TEAMS_BY_ID, getTeamById);
    server.get(Routes.DRIVERS, getAllDrivers);
    server.get(Routes.DRIVERS_BY_ID, getDriverById);
}
