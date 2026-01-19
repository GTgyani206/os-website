'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, ChevronDown, Clock } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, Badge } from '@/components/ui';
import { mentorSessions, careerModules } from '@/data/mockData';

export default function CareerPage() {
    return (
        <DashboardLayout showPerformanceWidget={false}>
            <PageTitle />
            <div className="flex gap-8">
                <LeftColumn />
                <RightColumn />
            </div>
        </DashboardLayout>
    );
}

function PageTitle() {
    return (
        <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900 mb-1">Career Track Curriculum and Classes</h1>
            <div className="w-16 h-1 bg-blue-600 rounded" />
        </div>
    );
}

function LeftColumn() {
    return (
        <div className="w-80">
            <Card className="p-4 mb-6 relative overflow-hidden">
                <h3 className="font-semibold text-gray-900 mb-2">Career Counselling</h3>
                <p className="text-sm text-gray-600 mb-3">Get answers to all your career questions and move forward with confidence</p>
                <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700">View all</a>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                </motion.button>
            </Card>
            <ModulesList title="Modules and Classes" modules={careerModules} />
            <ModulesList title="Mandatory Module" modules={[{ id: 1, title: 'Career Readiness and Course Roadmap', subtitle: 'FOR YOU', status: 'Classes in progress' }]} />
        </div>
    );
}

function ModulesList({ title, modules }: { title: string; modules: { id: number; title: string; subtitle?: string; status: string }[] }) {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
            {modules.map((m, i) => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="border-l-2 border-gray-200 pl-4 mb-4">
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            {m.subtitle && <p className="text-xs text-gray-500 font-medium uppercase">{m.subtitle}</p>}
                            <h4 className="font-medium text-gray-900">{m.title}</h4>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />{m.status}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function RightColumn() {
    return (
        <div className="flex-1">
            <ScheduleCard />
            <MentorHistory />
            <CareerClasses />
        </div>
    );
}

function ScheduleCard() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                    <h3 className="font-medium text-gray-900">Schedule Career Session with a Mentor</h3>
                    <p className="text-sm text-gray-500">Get personalised career guidance</p>
                </div>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100">
                Schedule Mentor Session
            </motion.button>
        </motion.div>
    );
}

function MentorHistory() {
    return (
        <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Mentor Session History</h3>
            <div className="space-y-4">
                {mentorSessions.map((s, i) => (
                    <motion.div key={s.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 font-medium uppercase mb-1">MENTOR SESSION - {s.number}</p>
                            <h4 className="text-gray-900">Agenda: {s.agenda}</h4>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            {s.completed && <><span className="text-green-500">✓</span>Session Completed</>}
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function CareerClasses() {
    return (
        <Card className="overflow-hidden">
            <div className="p-4 border-b border-gray-100">
                <p className="text-xs text-gray-500 font-medium uppercase mb-1">MODULE 1</p>
                <h3 className="font-semibold text-gray-900">Career</h3>
            </div>
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer">
                <div>
                    <p className="text-gray-900">Designing the Pathway to Success by Anshuman</p>
                    <Badge variant="gray" className="mt-1">Optional Class</Badge>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">19 FEB</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
            </div>
        </Card>
    );
}
