import React from 'react';
import { ShoppingBag, BarChart2, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <div className="relative text-center mb-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-blue-500/10 animate-gradient-x"></div>
      </div>
      <div className="flex items-center justify-center mb-4 space-x-4">
        <ShoppingBag className="w-10 h-10 text-orange-500 animate-pulse" />
        <BarChart2 className="w-12 h-12 text-yellow-600" />
        <TrendingUp className="w-10 h-10 text-blue-500 animate-pulse" />
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-yellow-600 to-blue-500 bg-clip-text text-transparent mb-4">
        Amazon Review Analyzer
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Transform your Amazon product reviews into actionable business insights with our advanced sentiment analysis
      </p>
    </div>
  );
}