import { GraphQLClient } from "graphql-request";

type OptionsType = {
    accessToken?: string;
};

type HookType = (options: OptionsType) => {
    gqlClient: GraphQLClient;
};

const useGql: HookType = (options?: OptionsType) => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const gqlClient = new GraphQLClient(endpoint, {
        headers: {
            Authorization: `Bearer ${options?.accessToken}`,
        },
    });

    return {
        gqlClient,
    };
};

export default useGql;
