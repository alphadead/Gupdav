import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

// Interface for the data structure
interface Plan {
  title: string;
  description: string;
  details: string[];
  buttonText: string;
  buttonLink: string;
}

// Interface for the props for PricingCard
interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonLink: string;
  highlight?: boolean;
}

// PricingCard component
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  features,
  buttonLabel,
  buttonLink,
  highlight = false,
}) => {
  return (
    <div
      className={`p-8 rounded-3xl border ${highlight ? 'border-white' : 'border-transparent'} bg-black/50 text-[#d8e0e9] flex flex-col justify-between`}
    >
      <div>
        <h2 className="text-4xl font-medium mb-4 text-center">{title}</h2>
        <p className="text-lg mb-6 text-slate-">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border border-white rounded-full hover:text-[#7A1CAC] hover:text-[#7A1CAC] transition-colors text-center"
      >
        {buttonLabel}
      </a>
    </div>
  );
};

// PricingSection component accepting JSON data as a prop
interface PricingSectionProps {
  plans: Plan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-12 mx-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 leading-loose">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            features={plan.details}
            buttonLabel={plan.buttonText}
            buttonLink={plan.buttonLink}
            highlight={index === 1} // Highlight the second card
          />
        ))}
      </div>
    </div>
  );
};

// Sample JSON data
const jsonData = {
  plans: [
    {
      title: 'Launchbase',
      description: 'Ideal for established podcasts that are already produced',
      details: [
        '4 YouTube, 15 shorts/month',
        'Custom Scripts',
        'Personalised Style',
        'Posted on YouTube, Instagram, LinkedIn, TikTok',
        'Reporting & Analytics',
        '24x7 Slack Support',
      ],
      buttonText: 'Book a call',
      buttonLink: 'https://calendly.com/gupdav/improve-your-social-presence'
    },
    {
      title: 'RapidGrowth',
      description: 'A podcast built from scratch for tech companies & VCs',
      details: [
        '30 shorts',
        'Custom Scripts',
        'Personalised Style',
        'Posted on YouTube, Instagram, LinkedIn, TikTok',
        'Reporting & Analytics',
        '24x7 Slack Support',
      ],
      buttonText: 'Book a call',
      buttonLink: 'https://calendly.com/gupdav/improve-your-social-presence'
    },
    {
      title: 'Podcaster?',
      description: 'Ideal for podcasts seeking a complete solution',
      details: [
        '4 podcasts/month',
        'Repurposed into 16-20 shorts',
        'Posted on YouTube, Instagram, LinkedIn, TikTok',
        'Reporting & Analytics',
        '24x7 Slack Support',
      ],
      buttonText: 'Book a call',
      buttonLink: 'https://calendly.com/gupdav/improve-your-social-presence'
    },
  ],
};

// Example usage of PricingSection with the JSON data
const App: React.FC = () => {
  return <PricingSection plans={jsonData.plans} />;
};
export default App;