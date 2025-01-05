// Enhanced lexicon for Amazon product reviews
const positiveWords = new Set([
  // Product Quality
  'quality', 'durable', 'reliable', 'sturdy', 'premium',
  // Value
  'worth', 'bargain', 'value', 'affordable', 'reasonable',
  // Performance
  'fast', 'efficient', 'effective', 'powerful', 'perfect',
  // Customer Service
  'helpful', 'responsive', 'support', 'warranty', 'service',
  // General Positive
  'good', 'great', 'awesome', 'excellent', 'happy', 'love', 'wonderful',
  'fantastic', 'amazing', 'best', 'recommend', 'satisfied'
]);

const negativeWords = new Set([
  // Product Issues
  'defective', 'broken', 'cheap', 'flimsy', 'poor',
  // Value Concerns
  'expensive', 'overpriced', 'waste', 'costly',
  // Performance Issues
  'slow', 'ineffective', 'weak', 'disappointing',
  // Customer Service
  'unhelpful', 'unresponsive', 'rude', 'terrible',
  // General Negative
  'bad', 'awful', 'horrible', 'hate', 'worst',
  'negative', 'disappointed', 'upset', 'return', 'refund'
]);

const categories = {
  quality: ['quality', 'durable', 'sturdy', 'premium', 'cheap', 'flimsy', 'broken'],
  value: ['worth', 'bargain', 'value', 'affordable', 'expensive', 'overpriced'],
  service: ['helpful', 'responsive', 'support', 'warranty', 'unhelpful', 'unresponsive'],
  performance: ['fast', 'efficient', 'effective', 'slow', 'ineffective', 'weak']
};

export interface SentimentResult {
  score: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  positiveWords: string[];
  negativeWords: string[];
  categories: {
    quality: number;
    value: number;
    service: number;
    performance: number;
  };
  text: string;
}

export function analyzeSentiment(text: string): SentimentResult {
  const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
  const foundPositive: string[] = [];
  const foundNegative: string[] = [];
  
  const categoryScores = {
    quality: 0,
    value: 0,
    service: 0,
    performance: 0
  };
  
  words.forEach(word => {
    if (positiveWords.has(word)) foundPositive.push(word);
    if (negativeWords.has(word)) foundNegative.push(word);
    
    // Calculate category scores
    Object.entries(categories).forEach(([category, keywords]) => {
      if (keywords.includes(word)) {
        categoryScores[category as keyof typeof categoryScores] += 
          positiveWords.has(word) ? 1 : -1;
      }
    });
  });

  const score = (foundPositive.length - foundNegative.length) / Math.max(words.length, 1);
  
  return {
    score,
    sentiment: score > 0.05 ? 'positive' : score < -0.05 ? 'negative' : 'neutral',
    positiveWords: foundPositive,
    negativeWords: foundNegative,
    categories: categoryScores,
    text: text
  };
}