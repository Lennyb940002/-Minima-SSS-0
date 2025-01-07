// components/stock/StockSummaryCard.tsx
import React from 'react';

interface StockSummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export function StockSummaryCard({ title, value, icon }: StockSummaryCardProps) {
  return (
    <div className="bg-black rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-300 text-sm">{title}</h3>
        {icon}
      </div>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  );
}
