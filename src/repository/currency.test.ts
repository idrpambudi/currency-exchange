import { CurrencyRepository } from "./currency";

describe("CurrencyRepository", () => {
    it("should get conversion rate"), () => {
        const Mock = jest.fn(() => ({
            get: jest.fn((key) => 1.5),
        }));
        const mock = new Mock();
        const instance = new CurrencyRepository(mock);
        instance.getConversionRate("USD", "SGD");
    
        expect(mock.get).toHaveBeenCalled();
        expect(mock.get).toHaveBeenCalledWith("USD:SGD");
    }

    it("should set conversion rate", () => {
        const Mock = jest.fn(() => ({
            set: jest.fn((key, value, options) => 'OK'),
        }));
        const mock = new Mock();
        const instance = new CurrencyRepository(mock);
        instance.setConversionRate("USD", "SGD", 1.5);
    
        expect(mock.set).toHaveBeenCalled();
        expect(mock.set).toHaveBeenCalledWith("USD:SGD", 1.5, {EX: 60 * 60});
    })
})
