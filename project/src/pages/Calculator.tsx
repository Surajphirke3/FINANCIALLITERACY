import React, { useState } from 'react';
import { Calculator as CalcIcon, PiggyBank } from 'lucide-react';

function Calculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const [savingsGoal, setSavingsGoal] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [timeToGoal, setTimeToGoal] = useState<number | null>(null);

  const calculateLoanPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const terms = parseFloat(loanTerm) * 12;

    const payment = (principal * rate * Math.pow(1 + rate, terms)) / (Math.pow(1 + rate, terms) - 1);
    setMonthlyPayment(payment);
  };

  const calculateSavingsTime = (e: React.FormEvent) => {
    e.preventDefault();
    const goal = parseFloat(savingsGoal);
    const monthly = parseFloat(monthlyContribution);
    const returnRate = parseFloat(annualReturn) / 100 / 12;

    const months = Math.log(1 + (goal * returnRate) / monthly) / Math.log(1 + returnRate);
    setTimeToGoal(months / 12);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Financial Calculators
        </h1>
        <p className="text-xl text-gray-600">
          Plan your financial future with our calculation tools
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Loan Calculator */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-6">
            <CalcIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-semibold">Loan Calculator</h2>
          </div>
          
          <form onSubmit={calculateLoanPayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount ($)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 10000"
                min="0"
                max="1000000000"
                step="any"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 5.5"
                min="0"
                max="100"
                step="any"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loan Term (Years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 5"
                min="0"
                max="100"
                step="1"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate Monthly Payment
            </button>
          </form>

          {monthlyPayment !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">
                Monthly Payment: ${monthlyPayment.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Total Payment: ${(monthlyPayment * parseFloat(loanTerm) * 12).toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* Savings Goal Calculator */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-6">
            <PiggyBank className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-semibold">Savings Goal Calculator</h2>
          </div>
          
          <form onSubmit={calculateSavingsTime} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Savings Goal ($)
              </label>
              <input
                type="number"
                value={savingsGoal}
                onChange={(e) => setSavingsGoal(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100000"
                min="0"
                max="1000000000"
                step="any"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 500"
                min="0"
                max="10000000"
                step="any"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 7"
                min="0"
                max="100"
                step="any"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate Time to Goal
            </button>
          </form>

          {timeToGoal !== null && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">
                Time to reach goal: {timeToGoal.toFixed(1)} years
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Total Contribution: ${(parseFloat(monthlyContribution) * timeToGoal * 12).toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;