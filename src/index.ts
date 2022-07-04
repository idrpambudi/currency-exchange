import express from "express";
import schema from "./schema";
import graphql from "./servers/graphql";
import rest from "./servers/rest";
import { setupCache } from "./context/cache";
import { CurrencyRepository } from "./repository/currency";
import { CurrencyService } from "./service/currency";
import bodyParser from "body-parser";
import { periodicSyncCurrencyRates } from "./service/cron";

(async () => {
  const port = process.env.PORT || 4000;
  const app = express();
  app.use(bodyParser.json());

  const cache = await setupCache();
  const currencyRepository = new CurrencyRepository(cache);
  const currencyService = new CurrencyService(currencyRepository);
  const config = {
    schema,
    context: { currencyService }
  };

  periodicSyncCurrencyRates(currencyService)
  graphql(app, config);
  rest(app, config);

  app.listen({ port }, () => {
    console.log(`🚀  Server ready http://localhost:${port}`);
  });
})();
