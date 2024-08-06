/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
import type { Portfolio } from "@/types";

import Skeleton from "@/components/ui/Skeleton";
import useSwr from "@/hooks/useSwr";
import { mc } from "@/lib/functions";
import { ROUTES } from "@/lib/functions/constants";
import { slugify } from "@/lib/utils/slugify";

import { gql } from "graphql-request";
import { ExportCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

const PortfolioCategories = () => {
    const gqlQuery = gql`
        query getPortfolios($keyword: String) {
            portfolios(keyword: $keyword, limit: 1000) {
                items {
                    id
                    name
                    body
                    thumbnailSrc {
                        original
                    }
                    basic {
                        isActive
                    }
                    images {
                        id
                        pathSrc {
                            original
                        }
                    }
                }
            }
        }
    `;

    const { data, isLoading } = useSwr(gqlQuery);

    const items = useMemo<Portfolio[]>(() => {
        return data?.portfolios?.items || [];
    }, [data]);

    const portfolios = items.filter((portfolio) => portfolio?.basic?.isActive);
    return (
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 px-4 md:grid-cols-2 md:px-12 lg:grid-cols-3">
            {isLoading
                ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="aspect-square" />)
                : portfolios.map((portfolio, index) => {
                      const imagePath = portfolio.thumbnailSrc?.original || "https://via.placeholder.com/400";
                      return (
                          <Link key={portfolio.id} href={`${ROUTES.PORTFOLIO}/${slugify(portfolio.name!)}`}>
                              <div
                                  className={mc(
                                      "relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-200 bg-cover bg-center transition-transform",
                                      "hover:scale-105 hover:shadow-lg"
                                  )}
                              >
                                  <Image
                                      src={imagePath}
                                      fill
                                      alt={portfolio.name || "-"}
                                      className="bg-gray-200 object-cover object-center"
                                      sizes="(min-width: 1520px) 435px, (min-width: 1040px) 29.13vw, (min-width: 780px) calc(50vw - 58px), calc(100vw - 32px)"
                                      priority={index === 0}
                                  />

                                  <div className={mc("absolute inset-0 flex flex-col justify-between bg-black/60 p-6 opacity-0 transition-opacity", "hover:opacity-100")}>
                                      <div className="flex items-end justify-end">
                                          <ExportCircle size="64" color="#FFFFFF" variant="Bold" />
                                      </div>
                                      <p className="items-start text-start font-outfit text-4xl/[54px] font-bold text-white">{portfolio.name || "-"}</p>
                                  </div>
                              </div>
                          </Link>
                      );
                  })}
        </div>
    );
};

export default PortfolioCategories;
