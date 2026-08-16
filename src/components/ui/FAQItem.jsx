import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen: defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item border-b border-line ${isOpen ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-none border-none text-left py-[18px] px-1 font-body font-bold text-forest flex justify-between items-center cursor-pointer"
        aria-expanded={isOpen}
      >
        {question}
        <Plus className={`text-gold text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`} size={20} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
        <div className="px-1 pb-[18px] text-ink-soft text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;