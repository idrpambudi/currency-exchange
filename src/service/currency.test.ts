import { CurrencyService } from "./currency";

const mockGetConversions = jest.fn((base) => ({"USD": 1.5}));
jest.mock('../adapter/fixer', () => {
    return {
      getConversions: mockGetConversions,
    };
})

describe("CurrencyService", () => {
    it("should get conversion rate"), () => {
        const Mock = jest.fn(() => ({
            getConversionRate: jest.fn((base, to) => 1.5),
        }));
        const mock = new Mock();
        const instance = new CurrencyService(mock);
        instance.getConversionRate("USD", "SGD");
    
        expect(mock.getConversionRate).toHaveBeenCalled();
        expect(mock.getConversionRate).toHaveBeenCalledWith("USD", "SGD");
    }

    it("should get conversion rate and sync"), () => {
        const Mock = jest.fn(() => ({
            getConversionRate: jest.fn((base, to) => 1.5),
            setConversionRate: jest.fn((base, to, rate) => null),
        }));
        const mock = new Mock();
        const instance = new CurrencyService(mock);
        instance.getConversionRate("USD", "SGD");
    
        expect(mock.getConversionRate).toHaveBeenCalled();
        expect(mock.getConversionRate).toHaveBeenCalledWith("USD", "SGD");
        expect(mock.setConversionRate.mock.calls.length).toBeGreaterThan(1);
    }

    it("should set conversion rate"), () => {
        const Mock = jest.fn(() => ({
            setConversionRate: jest.fn((base, to, rate) => null),
        }));
        const mock = new Mock();
        const instance = new CurrencyService(mock);
        instance.syncConversionRate("USD");
    
        expect(mock.setConversionRate.mock.calls.length).toBeGreaterThan(1);
        expect(mockGetConversions).toBeCalled();
    }
})
