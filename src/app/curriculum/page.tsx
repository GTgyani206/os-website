'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Badge, ProgressCircle, Card } from '@/components/ui';
import { modules, curriculumClasses, curriculumTabs } from '@/data/mockData';

export default function CurriculumPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedModule, setExpandedModule] = useState<number | null>(2);

    return (
        <DashboardLayout showPerformanceWidget={false}>
            <TabNav tabs={curriculumTabs} activeTab={activeTab} onChange={setActiveTab} />
            <InfoBanner />
            <div className="flex gap-6">
                <ModulesSidebar modules={modules} expandedModule={expandedModule} onSelect={setExpandedModule} />
                <MainContent />
                <CreditsWidget />
            </div>
        </DashboardLayout>
    );
}

function TabNav({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: number; onChange: (i: number) => void }) {
    return (
        <div className="bg-white border-b border-gray-200 -mx-6 -mt-6 px-6 mb-6">
            <div className="flex items-center gap-6 overflow-x-auto">
                {tabs.map((tab, i) => (
                    <button key={tab} onClick={() => onChange(i)}
                        className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === i ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        {tab}{tab === 'Degree Evaluation' && <Badge variant="red" className="ml-1">NEW</Badge>}
                    </button>
                ))}
            </div>
        </div>
    );
}

function InfoBanner() {
    return (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-blue-600">ℹ️</span>
                <p className="text-sm text-blue-800">Hey! You can now check your Archived classes from here</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
        </motion.div>
    );
}

function ModulesSidebar({ modules, expandedModule, onSelect }: { modules: typeof import('@/data/mockData').modules; expandedModule: number | null; onSelect: (id: number) => void }) {
    return (
        <div className="w-72 flex-shrink-0">
            {modules.map((m, i) => (
                <motion.div key={m.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                    onClick={() => onSelect(m.id)}
                    className={`mb-4 p-4 rounded-lg border cursor-pointer ${expandedModule === m.id ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                    <p className="text-xs text-gray-500 font-medium">MODULE - {m.number}</p>
                    <h4 className={`font-medium ${expandedModule === m.id ? 'text-blue-700' : 'text-gray-900'}`}>{m.title}</h4>
                    <p className={`text-xs mb-3 ${expandedModule === m.id ? 'text-blue-600' : 'text-gray-500'}`}>{m.subtitle}</p>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Classes</span>
                        <Badge variant="green">✓ Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>○ Mock Interview</span>
                        <span>{m.mockInterview.status}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function MainContent() {
    return (
        <div className="flex-1">
            <Card className="p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-1">MODULE - 2 &nbsp; 4 weeks</p>
                        <h2 className="text-xl font-semibold text-gray-900">Introduction to Problem Solving (Intermediate) 1</h2>
                        <p className="text-sm text-gray-500 mt-1">Introduction to Problem-Solving Techniques: Part 1</p>
                    </div>
                </div>
                <div className="flex items-center gap-8 mb-4">
                    <div className="text-center">
                        <ProgressCircle value={100} size={64} strokeWidth={4} />
                        <p className="text-xs text-gray-500 mt-2">Module PSP</p>
                    </div>
                    <div className="text-center">
                        <ProgressCircle value={100} size={64} strokeWidth={4} />
                        <p className="text-xs text-gray-500 mt-2">Attendance</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-semibold">Research Paper</p>
                        <p className="text-xs text-gray-500">3 of 3 done</p>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Score Calculation</h4>
                        <div className="flex gap-2 mb-2">
                            <div className="h-2 flex-1 bg-green-500 rounded" />
                            <div className="h-2 flex-1 bg-blue-500 rounded" />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>PSP - 40%</span><span>Exams - 60%</span>
                        </div>
                    </div>
                </div>
            </Card>
            <ClassesTable />
        </div>
    );
}

function ClassesTable() {
    return (
        <Card className="overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr className="text-xs text-gray-500 uppercase tracking-wider">
                        <th className="text-left py-3 px-4 font-medium"></th>
                        <th className="text-left py-3 px-4 font-medium"></th>
                        <th className="text-center py-3 px-4 font-medium">Lecture</th>
                        <th className="text-center py-3 px-4 font-medium">Assignment</th>
                        <th className="text-center py-3 px-4 font-medium"></th>
                    </tr>
                </thead>
                <tbody>
                    {curriculumClasses.map((c, i) => (
                        <motion.tr key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
                            className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer">
                            <td className="py-3 px-4 text-sm text-gray-500 whitespace-nowrap">{c.day}</td>
                            <td className="py-3 px-4">
                                <span className="text-sm text-gray-900">{c.title}</span>
                                {c.type && <Badge variant="blue" className="ml-2">{c.type}</Badge>}
                            </td>
                            <td className={`py-3 px-4 text-center text-sm ${c.lecture === '100.0%' ? 'text-green-600 font-medium' : 'text-gray-400'}`}>{c.lecture}</td>
                            <td className={`py-3 px-4 text-center text-sm ${c.assignment ? 'text-green-600 font-medium' : 'text-gray-400'}`}>{c.assignment || '-'}</td>
                            <td className="py-3 px-4 text-center"><ChevronRight className="w-4 h-4 text-gray-400" /></td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

function CreditsWidget() {
    return (
        <div className="w-72 flex-shrink-0">
            <Card className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Earn Credits & Workload Hours</h3>
                <p className="text-sm text-gray-600 mb-4">To Earn credits -</p>
                <ol className="text-sm text-gray-600 space-y-2">
                    <li>1) Attend Lectures</li>
                    <li>2) Solve Assignments</li>
                    <li>3) Read Research Papers</li>
                    <li>4) Pass Tests and Mock Interviews</li>
                </ol>
                <a href="#" className="block mt-4 text-blue-600 text-sm font-medium hover:text-blue-700">View Workload Progress</a>
            </Card>
        </div>
    );
}
