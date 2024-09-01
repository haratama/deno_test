// Deno.serve(() => new Response("nakamura test"));
const handler = (request: Request, info: Deno.ServeHandlerInfo): Response => {
    const { method } = request;
    const remoteHost = info.remoteAddr.hostname;
    const userAgent = request.headers.get("user-agent");

    return new Response(`hello. nakamura ${new Date()}`);
};

Deno.serve({ port: 8080, handler: handler });
