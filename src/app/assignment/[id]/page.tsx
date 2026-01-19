'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bookmark, Copy, FileText, MessageSquare } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Badge, Tabs } from '@/components/ui';
import { problems, assignmentTabs } from '@/data/mockData';

export default function AssignmentPage() {
    const [activeTab, setActiveTab] = useState('assignment');
    const [activeProblem, setActiveProblem] = useState<number | null>(null);

    return (
        <DashboardLayout showPerformanceWidget={false}>
            <PageHeader />
            <Tabs tabs={assignmentTabs} activeTab={activeTab} onChange={setActiveTab} layoutId="assignmentTabs" />
            <div className="flex gap-6 mt-6">
                <ProblemSidebar problems={problems} activeProblem={activeProblem} onSelect={setActiveProblem} />
                <ProblemsTable problems={problems} />
                <FloatingButton />
            </div>
            <Navigation />
        </DashboardLayout>
    );
}

function PageHeader() {
    return (
        <div className="bg-white border-b border-gray-200 -mx-6 -mt-6 px-6 py-4 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-gray-500">≡</span>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">Day 3 - DSML Intermediate: Python Refresher 2 ∨</h1>
                        <p className="text-sm text-gray-500">Wed, 20 Apr 2022</p>
                    </div>
                    <Badge variant="amber">Mandatory</Badge>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg">
                        <span className="text-blue-600 font-medium">📊 100%</span>
                        <span className="text-gray-500 text-sm">Class Attendance</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg">
                        <span className="text-amber-600 font-medium">👥 15 / 15</span>
                        <span className="text-gray-500 text-sm">Problems Solved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProblemSidebar({ problems, activeProblem, onSelect }: { problems: typeof import('@/data/mockData').problems; activeProblem: number | null; onSelect: (id: number) => void }) {
    return (
        <div className="w-16 flex flex-col gap-1">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 mb-2">⊙</div>
            <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-medium">All</div>
            {problems.map((p, i) => (
                <motion.button key={p.id} whileHover={{ scale: 1.05 }} onClick={() => onSelect(p.id)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${activeProblem === p.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    Q{i + 1}
                </motion.button>
            ))}
        </div>
    );
}

function ProblemsTable({ problems }: { problems: typeof import('@/data/mockData').problems }) {
    return (
        <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr className="text-xs text-gray-500 uppercase tracking-wider">
                        <th className="text-left py-3 px-4 font-medium">⊙</th>
                        <th className="text-left py-3 px-4 font-medium">Name</th>
                        <th className="text-center py-3 px-4 font-medium">Type</th>
                        <th className="text-center py-3 px-4 font-medium">Difficulty</th>
                        <th className="text-center py-3 px-4 font-medium">Score</th>
                        <th className="text-center py-3 px-4 font-medium">Status</th>
                        <th className="text-center py-3 px-4 font-medium">Submissions</th>
                        <th className="text-center py-3 px-4 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((p, i) => (
                        <motion.tr key={p.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}
                            className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer">
                            <td className="py-3 px-4 text-gray-400">Q{i + 1}</td>
                            <td className="py-3 px-4 text-sm text-gray-700">{p.name}</td>
                            <td className="py-3 px-4 text-center"><TypeIcon /></td>
                            <td className={`py-3 px-4 text-center text-sm font-medium ${p.difficulty === 'Easy' ? 'text-green-600' : 'text-amber-600'}`}>{p.difficulty}</td>
                            <td className="py-3 px-4 text-center text-sm">{p.score}</td>
                            <td className="py-3 px-4 text-center"><Badge variant="green">✓ Solved</Badge></td>
                            <td className="py-3 px-4 text-center"><a href="#" className="text-blue-600 text-sm hover:underline">{p.submissions} submissions</a></td>
                            <td className="py-3 px-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button className="p-1.5 hover:bg-gray-100 rounded"><Bookmark className="w-4 h-4 text-gray-400" /></button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded"><Copy className="w-4 h-4 text-gray-400" /></button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded"><FileText className="w-4 h-4 text-gray-400" /></button>
                                    <Link href="/problem/1" className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600">Solve</Link>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500">All problems are mandatory and count towards your PSP</p>
            </div>
        </div>
    );
}

function TypeIcon() {
    return (
        <span className="grid grid-cols-2 gap-0.5 mx-auto w-fit">
            {[1, 2, 3, 4].map(i => <span key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-sm" />)}
        </span>
    );
}

function FloatingButton() {
    return (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600">
            <MessageSquare className="w-6 h-6" />
        </motion.button>
    );
}

function Navigation() {
    return (
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <Link href="/session/1" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ChevronLeft className="w-4 h-4" />Back to Session
            </Link>
            <Link href="/problem/1" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                Solve Problems<ChevronRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
