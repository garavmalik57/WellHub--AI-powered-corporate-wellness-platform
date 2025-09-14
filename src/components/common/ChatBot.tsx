import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot' as const,
      content: "Hi there! I'm your AI wellness coach. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    "How can I improve my sleep?",
    "What's a good workout routine?",
    "Healthy snack suggestions",
    "Stress management tips"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot' as const,
        content: aiResponse,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('sleep')) {
      return "For better sleep, try maintaining a consistent bedtime routine, avoid screens 1 hour before bed, and keep your room cool and dark. Aim for 7-9 hours of sleep per night. Would you like specific relaxation techniques?";
    }
    
    if (lowerInput.includes('workout') || lowerInput.includes('exercise')) {
      return "A balanced workout routine should include 150 minutes of moderate cardio per week, strength training 2-3 times weekly, and flexibility exercises. Start with 20-30 minute sessions and gradually increase. What's your current fitness level?";
    }
    
    if (lowerInput.includes('snack') || lowerInput.includes('nutrition')) {
      return "Great healthy snacks include mixed nuts, Greek yogurt with berries, apple slices with almond butter, or veggie sticks with hummus. These provide protein and fiber to keep you energized. Any dietary restrictions I should know about?";
    }
    
    if (lowerInput.includes('stress')) {
      return "Try the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, exhale for 8. Also consider short meditation breaks, gentle stretching, or a brief walk outside. Even 5 minutes can make a difference!";
    }
    
    return "That's a great question! Based on your wellness goals, I'd recommend focusing on small, consistent changes. Would you like me to suggest some specific strategies based on your current wellness data?";
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-bubble bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <div className="notification-dot bg-orange-400"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Wellness Coach</h3>
                    <p className="text-sm text-emerald-100">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && (
                        <Bot className="h-4 w-4 mt-1 text-emerald-600" />
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-4">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="text-xs p-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me about wellness..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;