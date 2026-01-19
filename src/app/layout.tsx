import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "OS Academy | Learn & Grow",
    description: "Your learning management platform for tech education",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
