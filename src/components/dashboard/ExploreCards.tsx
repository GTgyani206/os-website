'use client';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Target, Briefcase } from 'lucide-react';

const cards = [
    { id: 1, badge: 'MS Degree from WOOLF University', badgeColor: 'bg-orange-500', title: 'Level Up with an MS Degree', tag: 'Masters', icon: GraduationCap, color: 'from-orange-900/80 via-amber-900/60 to-slate-900', glow: 'rgba(249, 115, 22, 0.3)' },
    { id: 2, badge: 'Start Applying', badgeColor: 'bg-teal-500', title: 'Start Your Placement Journey', tag: 'Careers Hub', icon: Target, color: 'from-blue-900/80 via-cyan-900/60 to-slate-900', glow: 'rgba(0, 212, 170, 0.3)' },
    { id: 3, badge: 'OS School of Business', badgeColor: 'bg-emerald-600', title: 'Build Your Leadership Career', tag: 'SSB', icon: Briefcase, color: 'from-emerald-900/80 via-green-900/60 to-slate-900', glow: 'rgba(16, 185, 129, 0.3)' },
];

export default function ExploreCards() {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore OS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card, i) => (
                    <motion.div key={card.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }} className="relative overflow-hidden rounded-xl h-56 cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', boxShadow: `0 4px 30px ${card.glow}` }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-80`}></div>
                        <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                            <span className={`inline-flex self-start px-2.5 py-1 ${card.badgeColor} text-white text-xs font-medium rounded`}>{card.badge}</span>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-1.5 text-white/80 text-sm">
                                        <card.icon className="w-4 h-4" />{card.tag}
                                    </span>
                                    <motion.button whileHover={{ x: 4 }} className="flex items-center gap-1 text-white text-sm font-medium">
                                        Know More<ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
