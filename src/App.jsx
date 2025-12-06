import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  useEffect(() => {
    if (currencyInfo && currencyInfo[to] !== undefined) {
      const result = amount * currencyInfo[to];
      setConvertedAmount(isNaN(result) ? 0 : result);
    } else {
      setConvertedAmount(0);
    }
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center 
bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6"
    >
      <div
        className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl 
  border border-pink-200 shadow-[0_10px_30px_-10px_rgba(255,182,193,0.7)] p-8
  transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(255,182,193,0.9)]"
      >
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6 tracking-wide">
          Currency Converter
        </h1>

        <div className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={setFrom}
            onAmountChange={(val) => setAmount(Number(val) || 0)}
            selectCurrency={from}
          />

          {/* Swap Button */}
          <div className="relative w-full my-2">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full p-1.5 shadow-md z-10">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
bg-pink-400 rounded-full p-2 shadow-lg hover:bg-pink-500 
transition-all active:scale-95 text-white text-lg"
                aria-label="Swap currencies"
              >
                ⇄
              </button>
            </div>
            <div className="h-0.5 bg-gray-200 w-full"></div>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={setTo}
            selectCurrency={to}
            amountDisable
          />
        </div>

        {loading && (
          <p className="text-pink-500 text-center mt-3 text-sm">
            Fetching latest rates...
          </p>
        )}

        <div className="mt-6 text-center text-pink-700 font-medium text-lg">
          {amount} {from.toUpperCase()} = {convertedAmount.toFixed(4)}{" "}
          {to.toUpperCase()}
        </div>
      </div>

      <p className="mt-8 text-pink-500 text-xs tracking-wide">
        Real-time data via{" "}
        <a
          href="https://github.com/fawazahmed0/exchange-api"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-500 hover:text-purple-700"
        >
          currency-api
        </a>
      </p>
    </div>
  );
}

export default App;
