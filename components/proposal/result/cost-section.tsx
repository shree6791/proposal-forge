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
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-semibold">Cost Breakdown</h3>
      </div>

      {/* Cost Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "Monthly Cost",
            value: costs.monthlyCost,
            icon: DollarSign,
            gradient: "from-blue-600 to-purple-600",
            metric: "per month"
          },
          {
            label: "Year 1 Total",
            value: costs.year1Cost,
            icon: Calendar,
            gradient: "from-purple-600 to-pink-600",
            metric: "first year"
          },
          {
            label: "3-Year Projection",
            value: costs.year3Cost,
            icon: TrendingUp,
            gradient: "from-pink-600 to-red-600",
            metric: "by year 3"
          }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-medium mb-2`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </div>
            <div>
              <p className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                ${item.value.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">{item.metric}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing Notes - Responsive Layout */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Pricing Notes:</h4>
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
            <span className="text-gray-600">All prices exclude VAT and local taxes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0" />
            <span className="text-gray-600">Year 2 and 3 pricing valid with 3-year contract</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0" />
            <span className="text-gray-600">Includes productivity improvements over time</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}