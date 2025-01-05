export interface ProductAnalysis {
  id: string;
  name: string;
  category: string;
  dateAnalyzed: string;
  metrics: {
    overallScore: number;
    reviewCount: number;
    sentimentDistribution: {
      positive: number;
      neutral: number;
      negative: number;
    };
  };
  insights: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  competitiveAnalysis: {
    pricePerception: 'premium' | 'competitive' | 'budget';
    qualityPerception: 'high' | 'medium' | 'low';
    marketPosition: string;
  };
  trends: {
    sentiment: 'improving' | 'stable' | 'declining';
    volume: 'increasing' | 'stable' | 'decreasing';
    keywordTrends: Array<{
      keyword: string;
      trend: 'up' | 'down' | 'stable';
      frequency: number;
    }>;
  };
}