import { RedisClientType } from "redis";

const ttl = 60 * 60; // in seconds

export class CurrencyRepository {
    redisClient: RedisClientType
    constructor(redisClient) {
        this.redisClient = redisClient
    }

    async getConversionRate(base: string, to: string) : Promise<number | null> {
        try {
            const res = await this.redisClient.get(`${base}:${to}`);
            return parseFloat(res) || null;
        } catch (e) {
            throw Error(`error getConversionRate ${base}->${to}: ${e}`)
        }
    }

    async setConversionRates(base: string, to: string, rate: number) {
        try {
            await this.redisClient.set(`${base}:${to}`, rate, {EX: ttl});
        } catch (e) {
            throw Error(`error setConversionRates ${base} -> ${to}: ${e}`)
        }
    }
}
