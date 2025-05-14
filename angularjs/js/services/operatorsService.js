angular.module("contactList").factory("mockOperators", () => {
  const _getOperators = () => [
    { name: "OI", code: 14, category: "Celular", price: "14" },
    { name: "VIVO", code: 15, category: "Celular", price: "12" },
    { name: "TIM", code: 41, category: "Celular", price: "17" },
    { name: "GVT", code: 25, category: "Fixo", price: "123" },
    { name: "EMBRATEL", code: 21, category: "Fixo", price: "97" },
  ];

  return {
    getOperators: _getOperators,
  };
});
