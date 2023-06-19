export const environment = {
  production: false,
  profile: 'dev',
  version: require('../../package.json').version,
  baseUrl: 'http://localhost:8080/api',
  oAuth2Url: "/oauth2/authorization",
  redirectAuth: "?redirect_uri=http://localhost:4200/login"
};
