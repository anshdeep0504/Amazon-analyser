import React from 'react';
import { ThumbsUp, ThumbsDown, Minus, Package, DollarSign, Headphones, Zap } from 'lucide-react';
import type { SentimentResult } from '../utils/sentimentAnalyzer';

interface ResultCardProps {
  result: SentimentResult;
  index: number;
}

export function ResultCard({ result, index }: ResultCardProps) {
  const Icon = result.sentiment === 'positive' ? ThumbsUp : 
               result.sentiment === 'negative' ? ThumbsDown : Minus;

  const colors = {
    positive: 'bg-green-50 border-green-100',
    negative: 'bg-red-50 border-red-100',
    neutral: 'bg-gray-50 border-gray-100'
  };

  const badgeColors = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800'
  };

  const categoryIcons = {
    quality: Package,
    value: DollarSign,
    service: Headphones,
    performance: Zap
  };

  return (
    <div className={`p-6 rounded-lg border ${colors[result.sentiment]} backdrop-blur-sm transition-all hover:scale-[1.02]`}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <Icon className={`w-5 h-5 ${result.sentiment === 'positive' ? 'text-green-600' : 
                                    result.sentiment === 'negative' ? 'text-red-600' : 'text-gray-600'}`} />
          <span className="font-medium text-gray-800">Review {index + 1}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColors[result.sentiment]}`}>
          {result.sentiment}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 italic">"{result.text}"</p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.entries(result.categories).map(([category, score]) => {
          const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
          return (
            <div key={category} className="flex items-center space-x-2">
              <CategoryIcon className="w-4 h-4 text-gray-500" />
              <span className="text-sm capitalize">{category}:</span>
              <span className={`text-sm font-medium ${
                score > 0 ? 'text-green-600' : 
                score < 0 ? 'text-red-600' : 
                'text-gray-600'
              }`}>
                {score > 0 ? '+' : ''}{score}
              </span>
            </div>
          );
        })}
      </div>

      <div className="space-y-2 text-sm">
        <p className="text-gray-600">
          Sentiment Score: <span className="font-medium">{Math.abs(result.score).toFixed(2)}</span>
        </p>
        {result.positiveWords.length > 0 && (
          <p className="text-green-600">
            Positive aspects: {result.positiveWords.join(', ')}
          </p>
        )}
        {result.negativeWords.length > 0 && (
          <p className="text-red-600">
            Areas for improvement: {result.negativeWords.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}