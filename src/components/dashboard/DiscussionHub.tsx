'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { discussions } from '@/data/mockData';
import { Badge } from '@/components/ui';

export default function DiscussionHub() {
    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Badge variant="red">NEW</Badge>
                    <h2 className="text-xl font-semibold text-gray-900">Discussion Hub</h2>
                </div>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                    All Posts<ChevronRight className="w-4 h-4" />
                </a>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🎯</span>
                        <p className="text-sm text-gray-600">Boost your preparation with real interview questions</p>
                    </div>
                    <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">View Interview Experiences</a>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="text-xs text-gray-500 uppercase tracking-wider">
                            <th className="text-left py-3 px-4 font-medium"></th>
                            <th className="text-center py-3 px-4 font-medium">Created By</th>
                            <th className="text-center py-3 px-4 font-medium">Views</th>
                            <th className="text-center py-3 px-4 font-medium">Replies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {discussions.map((item, i) => (
                            <motion.tr key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                                className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer">
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-8 rounded-full bg-yellow-400" />
                                        <span className="text-sm text-gray-700 hover:text-blue-600">{item.title}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <div className={`w-8 h-8 ${item.author.color} rounded-full flex items-center justify-center text-white text-sm font-medium mx-auto`}>
                                        {item.author.initial}
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-center text-sm text-gray-600">{item.views.toLocaleString()}</td>
                                <td className="py-3 px-4 text-center text-sm text-gray-600">{item.replies}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.section>
    );
}
