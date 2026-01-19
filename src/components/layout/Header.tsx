'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, Gift, Flame, Coins, Bell, HelpCircle, ChevronDown, User } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between h-14 px-4">
                    <LeftSection onMenuClick={() => setSidebarOpen(true)} />
                    <RightSection userMenuOpen={userMenuOpen} onUserClick={() => setUserMenuOpen(!userMenuOpen)} />
                </div>
            </header>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
}

function LeftSection({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <div className="flex items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onMenuClick}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu className="w-5 h-5 text-gray-700" />
            </motion.button>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>Course Active
                </span>
                <a href="#" className="text-sm text-blue-600 hover:underline">Manage Batch/Timings &gt;</a>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Search className="w-5 h-5 text-gray-500" /></button>
            <span className="text-xl font-bold text-gray-800">W</span>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-full hover:bg-gray-50">
                <Gift className="w-4 h-4 text-amber-500" /><span className="text-sm font-medium">Refer & Earn</span>
            </motion.button>
        </div>
    );
}

function RightSection({ userMenuOpen, onUserClick }: { userMenuOpen: boolean; onUserClick: () => void }) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
                <Flame className="w-4 h-4 text-orange-500" /><span className="font-medium">0</span>
                <span className="text-orange-500 font-medium">9 hours left</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
                <Coins className="w-4 h-4 text-amber-500" /><span className="font-semibold text-gray-700">3863</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><User className="w-5 h-5 text-red-500" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg"><Bell className="w-5 h-5 text-gray-500" /></button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full hover:bg-gray-200">
                <HelpCircle className="w-4 h-4 text-gray-600" /><span className="text-sm font-medium">Ask Support</span>
            </motion.button>
            <UserMenu open={userMenuOpen} onClick={onUserClick} />
        </div>
    );
}

function UserMenu({ open, onClick }: { open: boolean; onClick: () => void }) {
    return (
        <div className="relative">
            <motion.button whileHover={{ scale: 1.02 }} onClick={onClick}
                className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium text-sm">L</div>
                <span className="text-sm font-medium">Lorem</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </motion.button>
            <AnimatePresence>
                {open && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50">Settings</a>
                        <hr className="my-2" />
                        <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
