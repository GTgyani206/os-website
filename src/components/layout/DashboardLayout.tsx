'use client';

import Header from './Header';
import PerformanceWidget from '../dashboard/PerformanceWidget';

interface DashboardLayoutProps {
    children: React.ReactNode;
    showPerformanceWidget?: boolean;
}

export default function DashboardLayout({
    children,
    showPerformanceWidget = true
}: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="flex">
                {/* Main content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

                {/* Right sidebar - Performance widget */}
                {showPerformanceWidget && (
                    <aside className="w-80 p-6 hidden lg:block">
                        <PerformanceWidget />
                    </aside>
                )}
            </div>
        </div>
    );
}
