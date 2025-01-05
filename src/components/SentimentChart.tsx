import React, { useEffect, useRef } from 'react';

interface ChartData {
  positive: number;
  neutral: number;
  negative: number;
}

interface SentimentChartProps {
  data: ChartData;
}

export function SentimentChart({ data }: SentimentChartProps) {
  const total = data.positive + data.neutral + data.negative;
  const positivePercentage = Math.round((data.positive / total) * 100) || 0;
  const neutralPercentage = Math.round((data.neutral / total) * 100) || 0;
  const negativePercentage = Math.round((data.negative / total) * 100) || 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">Sentiment Distribution</h3>
      <div className="w-full h-6 flex rounded-full overflow-hidden">
        <div 
          style={{ width: `${positivePercentage}%` }}
          className="bg-green-500 transition-all duration-500"
          title={`Positive: ${positivePercentage}%`}
        />
        <div 
          style={{ width: `${neutralPercentage}%` }}
          className="bg-gray-400 transition-all duration-500"
          title={`Neutral: ${neutralPercentage}%`}
        />
        <div 
          style={{ width: `${negativePercentage}%` }}
          className="bg-red-500 transition-all duration-500"
          title={`Negative: ${negativePercentage}%`}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1" />
          <span>Positive ({positivePercentage}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-400 mr-1" />
          <span>Neutral ({neutralPercentage}%)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-1" />
          <span>Negative ({negativePercentage}%)</span>
        </div>
      </div>
    </div>
  );
}