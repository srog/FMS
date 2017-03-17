const apiPath = "/api/";
const buildApiUrl = (resourcePath) => `${apiPath}${resourcePath}/`;

export const TEAMS = buildApiUrl("Teams");
export const DIVISION = buildApiUrl("Division");