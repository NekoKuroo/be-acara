import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "dokumentasi API",
        description: "Dokumentasi API"
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "local server",
        },
        {
            url: "https://be-acara-iota.vercel.app/api",
            description: "deploy server",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        /*
        harus diinput dulu di POSTMAN biar kesimpan sebagai database nya
         */
        schemas: {
            LoginRequest: {
                identifier: "cici",
                password: "baba",
            },
            ActivationRequest: {
                code: "abcdef"
            }
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0"})(outputFile, endpointsFiles, doc);