////////////////////
// Backend Code ///
///////////////////

import { createTRPCRouter, publicProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  getProductDetail: publicProcedure.query(() => {
    return {
      name: "Computer Monitor",
      category: "Monitor",
      description: "Best Monitor of 2023",
      price: 13000,
      ratings: 4,
    };
  }),
});
