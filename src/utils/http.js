export const LOCALHOST = 'localhost';
export const COLON = ':';
export const SLASH = '/';
export const HTTPS = 'https' + COLON + SLASH + SLASH;
export const HTTP = 'http'; + COLON + SLASH + SLASH;
export const HTTP_LOCALHOST = HTTP + COLON + SLASH + SLASH + LOCALHOST + COLON;
export const HTTPS_LOCALHOST = HTTPS + COLON + SLASH + SLASH + LOCALHOST + COLON;

export const toHTTPSLocalHost = (port, endpoint) => {
  return HTTPS_LOCALHOST + port + endpoint;
};

export const toHTTPLocalHost = (port, endpoint) => {
  return HTTP_LOCALHOST + port + endpoint;
};

export const toHTTPS = (domain, port, endpoint) => {
  return HTTPS + domain + COLON + port + endpoint;
};