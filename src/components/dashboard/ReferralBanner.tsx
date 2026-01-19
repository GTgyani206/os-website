'use client';
import { motion } from 'framer-motion';

export default function ReferralBanner() {
    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-xl mb-8"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="relative z-10 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">Transform lives! Refer friends to OS.</h2>
                    <p className="text-white/80 mb-4">Help your friends join our Data Science & ML or other programs. You earn rewards while helping them succeed.</p>
                    <div className="flex flex-wrap gap-3">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            className="px-5 py-2.5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100">Know More</motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            className="px-5 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">Rewards Calculator</motion.button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <BenefitBox title="You get" items={['₹12,000 cash', '200 coins', 'Good Karma']} />
                    <BenefitBox title="They get" items={['₹10,000 discount', 'Best Learning']} />
                </div>
            </div>
        </motion.section>
    );
}

function BenefitBox({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="bg-white/95 rounded-lg p-4 min-w-[140px]">
            <p className="text-xs text-gray-500 font-medium mb-2">{title}</p>
            <ul className="space-y-1.5">
                {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500">✓</span>{item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
