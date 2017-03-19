﻿const apiPath = "/api/";
const buildApiUrl = (resourcePath) => `${apiPath}${resourcePath}/`;

export const TEAMS = buildApiUrl("Teams");
export const TEAM = buildApiUrl("Team");
export const DIVISION = buildApiUrl("Division");
export const PLAYER = buildApiUrl("Player");
export const PLAYERS = buildApiUrl("Players");
export const MATCH = buildApiUrl("Match");
export const SEASON = buildApiUrl("Season");