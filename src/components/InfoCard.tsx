import React from 'react';

interface InfoCardProps {
  question: string;
  answer: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ question, answer }) => {
  return (
    <div className="bg-black text-white p-6 rounded-xl border border-white/10 relative shadow-lg">
      <div className="absolute top-[-20px] left-[-20px] bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
        <span className="text-white text-lg font-semibold">&#8593;</span>
      </div>
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
};

export default InfoCard;
