'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Gift, Sparkles, BookOpen, GraduationCap, Users, Monitor, FileQuestion, Briefcase, MessageSquare, Trophy, Target, Lightbulb, Award, Calendar, Video, UserCircle, FileText, BookMarked, PartyPopper, ChevronRight } from 'lucide-react';

interface SidebarProps { isOpen: boolean; onClose: () => void }

const menuData = {
    main: [
        { icon: Home, label: 'Home', href: '/' },
        { icon: Gift, label: 'Join Referral Program', href: '#', badge: 'New' },
        { icon: Sparkles, label: 'Neovarsity', href: '#' },
    ],
    learnPractice: [
        { icon: BookOpen, label: 'Core Skills Curriculum and Classes', subtitle: 'All modules, classes and certifications', href: '/curriculum' },
        { icon: GraduationCap, label: 'Career Curriculum and Classes', subtitle: 'All career related classes', href: '/career' },
        { icon: Users, label: 'Masterclasses and Community Classes', href: '#' },
        { icon: Monitor, label: 'Classroom', href: '#' },
        { icon: FileQuestion, label: 'All Problems & Module Tests', href: '/assignment/1' },
        { icon: Briefcase, label: 'Business Cases', href: '#' },
        { icon: MessageSquare, label: 'Teaching Assistant Help', href: '#' },
        { icon: Trophy, label: 'Leaderboard', href: '#' },
    ],
    placement: [
        { icon: Target, label: 'Careers Hub', href: '#' },
        { icon: Lightbulb, label: 'Job Insights', href: '#', badge: 'New+' },
        { icon: Award, label: 'Skill Certification', subtitle: 'Earn skill certificate', href: '#' },
    ],
    community: [{ icon: MessageSquare, label: 'Discussion Hub', href: '#' }],
    actionCentre: [
        { icon: Calendar, label: 'Change Batch Schedule', href: '#' },
        { icon: Video, label: 'OS Lectures Video Library', href: '#' },
    ],
    more: [
        { icon: UserCircle, label: 'Personal Details', href: '#' },
        { icon: FileText, label: 'Student Policy', href: '#' },
        { icon: BookMarked, label: 'DSML Handbook', href: '#' },
    ],
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
                    <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-hidden flex flex-col">
                        <SidebarHeader onClose={onClose} />
                        <div className="flex-1 overflow-y-auto">
                            <MenuSection items={menuData.main} />
                            <MenuSection title="Learn and Practice" items={menuData.learnPractice} onClose={onClose} />
                            <MenuSection title="Placement" items={menuData.placement} onClose={onClose} />
                            <MenuSection title="Community" items={menuData.community} onClose={onClose} />
                            <MenuSection title="Action Centre" items={menuData.actionCentre} badge="New" onClose={onClose} />
                            <MenuSection title="More" items={menuData.more} onClose={onClose} />
                        </div>
                        <SidebarFooter />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}

function SidebarHeader({ onClose }: { onClose: () => void }) {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">OS</span>
                <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">↗</span>
                </div>
            </div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-500" />
            </motion.button>
        </div>
    );
}

function MenuSection({ title, items, badge, onClose }: { title?: string; items: typeof menuData.main; badge?: string; onClose?: () => void }) {
    return (
        <div className="py-4 border-b border-gray-100">
            {title && (
                <div className="flex items-center gap-2 px-6 mb-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</h3>
                    {badge && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded">{badge}</span>}
                </div>
            )}
            {items.map((item) => (
                <motion.a key={item.label} href={item.href} whileHover={{ x: 4 }}
                    onClick={onClose} className="flex items-center gap-3 px-6 py-2.5 hover:bg-gray-50 group">
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
                    <div className="flex-1">
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{item.label}</span>
                        {'subtitle' in item && item.subtitle && <p className="text-xs text-gray-400">{item.subtitle}</p>}
                    </div>
                    {'badge' in item && item.badge && <span className="px-2 py-0.5 bg-amber-400 text-amber-900 text-xs font-medium rounded">{item.badge}</span>}
                </motion.a>
            ))}
        </div>
    );
}

function SidebarFooter() {
    return (
        <div className="border-t border-gray-100 px-6 py-4">
            <a href="#" className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">What&apos;s new!</span>
                    <PartyPopper className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-sm text-teal-600 group-hover:text-teal-700 flex items-center gap-1">
                    Start tour<ChevronRight className="w-4 h-4" />
                </span>
            </a>
        </div>
    );
}
