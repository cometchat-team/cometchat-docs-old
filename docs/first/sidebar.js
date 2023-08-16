module.exports = [
  { type: "doc", id: "first/analytics-apis" },
  {
    type: "category",
    label: "Metrics",
    link: { type: "doc", id: "first/metrics" },
    items: [
      {
        type: "doc",
        id: "first/usage-metrics",
        label: "Usage Metrics",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "first/message-receipt-metrics",
        label: "Message Metrics",
        className: "api-method get",
      },
    ],
  },
];
