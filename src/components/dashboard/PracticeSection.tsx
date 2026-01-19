'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const tabs = [
    { id: 'left', label: 'Pick Where You Left' },
    { id: 'unlocked', label: 'Newly Unlocked' },
    { id: 'easy', label: 'Easy Picks' },
    { id: 'business', label: 'Business Case' },
];

export default function PracticeSection() {
    const [activeTab, setActiveTab] = useState('left');

    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Practice</h2>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                    All Problems<ChevronRight className="w-4 h-4" />
                </a>
            </div>
            <div className="flex gap-1 mb-6 border-b border-gray-200">
                {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                        {tab.label}
                        {activeTab === tab.id && <motion.div layoutId="practiceTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                    </button>
                ))}
            </div>
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <div className="flex flex-col items-center justify-center">
                    <span className="text-4xl mb-3">😊</span>
                    <p className="text-gray-500">There are no problems to solve right now!</p>
                </div>
            </motion.div>
        </section>
    );
}
