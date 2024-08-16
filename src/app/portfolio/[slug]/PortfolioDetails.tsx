// /* eslint-disable tailwindcss/no-arbitrary-value */
// "use client";

// import type { Portfolio } from "@/types";

// import Button from "@/components/ui/Button";
// import Skeleton from "@/components/ui/Skeleton";
// import useSwr from "@/hooks/useSwr";
// import { slugify } from "@/lib/utils/slugify";

// import { gql } from "graphql-request";
// import { CloseCircle } from "iconsax-react";
// import Image from "next/image";
// import { notFound, useRouter } from "next/navigation";
// import React, { useMemo } from "react";

// const PortfolioDetails = (params: { slug: string }) => {
//     const { slug } = params;
//     const router = useRouter();

//     const gqlQuery = gql`
//         query getPortfolios($keyword: String) {
//             portfolios(keyword: $keyword, limit: 1000) {
//                 items {
//                     id
//                     name
//                     body
//                     thumbnailSrc {
//                         original
//                     }
//                     basic {
//                         isActive
//                     }
//                     images {
//                         id
//                         pathSrc {
//                             original
//                         }
//                     }
//                 }
//             }
//         }
//     `;

//     const { data, isLoading } = useSwr(gqlQuery);

//     const items = useMemo<Portfolio[]>(() => {
//         return data?.portfolios?.items || [];
//     }, [data]);

//     const category = items.find((item) => slugify(item.name!) === slug);

//     if (!category && !isLoading) {
//         return notFound();
//     }

//     return (
//         <>
//             <div className="flex items-start justify-between">
//                 {isLoading ? <Skeleton className="w-1/2 brightness-75" /> : <h1 className="font-outfit text-5xl/normal font-medium text-neutral-950">{category?.name || "-"}</h1>}
//                 <Button onClick={() => router.back()}>
//                     <CloseCircle size="34" color="#475569" />
//                 </Button>
//             </div>
//             {isLoading ? (
//                 <>
//                     <Skeleton className="w-full" />
//                     <Skeleton className="w-4/5" />
//                 </>
//             ) : (
//                 <p className="ts-lg-normal font-normal text-neutral-600" dangerouslySetInnerHTML={{ __html: category?.body || "-" }} />
//             )}
//             <div className="flex flex-col gap-4 rounded-3xl md:gap-6">
//                 <div className="relative aspect-[890/948] w-full rounded-3xl">
//                     {isLoading ? (
//                         <Skeleton />
//                     ) : (
//                         category?.thumbnailSrc?.original && (
//                             <Image
//                                 alt={category?.name || "-"}
//                                 fill
//                                 className="rounded-2xl object-cover object-center"
//                                 sizes="(min-width: 940px) 858px, calc(95.16vw - 17px)"
//                                 priority
//                                 quality={100}
//                                 src={category.thumbnailSrc?.original}
//                             />
//                         )
//                     )}
//                 </div>

//                 <div className="relative aspect-[890/394] w-full rounded-xl">
//                     {isLoading ? (
//                         <Skeleton />
//                     ) : (
//                         category?.images?.[0]?.pathSrc?.original && (
//                             <Image
//                                 alt={category?.name || "-"}
//                                 fill
//                                 className="rounded-2xl object-cover object-center"
//                                 sizes="(min-width: 940px) 858px, calc(95.16vw - 17px)"
//                                 priority
//                                 src={category.images[0].pathSrc.original}
//                             />
//                         )
//                     )}
//                 </div>
//                 <div className="flex flex-row gap-4 rounded-3xl md:gap-6">
//                     {[1, 2].map((index) => (
//                         <div key={index} className="relative aspect-[435/554] w-1/2 rounded-3xl">
//                             {isLoading ? (
//                                 <Skeleton />
//                             ) : (
//                                 category?.images?.[index]?.pathSrc?.original && (
//                                     <Image
//                                         alt={category?.name || "-"}
//                                         src={category?.images?.[index]?.pathSrc?.original || "https://via.placeholder.com/400x600"}
//                                         sizes="(min-width: 940px) 417px, calc(46.94vw - 15px)"
//                                         className="rounded-2xl object-cover object-center"
//                                         fill
//                                     />
//                                 )
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PortfolioDetails;
