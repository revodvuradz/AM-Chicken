/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Client } from "@/types";

import useSwr from "@/hooks/useSwr";

import { gql } from "graphql-request";
import Image from "next/image";
import React, { useMemo } from "react";

const Clients = () => {
    const gqlQuery = gql`
        query getClients($keyword: String) {
            clients(keyword: $keyword, limit: 99) {
                items {
                    id
                    name
                    imageSrc {
                        md
                    }
                    basic {
                        isActive
                    }
                }
            }
        }
    `;

    const { data } = useSwr(gqlQuery);

    const items = useMemo<Client[]>(() => {
        return data?.clients.items || [];
    }, [data]);

    return (
        <div className="flex flex-col items-center gap-[34px]">
            <h1 className="text-center font-outfit text-[3rem] font-semibold text-orange-500 md:text-[4rem]">
                Client<span className="text-neutral-950"> Kami</span>
            </h1>
            <div className="flex flex-wrap content-center items-center justify-center gap-8 md:gap-16 ">
                {items.map(
                    ({ id, name, imageSrc, basic }) =>
                        basic?.isActive && <Image key={id} src={imageSrc?.md || "https://via.placeholder.com/119x56"} alt={`${name} logo`} width={194} height={90} className="h-auto w-auto" />
                )}
            </div>
        </div>
    );
};

export default Clients;
