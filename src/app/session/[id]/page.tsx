'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { SessionCard, Badge, Card } from '@/components/ui';
import { similarSessions } from '@/data/mockData';

export default function SessionPage() {
    return (
        <DashboardLayout showPerformanceWidget={false}>
            <PageHeader />
            <VideoSection />
            <CoinsSection />
            <LectureNotes />
            <SimilarSessions />
            <AssignmentFeedback />
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
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-orange-500">🔥 0</span>
                        <span className="text-orange-500">9 hours left</span>
                    </div>
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

function VideoSection() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-100 to-cyan-50 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-8">
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-64 h-40 flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                        <p className="text-xs opacity-80 mb-2">20 Apr 2022</p>
                        <h3 className="font-semibold mb-1">DSML Intermediate:</h3>
                        <p className="text-sm">Python Refresher</p>
                    </div>
                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                    </button>
                </div>
                <div className="flex-1">
                    <Badge variant="red" className="mb-3">Session Recording</Badge>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">DSML Intermediate: Python Refresher 2</h2>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <Calendar className="w-4 h-4" /><span>9:00 PM Wed, 20 Apr</span>
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
                        Watch Recording
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

function CoinsSection() {
    return (
        <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-xs">🪙</span>
                <span className="font-medium text-gray-700">8 Coins</span>
                <span className="text-green-500">✓</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs">🪙</span>
                <span className="font-medium text-gray-700">3 Coins</span>
                <span className="text-green-500">✓</span>
            </div>
        </div>
    );
}

function LectureNotes() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
                <span>📄</span>
                <h3 className="font-semibold text-gray-900">Lecture Notes</h3>
                <span className="text-green-500">✓</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Download instructor notes from here</p>
            <div className="flex gap-3">
                <a href="#" className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                    <Download className="w-4 h-4" />Python_refr...
                </a>
            </div>
        </motion.div>
    );
}

function SimilarSessions() {
    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sessions similar to this:</h3>
            <div className="grid grid-cols-4 gap-4">
                {similarSessions.map((session, i) => (
                    <motion.div key={session.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                        <SessionCard {...session} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

function AssignmentFeedback() {
    return (
        <>
            <Card className="p-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-3xl">🐼</span>
                    <div>
                        <h4 className="font-semibold text-gray-900">Assignment 🔓</h4>
                        <p className="text-sm text-gray-600">Kudos to your consistency! have solved 15/15 problems</p>
                    </div>
                </div>
                <Link href="/assignment/1" className="text-blue-600 font-medium hover:text-blue-700">Start Solving</Link>
            </Card>
            <Card className="p-4 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-3xl">🐼</span>
                    <div>
                        <h4 className="font-semibold text-gray-900">Feedback</h4>
                        <p className="text-sm text-gray-600">Thank you for sharing feedback.</p>
                    </div>
                </div>
                <Link href="/" className="text-blue-600 font-medium hover:text-blue-700">View Feedback</Link>
            </Card>
        </>
    );
}

function Navigation() {
    return (
        <div className="flex items-center justify-between">
            <Link href="/curriculum" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ChevronLeft className="w-4 h-4" />Back to Curriculum
            </Link>
            <Link href="/assignment/1" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                Go to Assignment<ChevronRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
