'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Changelog', href: '#changelog' },
    ],
    company: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Partners', href: '#partners' },
    ],
    resources: [
        { name: 'Docs', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'API', href: '#api' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Security', href: '#security' },
    ],
};

const socialLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export const Footer = () => {
    return (
        <footer className="bg-background-pure">
            {/* Subtle gradient background */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 opacity-50 pointer-events-none" /> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block group">
                            <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent-blue transition-colors">
                                Business Buddy
                            </h3>
                        </Link>
                        <p className="text-sm text-text-secondary leading-relaxed mb-6">
                            Business Buddy empowers modern businesses with tools to manage, automate, and scale, all from one simple platform.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-text-secondary hover:text-primary hover:bg-accent-cyan/10 hover:shadow-md transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <span className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                            Product
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-text-secondary">
                            © {new Date().getFullYear()} Business Buddy. All rights reserved.
                        </p>

                        {/* Newsletter/CTA */}
                        <div className="flex items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all w-48"
                            />
                            <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient orbs */}
            {/* <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-cyan/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px] pointer-events-none" /> */}
        </footer>
    );
};
