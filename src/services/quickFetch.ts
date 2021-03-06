import axios, { AxiosRequestConfig, AxiosResponse, Method, AxiosError } from 'axios';

/**
 * HTTP client built at the top of axios library to reduce your boilerplate.
 * It returns response.data or throws error.
 *
 * TypeScript generics allows to properly type response and error type
 * if generic types are not provided it falls back to default
 * AxiosResponse or AxiosError depending on request result.
 *
 * @param method - Axios method type (POST,GET, etc...)
 * @param endpoint
 * @param config Axios request configs
 * @returns response.data from api request or throws error
 */
// I used solution from my open source library https://github.com/Hellhiem/quick-fetch
export const quickFetch = async <ResponseType = AxiosResponse, ResponseErrorType = AxiosError>(
  method: Method,
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<ResponseType> => {
  return await axios({
    method: method,
    url: endpoint,
    ...config,
  })
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error: ResponseErrorType) => {
      throw error;
    });
};
