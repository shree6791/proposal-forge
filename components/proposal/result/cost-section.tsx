"use client";

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

interface CostSectionProps {
  costs: {
    monthlyCost: number;
    year1Cost: number;
    year2Cost: number;
    year3Cost: number;
  };
}

export function CostSection({ costs }: CostSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-green-600" />
        Cost Breakdown
      </h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="grid md:grid-cols-3 divide-x divide-gray-200">
          {[
            {
              label: "Monthly Cost",
              value: costs.monthlyCost,
              icon: DollarSign,
              color: "text-blue-600",
              bgColor: "bg-blue-50"
            },
            {
              label: "Annual Cost (Year 1)",
              value: costs.year1Cost,
              icon: Calendar,
              color: "text-purple-600",
              bgColor: "bg-purple-50"
            },
            {
              label: "3-Year Projection",
              value: costs.year3Cost,
              icon: TrendingUp,
              color: "text-indigo-600",
              bgColor: "bg-indigo-50"
            }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.bgColor} ${item.color} text-sm font-medium mb-4`}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
              <p className={`text-3xl font-bold ${item.color}`}>
                ${item.value.toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Pricing Notes:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              All prices exclude VAT and local taxes
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
              Year 2 and 3 pricing valid with 3-year contract
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
              Includes productivity improvements over time
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}