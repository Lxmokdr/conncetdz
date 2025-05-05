
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm the ConnectDZ career guidance assistant. How can I help you today with your career exploration?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Based on your interests, you might want to explore careers in technology, healthcare, or education. Would you like more information about any of these fields?",
        "That's a great question! Your skills in problem-solving and communication could be valuable in many different career paths.",
        "Have you considered exploring internships or volunteer opportunities to gain experience in fields you're interested in?",
        "Educational pathways in Algeria offer many options. Would you like to learn more about university programs or vocational training?",
        "Understanding your strengths is an important part of career exploration. Would you like to take a skills assessment?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botReply: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto shadow-lg">
        <CardHeader className="bg-connect-primary text-white">
          <CardTitle className="flex items-center">
            <img src="/lovable-uploads/415376fc-2da4-49b6-b559-be3cd353d66b.png" alt="ConnectDZ Logo" className="h-10 mr-3" />
            Career Guidance Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-connect-primary text-white' 
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <div 
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-connect-accent' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <Input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..." 
              className="flex-grow"
            />
            <Button 
              onClick={sendMessage} 
              className="bg-connect-primary hover:bg-connect-secondary"
            >
              <Send size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
