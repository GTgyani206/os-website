'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Lightbulb, MessageSquare, X, ChevronLeft } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Badge } from '@/components/ui';
import { mcqOptions } from '@/data/mockData';

const problemList = Array.from({ length: 11 }, (_, i) => ({ id: i + 1, solved: i < 8 }));

export default function ProblemPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>('c');
    const [showCompanion, setShowCompanion] = useState(true);

    return (
        <DashboardLayout showPerformanceWidget={false}>
            <PageHeader />
            <TabsSection />
            <div className="flex gap-6">
                <ProblemSidebar problems={problemList} />
                <QuestionPanel />
                <OptionsPanel options={mcqOptions} selected={selectedOption} onSelect={setSelectedOption} />
                {showCompanion && <CompanionTooltip onClose={() => setShowCompanion(false)} />}
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
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <span className="text-lg">🤖</span>
                    <span className="font-medium">Ask Companion</span>
                </motion.button>
            </div>
        </div>
    );
}

function TabsSection() {
    return (
        <div className="flex gap-4 mb-6 border-b border-gray-200">
            <button className="px-4 py-2 text-sm font-medium text-gray-500 border-b-2 border-transparent">Session 100%</button>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Assignment 15/15 🔓</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 flex items-center gap-2">
                Additional Problems <Badge variant="amber">New</Badge>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500">Feedback 🔓</button>
        </div>
    );
}

function ProblemSidebar({ problems }: { problems: { id: number; solved: boolean }[] }) {
    return (
        <div className="w-16 flex flex-col gap-1">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-medium">All</div>
            {problems.map((p) => (
                <motion.button key={p.id} whileHover={{ scale: 1.05 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${p.id === 1 ? 'bg-blue-500 text-white' : p.solved ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    Q{p.id}
                </motion.button>
            ))}
        </div>
    );
}

function QuestionPanel() {
    return (
        <div className="flex-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-gray-900">Q1. sum in tuple</h2>
                        <Badge variant="green">✓ Solved</Badge>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded"><Bookmark className="w-4 h-4 text-gray-400" /></button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Lightbulb className="w-4 h-4" />
                    <span>Using hints except Complete Solution is Penalty free now</span>
                    <a href="#" className="text-blue-600 hover:underline ml-auto">Use Hint</a>
                </div>
                <p className="text-gray-700 mb-4">Which of the options is correct about the following code snippet?</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-100">
                    <div><span className="text-blue-400">lis</span> = [(<span className="text-amber-400">0</span>, <span className="text-amber-400">2</span>), (<span className="text-amber-400">1</span>, <span className="text-amber-400">3</span>), (<span className="text-amber-400">2</span>, <span className="text-amber-400">4</span>)]</div>
                    <div><span className="text-blue-400">result</span> = <span className="text-purple-400">sum</span> (n <span className="text-pink-400">for</span> _, n <span className="text-pink-400">in</span> lis)</div>
                    <div><span className="text-purple-400">print</span>(result)</div>
                </div>
            </motion.div>
        </div>
    );
}

function OptionsPanel({ options, selected, onSelect }: { options: typeof mcqOptions; selected: string | null; onSelect: (id: string) => void }) {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-96 bg-blue-50 rounded-xl p-6">
            <p className="text-sm text-gray-600 mb-4">Choose the correct answer from below:</p>
            <div className="space-y-3">
                {options.map((opt) => (
                    <motion.label key={opt.id} whileHover={{ scale: 1.01 }}
                        className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-colors ${selected === opt.id ? (opt.correct ? 'bg-blue-200 border border-blue-400' : 'bg-white border border-gray-300') : 'bg-white border border-gray-200 hover:border-gray-300'}`}>
                        <input type="radio" name="answer" checked={selected === opt.id} onChange={() => onSelect(opt.id)} className="mt-1" />
                        <span className="text-sm text-gray-700">{opt.text}</span>
                    </motion.label>
                ))}
            </div>
            <div className="flex items-center justify-end gap-4 mt-6">
                <span className="text-sm text-gray-500">Your Score: 10</span>
                <span className="text-sm text-gray-500">Max Score: 10</span>
            </div>
        </motion.div>
    );
}

function CompanionTooltip({ onClose }: { onClose: () => void }) {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="fixed top-24 right-6 bg-blue-600 text-white rounded-lg p-4 shadow-lg max-w-xs">
            <button onClick={onClose} className="absolute top-2 right-2"><X className="w-4 h-4" /></button>
            <p className="text-sm">Hello! Your OS Companion is now available here. Click for help!</p>
        </motion.div>
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
            <Link href="/assignment/1" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ChevronLeft className="w-4 h-4" />Back to Assignment
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-700">
                Back to Dashboard
            </Link>
        </div>
    );
}
