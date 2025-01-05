import React from 'react';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function TextInput({ text, onTextChange, onSubmit }: TextInputProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Manual Input</h2>
      <p className="text-gray-600 mb-4">Or paste your reviews (one per line)</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50/50 transition-all"
          placeholder="Great quality product, worth every penny!&#10;Customer service was unresponsive and slow delivery...&#10;The product works as expected, nothing special."
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 via-yellow-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Analyze Reviews
        </button>
      </form>
    </div>
  );
}