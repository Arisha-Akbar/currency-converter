import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currency) return;

    setLoading(true);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => {
        setData(res[currency] || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch currency data:", err);
        setData({});
        setLoading(false);
      });
  }, [currency]);

  return { data, loading };
}

export default useCurrencyInfo;
