"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
exports.Query = {
    allCities: (_, __, { db }) => db.city.findMany({
        orderBy: {
            overall: 'asc',
        },
    }),
    getCity: (_, { slug }, { db }) => db.city.findUnique({
        where: { slug },
    }),
};
