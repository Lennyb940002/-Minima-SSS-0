// components/stock/StockSummaryCard.tsx
import React from 'react';

interface StockSummaryCardProps {
  title: string;
  value: string | number;
}

export function StockSummaryCard({ title, value }: StockSummaryCardProps) {
  return (
    <div className="bg-black rounded-lg p-6 border border-white/10 text-center">
      <div className="flex items-center text-center justify-between mb-2">
        <h3 className="text-gray-300 text-sm text-center">{title}</h3>
      </div>
      <p className="text-white text-2xl font-bold text-center ">{value}</p>
    </div>
  );
}
