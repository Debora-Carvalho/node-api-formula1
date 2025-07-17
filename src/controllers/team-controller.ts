import { FastifyReply, FastifyRequest } from "fastify";
import { teamService } from "../services/team-service";
import { StatusCode } from "../utils/status-code";

export async function getAllTeams(req: FastifyRequest, reply: FastifyReply) {
  const teams = teamService.getTeams();
  reply.type("application/json").code(StatusCode.OK).send(teams);
}

export async function getTeamById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  const id = parseInt(req.params.id);
  const team = teamService.getTeamById(id);

  if (!team) {
    reply.type("application/json").code(StatusCode.NOT_FOUND).send({ message: "Team not found." });
  } else {
    reply.type("application/json").code(StatusCode.OK).send({ team });
  }
}
