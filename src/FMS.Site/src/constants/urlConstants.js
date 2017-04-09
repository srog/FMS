const apiPath = "/api/";
const buildApiUrl = (resourcePath) => `${apiPath}${resourcePath}/`;

export const TEAMS_API = buildApiUrl("Teams");
export const TEAM_API = buildApiUrl("Team");
export const SELECTTEAM_API = buildApiUrl("SelectTeam");
export const DIVISION_API = buildApiUrl("Division");
export const PLAYER_API = buildApiUrl("Player");
export const PLAYERS_API = buildApiUrl("Players");
export const MATCH_API = buildApiUrl("Match");
export const MATCHES_API = buildApiUrl("Matches");
export const TEAMMATCHES_API = buildApiUrl("TeamMatches");
export const MATCHEVENTS_API = buildApiUrl("MatchEvents");
export const RESULTS_API = buildApiUrl("Results");
export const SEASON_API = buildApiUrl("Season");
export const ENDSEASON_API = buildApiUrl("EndSeason");
export const NEWS_API = buildApiUrl("News");

export const INDEX = () => "/";
export const TEAMS = () => "/teams";
export const SELECTTEAM = () => "/selectTeam";
export const PLAYERS = () => "/players";
export const FIXTURES = () => "/matches";
export const SEASON = () => "/season";
export const ENDSEASON = () => "/endSeason";

export const TEAM = (params) => `/team/${params.id}`;
export const DIVISION = (params) => `/division/${params.id}`;
export const MATCH = (params) => `/match/${params.id}`;
export const PLAYER = (params) => `/player/${params.id}`;
export const SQUAD = (params) => `/squad/${params.id}`;
export const TEAMMATCHES = (params) => `/teamMatches/${params.id}`;
export const MATCHES = (params) => `/matches/${params.id}`;
export const RESULTS = (params) => `/results/${params.id}`;

