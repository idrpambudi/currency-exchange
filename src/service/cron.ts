import { CronJob } from "cron";
import { CurrencyService } from "./currency";

const bases = ["USD", "SGD"]
const cronTime = "1 * * * *"
export function periodicSyncCurrencyRates(service: CurrencyService) {
    const cj = new CronJob(cronTime, async () => {
        bases.forEach(async (base) => await service.syncConversionRate(base));
    })
    cj.start
}
