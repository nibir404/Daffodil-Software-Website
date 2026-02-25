import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-pqtkb1xdal";

interface Message {
  type: "user" | "ai";
  content: string;
  question?: string;
}

const suggestionQuestions = [
  "What service does DSL offer?",
  "Is DSL a reliable software development company in Bangladesh?",
  "Can DSL handle enterprise ERP and government systems?"
];

const aiResponses: Record<string, string> = {
  "What service does DSL offer?": "DSL provides end-to-end software services that help you reduce costs, automate tasks, and scale smarter. From custom development and ERP systems to AI automation and cloud solutions, we cover the entire lifecycle — discovery, architecture, development, deployment, and ongoing support. Our services help enterprise and public-sector clients modernize faster with confidence.",
  "Is DSL a reliable software development company in Bangladesh?": "DSL provides end-to-end trusted software services that help you reduce costs, automate tasks, and scale smarter. From custom development and ERP systems to AI automation and cloud solutions, we cover the entire lifecycle — discovery, architecture, development, deployment, and ongoing support. Our services help enterprise and public-sector clients modernize faster with confidence, backed by 20+ years of experience.",
  "Can DSL handle enterprise ERP and government systems?": "Yes. DSL has delivered 500+ projects across education, healthcare, finance, and government sectors globally. Our team handles complex integrations, security standards, regulatory compliance, and scale — from ERPs and workflow automation to AI-powered data platforms. We're trusted by ministries, public universities, and Fortune 500 organizations for critical infrastructure."
};

