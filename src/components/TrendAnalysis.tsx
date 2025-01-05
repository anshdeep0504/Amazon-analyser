import React from 'react';
import { LineChart, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import type { ProductAnalysis } from '../utils/types';

interface TrendAnalysisProps {
  analysis: ProductAnalysis;
}

export function TrendAnalysis({ analysis }: TrendAnalysisProps) {
  const { trends } = analysis;

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-500" />;
      case 'down': return <ArrowDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <LineChart className="w-6 h-6 text-indigo-600" />
        Trend Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4">Key Metrics Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Review Sentiment</span>
              <span className="capitalize text-green-600">{trends.sentiment}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Review Volume</span>
              <span className="capitalize text-blue-600">{trends.volume}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Keyword Trends</h3>
          <div className="space-y-3">
            {trends.keywordTrends.map(({ keyword, trend, frequency }) => (
              <div key={keyword} className="flex items-center justify-between">
                <span className="capitalize">{keyword}</span>
                <div className="flex items-center gap-2">
                  {getTrendIcon(trend)}
                  <span>{frequency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}