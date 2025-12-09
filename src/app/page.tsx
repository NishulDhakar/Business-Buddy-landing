'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { DashboardPreview } from '../components/DashboardPreview';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

// SVG Background Pattern Component
const BackgroundPattern = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid Lines */}
        <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100H1440" stroke="black" strokeWidth="1" />
            <path d="M0 300H1440" stroke="black" strokeWidth="1" />
            <path d="M0 500H1440" stroke="black" strokeWidth="1" />
            <path d="M0 700H1440" stroke="black" strokeWidth="1" />
            <path d="M100 0V1000" stroke="black" strokeWidth="1" />
            <path d="M300 0V1000" stroke="black" strokeWidth="1" />
            <path d="M500 0V1000" stroke="black" strokeWidth="1" />
            <path d="M700 0V1000" stroke="black" strokeWidth="1" />
            <path d="M900 0V1000" stroke="black" strokeWidth="1" />
            <path d="M1100 0V1000" stroke="black" strokeWidth="1" />
            <path d="M1300 0V1000" stroke="black" strokeWidth="1" />
        </svg>

        {/* Connection Nodes */}
        <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-gray-200 rounded-full"></div>
        <div className="absolute top-[25%] right-[20%] w-3 h-3 bg-gray-200 rounded-full"></div>
        <div className="absolute bottom-[40%] left-[30%] w-2 h-2 bg-gray-200 rounded-full"></div>

        {/* Connecting Lines (Simulated) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none">
            <path d="M200 200 C 400 200, 400 400, 600 400" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="6 6" />
            <path d="M1200 300 C 1000 300, 1000 500, 800 500" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        </svg>

        {/* Gradient Blurs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px]"></div>
    </div>
);

const IntegrationIcon = ({ src, delay }: { src: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 relative z-10"
    >
        <img src={src} alt="Integration" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
    </motion.div>
);

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-sans text-text-main relative overflow-x-hidden">
            <Navbar />

            <main className="relative pt-16 pb-32">
                {/* <BackgroundPattern /> */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Hero Content */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6 text-primary"
                        >
                            Your Business Needs, <br />
                            in One Smart Platform
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Business Buddy helps you manage operations, track performance, automate workflows, and grow faster all from one powerful dashboard.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                                Start Free Trial
                            </button>
                            <button className="w-full sm:w-auto bg-white text-primary border border-gray-200 px-8 py-3.5 rounded-xl text-base font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
                                Explore Platform
                            </button>
                        </motion.div>
                    </div>

                    {/* Integrations Row */}
                    <div className="text-center mb-6">
                        <p className="text-sm text-text-secondary font-medium">Seamlessly integrates with your favorite tools</p>
                    </div>
                    <div className="flex justify-center gap-4 md:gap-8 mb-20">
                        {/* Using placeholder logos for demonstration */}
                        <IntegrationIcon delay={0.4} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
                        <IntegrationIcon delay={0.55} src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" />
                        <IntegrationIcon delay={0.6} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" />
                    </div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mx-auto max-w-6xl"
                    >
                        {/* Glow Effect behind dashboard */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur opacity-20"></div>
                        <DashboardPreview />
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
