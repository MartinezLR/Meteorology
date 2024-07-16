// clienteHTTP.service.js

angular.module('clientModule')
    .service('HTTPService', ['$http', function ($http) {

        /**
         * @typedef {Object} RespostaHTTP
         * @property {number} status - Status da resposta.
         * @property {any} body - Corpo da resposta.
         */

        /**
         * Faz uma requisição HTTP.
         *
         * @param {Object} config - Configurações da requisição HTTP.
         * @param {"get" | "post" | "put" | "delete" | "patch"} config.method - Método da requisição HTTP.
         * @param {string} config.url - URL da requisição HTTP.
         * @param {Object} [config.data] - Dados do corpo da requisição HTTP.
         * @param {Object} [config.headers] - Headers da requisição HTTP.
         * @param {Object} [config.params] - Parâmetros da requisição HTTP.
         * @param {Function} [config.transformResponse] - Função para transformar a resposta.
         * @returns {Promise<RespostaHTTP>} - Promise que retorna um objeto com atributos 'status' e 'body'.
         */
        this.request = async function (config) {
            try {
                const response = await $http({
                    method: config.method,
                    url: config.url,
                    data: config.data,
                    headers: config.headers,
                    params: config.params,
                    transformResponse: config.transformResponse ?? defaultTransformResponse,
                });
                return buildResponse(response);
            } catch (error) {
                return handleResponseError(error);
            }
        };

        function defaultTransformResponse(data) {
            return JSON.parse(data);
        }

        function buildResponse(response) {
            return {
                status: response.status,
                body: response.data.data ?? response.data,
            };
        }

        function handleResponseError(error) {
            return {
                status: error.status,
                body: error.data.data ?? error.data,
            };
        }
    }]);
