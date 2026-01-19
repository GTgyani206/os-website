'use client';
import { motion } from 'framer-motion';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'green' | 'yellow' | 'blue' | 'purple' | 'red' | 'amber' | 'gray';
    className?: string;
}

const variants = {
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-500 text-white',
    amber: 'bg-amber-100 text-amber-700',
    gray: 'bg-gray-100 text-gray-600',
};

export function Badge({ children, variant = 'gray', className = '' }: BadgeProps) {
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}

interface ProgressCircleProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
}

export function ProgressCircle({ value, size = 40, strokeWidth = 3, color = '#3b82f6' }: ProgressCircleProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none" />
                <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none"
                    strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">{value}</span>
        </div>
    );
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export function Card({ children, className = '', animate = true }: CardProps) {
    const Wrapper = animate ? motion.div : 'div';
    const props = animate ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } } : {};
    return <Wrapper {...props} className={`bg-white rounded-xl border border-gray-200 ${className}`}>{children}</Wrapper>;
}

interface SessionCardProps {
    date: string;
    title: string;
    color: string;
    onClick?: () => void;
}

export function SessionCard({ date, title, color, onClick }: SessionCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={onClick}
            className={`relative bg-gradient-to-br ${color} rounded-xl p-4 h-32 cursor-pointer`}
        >
            <p className="text-xs text-white/80 mb-2">{date}</p>
            <h4 className="text-sm font-medium text-white">{title}</h4>
            <motion.button whileHover={{ scale: 1.1 }} className="absolute bottom-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </motion.button>
        </motion.div>
    );
}

interface TabsProps {
    tabs: { id: string; label: string; value?: string; icon?: string; tag?: string }[];
    activeTab: string;
    onChange: (id: string) => void;
    layoutId?: string;
}

export function Tabs({ tabs, activeTab, onChange, layoutId = 'tabs' }: TabsProps) {
    return (
        <div className="flex gap-1 border-b border-gray-200">
            {tabs.map((tab) => (
                <button key={tab.id} onClick={() => onChange(tab.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
                    {tab.label}
                    {tab.value && <span className={`text-xs ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'}`}>{tab.value}</span>}
                    {tab.icon && <span>{tab.icon}</span>}
                    {tab.tag && <span className="px-1.5 py-0.5 bg-amber-400 text-amber-900 text-xs font-medium rounded">{tab.tag}</span>}
                    {activeTab === tab.id && <motion.div layoutId={layoutId} className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                </button>
            ))}
        </div>
    );
}

interface PageHeaderProps {
    title: string;
    subtitle: string;
    badge?: string;
    stats?: { label: string; value: string; icon?: string; bg?: string }[];
}

export function PageHeader({ title, subtitle, badge, stats }: PageHeaderProps) {
    return (
        <div className="bg-white border-b border-gray-200 -mx-6 -mt-6 px-6 py-4 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-gray-500">≡</span>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
                        <p className="text-sm text-gray-500">{subtitle}</p>
                    </div>
                    {badge && <Badge variant="amber">{badge}</Badge>}
                </div>
                {stats && (
                    <div className="flex items-center gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${stat.bg || 'bg-gray-50'}`}>
                                {stat.icon && <span>{stat.icon}</span>}
                                <span className="font-medium">{stat.value}</span>
                                <span className="text-gray-500 text-sm">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
