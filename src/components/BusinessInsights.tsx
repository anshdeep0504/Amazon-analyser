import React from 'react';
import { BarChart, DollarSign, Users, Star, AlertTriangle } from 'lucide-react';
import type { ProductAnalysis } from '../utils/types';

interface BusinessInsightsProps {
  analysis: ProductAnalysis;
}

export function BusinessInsights({ analysis }: BusinessInsightsProps) {
  const {
    insights,
    metrics,
    competitiveAnalysis
  } = analysis;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BarChart className="w-6 h-6 text-blue-600" />
        Business Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">Key Performance Metrics</h3>
          <div className="flex items-center justify-between">
            <span>Overall Score</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(metrics.overallScore / 5) * 100}%` }}
                />
              </div>
              <span className="text-green-600">{metrics.overallScore.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Review Count</span>
            <span className="text-blue-600">{metrics.reviewCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Market Position</span>
            <span className="text-purple-600">{competitiveAnalysis.marketPosition}</span>
          </div>
        </div>

        {/* SWOT Analysis */}
        <div className="space-y-6">
          {insights.strengths.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Key Strengths</h3>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{insights.strengths.join(', ')}</span>
              </div>
            </div>
          )}

          {insights.weaknesses.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Areas for Improvement</h3>
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>{insights.weaknesses.join(', ')}</span>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Sentiment Distribution</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">{metrics.sentimentDistribution.positive}% Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm">{metrics.sentimentDistribution.neutral}% Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm">{metrics.sentimentDistribution.negative}% Negative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}