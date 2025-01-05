import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { TextInput } from './TextInput';

interface InputSectionProps {
  onAnalyze: (text: string) => void;
}

export function InputSection({ onAnalyze }: InputSectionProps) {
  const [text, setText] = useState('');

  const handleFileContent = (content: string) => {
    setText(content);
    onAnalyze(content);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(text);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 backdrop-blur-lg bg-white/90 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Upload Reviews</h2>
        <p className="text-gray-600">Upload your CSV file containing Amazon product reviews</p>
        <FileUpload onFileContent={handleFileContent} />
      </div>
      
      <TextInput 
        text={text} 
        onTextChange={setText} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}