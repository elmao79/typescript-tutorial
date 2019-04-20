"use strict";
exports.__esModule = true;
var HTTP_PROTOCOL;
(function (HTTP_PROTOCOL) {
    HTTP_PROTOCOL["HTTP"] = "http";
    HTTP_PROTOCOL["HTTPS"] = "https";
})(HTTP_PROTOCOL || (HTTP_PROTOCOL = {}));
var HTTP_PORT;
(function (HTTP_PORT) {
    HTTP_PORT[HTTP_PORT["HTTP"] = 80] = "HTTP";
    HTTP_PORT[HTTP_PORT["HTTPS"] = 443] = "HTTPS";
})(HTTP_PORT || (HTTP_PORT = {}));
var logUrl = function (uri) {
    return console.log(uri.protocol + "://" + uri.hostname + (uri.port === 80 ? '' : ':' + uri.port) + uri.pathname);
};
logUrl({ protocol: HTTP_PROTOCOL.HTTP, port: HTTP_PORT.HTTP, hostname: 'www.omartin.es', pathname: '/typescript' });
logUrl({ protocol: HTTP_PROTOCOL.HTTPS, port: HTTP_PORT.HTTPS, hostname: 'www.omartin.es', pathname: '/typescript' });
