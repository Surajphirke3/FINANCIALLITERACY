import React, { useState } from 'react';
import { Send, Bot, User, HelpCircle, Loader2 } from 'lucide-react';

function AiAgent() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm your AI Financial Advisor. I can help you with:",
      suggestions: [
        "Budgeting tips",
        "Investment basics",
        "Debt management",
        "Saving strategies",
        "Credit score improvement"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Predefined responses for common financial topics
  const getAIResponse = (userInput: string) => {
    const responses = {
      budget: "Here's a simple budgeting rule to follow: Use the 50/30/20 rule. Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. Would you like me to explain this in more detail?",
      invest: "For beginners, I recommend starting with low-cost index funds. They offer broad market exposure and lower risk through diversification. The three main types are: 1) Stock funds 2) Bond funds 3) Real Estate funds. Which would you like to learn more about?",
      debt: "To manage debt effectively, follow these steps: 1) List all debts with their interest rates 2) Consider either the avalanche method (highest interest first) or snowball method (smallest balance first) 3) Make minimum payments on all debts 4) Put extra money toward your target debt. Would you like me to explain these methods in detail?",
      save: "To boost your savings, try these proven strategies: 1) Automate your savings 2) Save windfalls like tax returns 3) Use the 24-hour rule for large purchases 4) Find and eliminate unnecessary subscriptions. Which strategy would you like to explore further?",
      credit: "To improve your credit score, focus on these key factors: 1) Payment history (35%) 2) Credit utilization (30%) 3) Length of credit history (15%) 4) Credit mix (10%) 5) New credit (10%). Would you like specific tips for any of these areas?",
      default: "I can help you with budgeting, investing, debt management, saving strategies, and credit improvement. Which topic interests you?"
    };

    const userInputLower = userInput.toLowerCase();
    if (userInputLower.includes('budget')) return responses.budget;
    if (userInputLower.includes('invest')) return responses.invest;
    if (userInputLower.includes('debt')) return responses.debt;
    if (userInputLower.includes('save') || userInputLower.includes('saving')) return responses.save;
    if (userInputLower.includes('credit')) return responses.credit;
    return responses.default;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: aiResponse,
        suggestions: input.toLowerCase().includes('explain') ? [
          "Tell me more",
          "Show me an example",
          "What are the risks?",
          "How do I start?"
        ] : undefined
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Financial Advisor
        </h1>
        <p className="text-xl text-gray-600">
          Get personalized financial advice and answers to your questions
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Chat header */}
        <div className="bg-blue-600 p-4 flex items-center space-x-3">
          <Bot className="h-8 w-8 text-white" />
          <div>
            <h2 className="text-white font-semibold">Financial Advisor AI</h2>
            <p className="text-blue-100 text-sm">Online and ready to help</p>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className="mb-6">
              <div
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 rounded-full p-2 ${
                  message.type === 'user' ? 'bg-blue-100' : 'bg-white shadow-md'
                }`}>
                  {message.type === 'user' ? (
                    <User className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Bot className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                <div className={`flex-1 max-w-[80%] p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white shadow-md'
                }`}>
                  <p className={message.type === 'user' ? 'text-white' : 'text-gray-800'}>
                    {message.content}
                  </p>
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">AI is typing...</span>
            </div>
          )}
        </div>

        {/* Help section */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <HelpCircle className="h-5 w-5" />
            <span className="text-sm">Try asking about: budgeting, investing, debt management, saving strategies, or credit improvement</span>
          </div>
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about budgeting, investing, or any financial topic..."
              maxLength={250}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 ${
                isTyping ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isTyping}
            >
              <span>Send</span>
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AiAgent;