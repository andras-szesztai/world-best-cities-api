import { PrismaClient } from '@prisma/client'

export const Query = {
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
