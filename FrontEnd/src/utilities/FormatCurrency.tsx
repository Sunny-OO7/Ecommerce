const FormatCurrency = (amount: number): string => {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

export default FormatCurrency;
