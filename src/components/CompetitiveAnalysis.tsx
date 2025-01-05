import React from 'react';
import { TrendingUp, DollarSign, Award, Target } from 'lucide-react';
import type { ProductAnalysis } from '../utils/types';

interface CompetitiveAnalysisProps {
  analysis: ProductAnalysis;
}

export function CompetitiveAnalysis({ analysis }: CompetitiveAnalysisProps) {
  const { competitiveAnalysis } = analysis;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-purple-600" />
        Competitive Analysis
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Price Positioning</h3>
          </div>
          <p className="capitalize text-purple-900">{competitiveAnalysis.pricePerception}</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Quality Perception</h3>
          </div>
          <p className="capitalize text-blue-900">{competitiveAnalysis.qualityPerception}</p>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold">Market Position</h3>
          </div>
          <p className="text-green-900">{competitiveAnalysis.marketPosition}</p>
        </div>
      </div>
    </div>
  );
}