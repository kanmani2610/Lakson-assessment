const products = [
  {
    id: 1,
    name: "Everyday Savings",
    category: "Savings",
    status: "Active",
    metric1: { label: "Interest rate", value: "3.5% p.a." },
    metric2: { label: "Balance", value: "₹2,45,300" },
    button: "View details",
    description: "Savings account with monthly interest."
  },
  {
    id: 2,
    name: "Fixed Deposit",
    category: "Savings",
    status: "Active",
    metric1: { label: "Interest rate", value: "7.1% p.a." },
    metric2: { label: "Maturity date", value: "14 Mar 2027" },
    button: "View details",
    description: "Fixed deposit with a 12-month term."
  },
  {
    id: 3,
    name: "Platinum Rewards Card",
    category: "Credit Card",
    status: "Payment Due",
    metric1: { label: "Available limit", value: "₹1,12,000" },
    metric2: { label: "Payment due", value: "18 Nov 2026" },
    button: "View details",
    description: "Credit card offering reward points on travel and dining."
  },
  {
    id: 4,
    name: "Cashback Card",
    category: "Credit Card",
    status: "Available",
    metric1: { label: "Cashback", value: "5% online" },
    metric2: { label: "Annual fee", value: "Free first year" },
    button: "View offer",
    description: "Pre-approved credit card offer."
  },
  {
    id: 5,
    name: "Home Loan",
    category: "Loan",
    status: "Active",
    metric1: { label: "Outstanding", value: "₹38,40,000" },
    metric2: { label: "Next EMI", value: "5 Dec 2026" },
    button: "View details",
    description: "Home loan with a 20-year repayment term."
  },
  {
    id: 6,
    name: "Personal Loan",
    category: "Loan",
    status: "Available",
    metric1: { label: "Interest rate", value: "From 10.49% p.a." },
    metric2: { label: "Loan amount", value: "Up to ₹10,00,000" },
    button: "View offer",
    description: "Personal loan offer. Check the terms and eligibility."
  },
  {
    id: 7,
    name: "Index Fund SIP",
    category: "Wealth",
    status: "Active",
    metric1: { label: "Current value", value: "₹86,750" },
    metric2: { label: "1-year return", value: "+12.4%" },
    button: "View details",
    description: "Monthly SIP of ₹5,000 in an index fund."
  }
];

function getProducts() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(products);
    }, 300);
  });
}