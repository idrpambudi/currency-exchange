const baseURL = "https://api.apilayer.com/fixer";
const headers = new Headers();
headers.append("apikey", "xBe6f5m6isud5IqO5o7Q5uj3oug7yzTw");

const requestOptions : RequestInit = { method: "GET", headers };

interface SymbolResponse {
    success: boolean
    symbols: Record<string, string>
}

export const getSymbols = async () : Promise<Record<string, string>> => {
    const response = await fetch(`${baseURL}/symbols`, requestOptions);
    const data : SymbolResponse = await response.json();
    return data.symbols;
}

interface LatestConversionResponse {
    success: boolean
    timestamp: number
    base: string
    date: string
    rates: Array<Record<string, number>>
}

export const getConversions = async (base: string) : Promise<Array<Record<string, number>>> => {
    const response = await fetch(`${baseURL}/latest?base=${base}`, requestOptions);
    const data : LatestConversionResponse = await response.json();
    return data.rates;
}
