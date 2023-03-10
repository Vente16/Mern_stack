/* eslint-disable */
import { ApiErrorResponse, ApiResponse, create } from 'apisauce';

const baseURL = 'https://www.mern-api.store';

const STATUS_CODES = {
  unauthorized: 401
};

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// If you need to add more monitors consider calling api.addMonitor from your component
// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = (_: unknown, network: unknown) => {
  api.addMonitor((response: ApiResponse<any, any>) => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - i.e: unauthorizedCallback?.(response)
       */
    }
  });

  api.addMonitor((response: { problem: string | null }) => {
    if (response.problem === 'NETWORK_ERROR') {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - i.e: networkErrorCallback?.(response)
       */
    }
  });
};

export default api;
