'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, FileQuestion, Play } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ExploreCards from '@/components/dashboard/ExploreCards';
import PracticeSection from '@/components/dashboard/PracticeSection';
import ReferralBanner from '@/components/dashboard/ReferralBanner';
import DiscussionHub from '@/components/dashboard/DiscussionHub';

const quickLinks = [
    { href: '/curriculum', icon: BookOpen, label: 'Core Curriculum', color: 'bg-blue-500' },
    { href: '/career', icon: GraduationCap, label: 'Career Track', color: 'bg-purple-500' },
    { href: '/assignment/1', icon: FileQuestion, label: 'Assignments', color: 'bg-green-500' },
    { href: '/session/1', icon: Play, label: 'Latest Session', color: 'bg-orange-500' },
];

export default function Home() {
    return (
        <DashboardLayout>
            <QuickLinks />
            <ExploreCards />
            <PracticeSection />
            <ReferralBanner />
            <DiscussionHub />
        </DashboardLayout>
    );
}

function QuickLinks() {
    return (
        <div className="grid grid-cols-4 gap-4 mb-8">
            {quickLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link href={link.href} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow group">
                        <div className={`w-10 h-10 ${link.color} rounded-lg flex items-center justify-center`}>
                            <link.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">{link.label}</span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
