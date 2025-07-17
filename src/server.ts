import { server } from "./app";

const PORT = Number(process.env.PORT) || 3333;

server.listen({ port: PORT }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`🚀 Servidor iniciado em: ${address}`);
});
