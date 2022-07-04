import { getSymbols, getConversions } from '../adapter/fixer'
import { CurrencyRepository } from '../repository/currency'

export class CurrencyService {
    repository: CurrencyRepository
    constructor(repository) {
        this.repository = repository
    }

    async getConversionRate(base: string, to: string) : Promise<number> {
        const res = await this.repository.getConversionRate(base, to);
        if (res === null) {
            await this.syncConversionRate(base)
        }
        return this.repository.getConversionRate(base, to);
    }

    async syncConversionRate(base: string) : Promise<boolean> {
        const rates = await getConversions(base);
        Object.keys(rates).forEach(async (k) => {
            await this.repository.setConversionRate(base, k, rates[k]);
            await this.repository.setConversionRate(k, base, 1/rates[k]);
        })
        return true;
    }
}
