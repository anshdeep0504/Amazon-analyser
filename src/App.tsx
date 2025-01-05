import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { BusinessInsights } from './components/BusinessInsights';
import { CompetitiveAnalysis } from './components/CompetitiveAnalysis';
import { TrendAnalysis } from './components/TrendAnalysis';
import { performAdvancedAnalysis } from './utils/advancedAnalytics';
import type { ProductAnalysis } from './utils/types';

export default function App() {
  const [reviews, setReviews] = useState<string[]>([]);
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);

  const handleAnalyze = (text: string) => {
    const reviewList = text
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.trim());
    
    setReviews(reviewList);
    setAnalysis(performAdvancedAnalysis(reviewList));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        <InputSection onAnalyze={handleAnalyze} />
        {analysis && (
          <>
            <BusinessInsights analysis={analysis} />
            <CompetitiveAnalysis analysis={analysis} />
            <TrendAnalysis analysis={analysis} />
          </>
        )}
      </div>
    </div>
  );
}