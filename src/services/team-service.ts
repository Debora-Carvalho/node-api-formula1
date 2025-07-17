import { teamRepository } from "../repositories/team-repository";

export const teamService = {
  getTeams: () => teamRepository.getTeams(),

  getTeamById: (id: number) =>
    teamRepository.getTeams().find(team => team.id === id)
};
