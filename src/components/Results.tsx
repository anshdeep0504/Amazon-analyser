import React from 'react';
import { SentimentChart } from './SentimentChart';
import { ResultCard } from './ResultCard';
import type { SentimentResult } from '../utils/sentimentAnalyzer';

interface ResultsProps {
  results: SentimentResult[];
}

export function Results({ results }: ResultsProps) {
  if (results.length === 0) return null;

  const chartData = {
    positive: results.filter(r => r.sentiment === 'positive').length,
    neutral: results.filter(r => r.sentiment === 'neutral').length,
    negative: results.filter(r => r.sentiment === 'negative').length,
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg bg-white/90 border border-gray-100">
      <SentimentChart data={chartData} />
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Detailed Analysis</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((result, index) => (
            <ResultCard key={index} result={result} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}