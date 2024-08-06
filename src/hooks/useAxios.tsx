/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance, AxiosError } from "axios";

import axios, { isAxiosError } from "axios";

type OptionsType = {
    accessToken?: string;
};

type HookType = (options?: OptionsType) => {
    http: AxiosInstance;
    isAxiosError: (payload: any) => payload is AxiosError;
};

const defaultHttp: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
});

const useAxios: HookType = (options) => {
    const http = !options?.accessToken
        ? defaultHttp
        : axios.create({
              baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
              headers: {
                  Authorization: `Bearer ${options.accessToken}`,
              },
          });

    return {
        isAxiosError,
        http,
    };
};

export default useAxios;
