/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosPromise, AxiosResponse } from "axios";
import type { KeyedMutator } from "swr";

import useAxios from "@/hooks/useAxios";
import useGql from "@/hooks/useGql";

import { isArray } from "@chakra-ui/utils";
import swr from "swr";

// import { useEffect, useState } from "react";

type OptionsType = {
    accessToken?: string;
    useAxios?: boolean;
};

type HookType = (
    url: string | [string, object] | null,
    options?: OptionsType
) => {
    isLoading: boolean;
    isValidating: boolean;
    isError: boolean;
    mutate: KeyedMutator<any>;
    error?: unknown;
    data?: any;
};

type Fetcher = (url: string | null) => AxiosPromise<AxiosResponse>;

const useSwr: HookType = (url, options) => {
    const { http } = useAxios({
        accessToken: options?.accessToken,
    });
    const { gqlClient } = useGql({ accessToken: options?.accessToken });

    const axiosFetcher: Fetcher = (url) => http.get(url || "").then(({ data }) => data);

    const graphqlFetcher = (params: string | [string, any]) => {
        const url = isArray(params) ? params.at(0) : params;
        const args = isArray(params) ? params.at(1) : undefined;

        return gqlClient.request(url, args).then((result) => {
            return result;
        });
    };

    const { data, error, isValidating, mutate } = swr(url, options?.useAxios ? axiosFetcher : graphqlFetcher);

    // const [data, setData] = useState<any[] | undefined>(undefined);

    // useEffect(() => {
    //   if (swrData !== undefined) {
    //     setData(swrData);
    //   }
    // }, [swrData]);

    return {
        isLoading: !!(!data && !error && url),
        isValidating,
        isError: !!error,
        data,
        mutate,
    };
};

export default useSwr;