function SuggestionPill({ text, onClick, disabled }: { text: string; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-[rgba(17,17,17,0.1)] content-stretch flex items-center justify-center px-[20px] py-[8px] rounded-[8px] shadow-[0px_0px_4px_0px_white] shrink-0 hover:bg-[rgba(17,17,17,0.2)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <p className="font-['Inter'] font-normal leading-[24px] text-[14px] text-white">{text}</p>
    </button>
  );
}

function AiMagic() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[80px] top-1/2" data-name="ai-magic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="ai-magic">
          <path d={svgPaths.p13aa0400} stroke="white" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p1ae85300} stroke="white" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function AiBall({ isThinking }: { isThinking: boolean }) {
  return (
    <div 
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] overflow-clip rounded-[120px] shadow-[0px_0px_120px_0px_rgba(44,246,152,0.75)] transition-all duration-700 ease-out ${isThinking ? 'scale-110' : 'scale-100'}`}
      data-name="AI Ball" 
      style={{ backgroundImage: "linear-gradient(-40.1009deg, rgb(55, 243, 211) 14.729%, rgb(20, 191, 143) 51.003%, rgb(185, 250, 213) 85.243%)" }}
    >
      {/* Glow effect top */}
      <div className="absolute h-[75px] left-[109px] top-[30px] w-[32px]">
        <div className="absolute inset-[-25.81%_-60%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 141">
            <g filter="url(#filter0_f_1_82492)">
              <path d={svgPaths.p308e0f80} fill="white" style={{ mixBlendMode: "plus-lighter" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141" id="filter0_f_1_82492" width="88" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_82492" stdDeviation="12" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Small highlight */}
      <div className="absolute flex h-[24px] items-center justify-center left-[90px] top-[15px] w-[23px]">
        <div className="flex-none rotate-[-35.21deg]">
          <div className="h-[18px] relative w-[16px]">
            <div className="absolute inset-[-54.22%_-60.11%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.9625 46.1313">
                <g filter="url(#filter0_f_1_83414)">
                  <path d={svgPaths.p2dd9d200} fill="white" style={{ mixBlendMode: "plus-lighter" }} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.1313" id="filter0_f_1_83414" width="43.9625" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_83414" stdDeviation="6" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Magic Icon */}
      <div className={isThinking ? 'animate-pulse' : ''}>
        <AiMagic />
      </div>
      
      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_16px_7px_20px_0px_#c4ffec]" />
    </div>
  );
}

function SendButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_0px_100px_0px_rgba(0,0,0,0.75)] shrink-0 size-[48px] hover:scale-110 active:scale-95 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      style={{ backgroundImage: "linear-gradient(-40.1009deg, rgb(55, 243, 211) 14.729%, rgb(20, 191, 143) 51.003%, rgb(185, 250, 213) 85.243%)" }}
    >
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p4ec98f0} stroke="#111111" strokeWidth="1.5" />
            <path d="M11.4999 12.5L14.9999 9" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
      
      {/* Glow effect */}
      <div className="-translate-x-1/2 absolute flex h-[55px] items-center justify-center left-[calc(50%-15px)] mix-blend-plus-lighter top-[-22px] w-[54px]">
        <div className="flex-none rotate-[-46.28deg]">
          <div className="h-[24px] relative w-[54px]">
            <div className="absolute inset-[-114.94%_-50.18%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.761 97.5803">
                <g filter="url(#filter0_f_1_84336)" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="67.8806" cy="48.7902" fill="white" fillOpacity="0.6" rx="33.8806" ry="14.7902" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="97.5803" id="filter0_f_1_84336" width="135.761" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_84336" stdDeviation="17" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function ClearChatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#111] content-stretch flex gap-[8px] items-center justify-center right-[16px] overflow-clip px-[12px] py-[8px] rounded-[8px] top-[16px] hover:bg-[#222] active:scale-95 transition-all duration-200 z-10"
    >
      <p className="font-['Inter'] font-normal leading-[24px] text-[14px] text-white">Clear Chat</p>
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.pa46bd40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </button>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="inline-block size-2 bg-[#37f3d3] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
      <span className="inline-block size-2 bg-[#37f3d3] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
      <span className="inline-block size-2 bg-[#37f3d3] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
    </div>
  );
}

function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={`mb-4 animate-[slideIn_0.3s_ease-out] ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block max-w-[75%] px-4 py-3 rounded-[12px] ${
        message.type === 'user' 
          ? 'bg-[rgba(55,243,211,0.2)] border border-[rgba(55,243,211,0.5)]' 
          : 'bg-[rgba(17,17,17,0.4)] border border-white/20'
      }`}>
        {message.type === 'ai' && message.question && (
          <strong className="block mb-2 text-[14px] text-[#37f3d3] font-['Inter']">{message.question}</strong>
        )}
        <p className="font-['Inter'] text-[14px] leading-[22px] text-white whitespace-pre-line">
          {message.content}
        </p>
      </div>
    </div>
  );
}

export default function AiFlow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isThinking]);

  const handleSuggestionClick = (question: string) => {
    if (isThinking) return;
    
    // Add user message
    const newMessages = [...messages, { type: "user" as const, content: question }];
    setMessages(newMessages);
    setIsThinking(true);

    // Simulate AI thinking and response with realistic delay
    setTimeout(() => {
      const response = aiResponses[question] || "I'm here to help you learn more about DSL's services and capabilities.";
      setMessages(prev => [...prev, { 
        type: "ai" as const, 
        content: response,
        question: question 
      }]);
      setIsThinking(false);
      
      // Focus input after response
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 1500 + Math.random() * 1000); // 1.5-2.5s realistic delay
  };

  const handleSubmit = () => {
    if (!inputValue.trim() || isThinking) return;

    const userMessage = inputValue.trim();
    const newMessages = [...messages, { type: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setInputValue("");
    setIsThinking(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const response = aiResponses[userMessage] || "I'm here to help you learn more about DSL's services and capabilities. Please ask about our services, reliability, or enterprise solutions.";
      setMessages(prev => [...prev, { 
        type: "ai" as const, 
        content: response,
        question: userMessage
      }]);
      setIsThinking(false);
      
      // Focus input after response
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 1500 + Math.random() * 1000);
  };

  const handleClearChat = () => {
    setMessages([]);
    setInputValue("");
    setIsThinking(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const showInitialState = messages.length === 0;

  return (
    <div className="overflow-clip relative rounded-[16px] size-full" data-name="Ai flow">
      {/* Terminal Frame */}
      <div className="absolute bg-[rgba(255,255,255,0.1)] border-[3px] border-solid border-white h-full left-0 rounded-[16px] shadow-[0px_0px_12px_0px_rgba(255,255,255,0.95)] top-0 w-full backdrop-blur-sm" />
      
      {/* Clear Chat Button */}
      {messages.length > 0 && <ClearChatButton onClick={handleClearChat} />}

      {/* Initial State - AI Ball + Suggestion Pills */}
      {showInitialState && (
        <>
          <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px]">
            <AiBall isThinking={false} />
          </div>
          <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[16px] right-[16px] bottom-[88px]">
            {suggestionQuestions.map((question, index) => (
              <SuggestionPill 
                key={index} 
                text={question} 
                onClick={() => handleSuggestionClick(question)}
                disabled={isThinking}
              />
            ))}
          </div>
        </>
      )}

      {/* Chat State - Messages with smooth scroll */}
      {messages.length > 0 && (
        <div 
          ref={chatContainerRef}
          className="absolute left-[16px] right-[16px] top-[56px] bottom-[88px] overflow-y-auto scroll-smooth"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.3) transparent'
          }}
        >
          <div className="max-w-[95%] mx-auto py-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            
            {/* Thinking indicator */}
            {isThinking && (
              <div className="text-left mb-4 animate-[slideIn_0.3s_ease-out]">
                <div className="inline-block px-4 py-3 rounded-[12px] bg-[rgba(17,17,17,0.4)] border border-white/20">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Input Field - Always at bottom */}
      <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-between left-[16px] pl-[16px] pr-[8px] py-[8px] rounded-[12px] bottom-[16px] right-[16px] backdrop-blur-sm">
        <div className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask anything you want to ask..."
          disabled={isThinking}
          className="flex-1 bg-transparent font-['Inter'] font-normal leading-[28px] text-[15px] text-white placeholder:text-[rgba(255,255,255,0.6)] outline-none disabled:opacity-50 transition-opacity"
        />
        <SendButton onClick={handleSubmit} disabled={isThinking || !inputValue.trim()} />
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
