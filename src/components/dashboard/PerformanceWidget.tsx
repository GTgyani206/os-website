'use client';
import { motion } from 'framer-motion';
import { Flame, Award, Clock, Code, FolderKanban, RefreshCw, ChevronRight } from 'lucide-react';
import { ProgressCircle } from '@/components/ui';

export default function PerformanceWidget() {
    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <BatchInfo />
            <PerformanceSection />
        </motion.div>
    );
}

function BatchInfo() {
    return (
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <p className="text-xs text-gray-500"><span className="font-medium text-gray-700">Batch:</span> DSML June22 Intermediate</p>
            <p className="text-xs text-gray-500"><span className="font-medium text-gray-700">Schedule:</span> Mon 09:00 PM | Wed 09:00 PM | Fri 09:00 PM</p>
        </div>
    );
}

function PerformanceSection() {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2"><span className="text-lg">📊</span><h3 className="font-semibold text-gray-900">Performance</h3></div>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg"><RefreshCw className="w-4 h-4 text-gray-400" /></button>
            </div>
            <p className="text-xs text-gray-400 mb-4">Updated every 30 mins</p>

            <StatRow label="Rank" sublabel="PSP: 72.8%" icon={<Flame className="w-4 h-4 text-orange-500" />} value="9" color="text-orange-500" />
            <StatRow label="Skill Certificates" icon={<Award className="w-4 h-4 text-blue-500" />} value="5" color="text-blue-500" />

            <div className="py-3 border-b border-gray-100">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                        <span className="inline-block px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded mb-1">COMPLETE</span>
                        <p className="text-sm text-gray-700">Access your Eligible Jobs</p>
                    </div>
                    <button className="text-blue-600 text-sm font-medium">Apply now</button>
                </div>
            </div>

            <ProgressRow label="Attendance" icon={<Clock className="w-4 h-4 text-gray-400" />} value={61} color="#22c55e" />
            <ProgressRow label="Problem Solving" icon={<Code className="w-4 h-4 text-gray-400" />} value={72} color="#3b82f6" />

            <div className="py-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2"><FolderKanban className="w-4 h-4 text-gray-400" /><p className="text-sm text-gray-700 font-medium">Projects</p></div>
                    <span className="text-sm font-semibold text-gray-700">51%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '51%' }} transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
                </div>
            </div>

            <a href="#" className="flex items-center justify-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 mt-2">
                View Full Profile<ChevronRight className="w-4 h-4" />
            </a>
        </div>
    );
}

function StatRow({ label, sublabel, icon, value, color }: { label: string; sublabel?: string; icon: React.ReactNode; value: string; color: string }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div><p className="text-sm text-gray-700 font-medium">{label}</p>{sublabel && <p className="text-xs text-gray-400">{sublabel}</p>}</div>
            <div className="flex items-center gap-1">{icon}<span className={`text-2xl font-bold ${color}`}>{value}</span></div>
        </div>
    );
}

function ProgressRow({ label, icon, value, color }: { label: string; icon: React.ReactNode; value: number; color: string }) {
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">{icon}<p className="text-sm text-gray-700 font-medium">{label}</p></div>
            <div className="flex items-center gap-3">
                <ProgressCircle value={value} size={40} strokeWidth={3} color={color} />
                <div className="flex items-center gap-1 text-xs text-gray-400"><Flame className="w-3 h-3 text-orange-400" /><span>0</span></div>
            </div>
        </div>
    );
}
