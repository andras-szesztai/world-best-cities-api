import { PrismaClient } from '@prisma/client'
import { QueryResolvers } from '../types/graphql.generated'

export interface ResolverContext {
    db: PrismaClient
}

export const Query: Required<QueryResolvers<ResolverContext>> = {
    allCities: (_: unknown, __: unknown, { db }: { db: any }) =>
        db.city.findMany({
            orderBy: {
                overall: 'asc',
            },
        }),
    getCity: (_: unknown, { slug }: { slug: any }, { db }: { db: any }) =>
        db.city.findUnique({
            where: { slug },
        }),
}
