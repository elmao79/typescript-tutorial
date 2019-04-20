enum HTTP_PROTOCOL {
    HTTP = 'http',
    HTTPS = 'https',
}

enum HTTP_PORT {
    HTTP = 80,
    HTTPS = 443,
}

interface URI {
    protocol: HTTP_PROTOCOL;
    port: HTTP_PORT;
    hostname: string;
    pathname: string;
}

interface HttpUri extends URI {
    protocol: HTTP_PROTOCOL.HTTP;
    port: HTTP_PORT.HTTP;
}

interface HttpsUri extends URI {
    protocol: HTTP_PROTOCOL.HTTPS;
    port: HTTP_PORT.HTTPS;
}

const logUrl = (uri: HttpUri | HttpsUri): void =>
    console.log(`${uri.protocol}://${uri.hostname}${uri.port === 80 ? '' : ':' + uri.port}${uri.pathname}`);

logUrl({ protocol: HTTP_PROTOCOL.HTTP, port: HTTP_PORT.HTTP, hostname: 'www.omartin.es', pathname: '/typescript' });
logUrl({ protocol: HTTP_PROTOCOL.HTTPS, port: HTTP_PORT.HTTPS, hostname: 'www.omartin.es', pathname: '/typescript' });

// logUrl({ protocol: HTTP_PROTOCOL.HTTPS, port: HTTP_PORT.HTTP, hostname: 'www.omartin.es', pathname: '/typescript' }); // Error
// logUrl({ protocol: HTTP_PROTOCOL.HTTP, port: HTTP_PORT.HTTPS, hostname: 'www.omartin.es', pathname: '/typescript' }); // Error

export {};
