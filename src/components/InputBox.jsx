import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
      <label
        htmlFor={amountInputId}
        className="text-gray-600 text-sm font-medium block mb-1.5"
      >
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={amountInputId}
          type="number"
          value={amount === 0 ? "" : amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          disabled={amountDisable}
          min="0"
          step="any"
          className={`w-full py-2 px-2 bg-transparent outline-none border-b border-gray-300 text-gray-800 ${
            amountDisable
              ? "bg-gray-100 cursor-not-allowed text-gray-500"
              : "bg-transparent"
          }`}
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-700 outline-none hover:bg-gray-100 transition"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
