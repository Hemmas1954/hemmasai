import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Automated Lead Qualification',
        category: 'Sales Automation',
        description: 'A comprehensive n8n workflow that captures leads, enriches data via Clearbit, scores them using OpenAI, and routes qualified leads to Salesforce.',
        results: ['85% less manual work', '10x faster response', '$4k/mo saved'],
        tech: ['n8n', 'OpenAI', 'Salesforce'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    },
    {
        title: 'AI Customer Support Agent',
        category: 'Customer Service',
        description: 'Custom RAG-based chatbot integrated with Zendesk. It handles L1 support queries automatically, resolving 60% of tickets without human intervention.',
        results: ['60% auto-resolution', '24/7 availability', '+15% CSAT score'],
        tech: ['Python', 'LangChain', 'Pinecone'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop'
    },
    {
        title: 'E-commerce Inventory Sync',
        category: 'Operations',
        description: 'Real-time inventory synchronization system between Shopify, Amazon, and local ERP. Prevents overselling and automates reordering.',
        results: ['Zero stockouts', 'Auto PO generation', 'Real-time dashboard'],
        tech: ['Airtable', 'Shopify', 'AWS Lambda'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
    }
];

const Projects = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span>PORTFOLIO</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-white">Work</span></h2>
                    <p className="text-gray-400">
                        Real-world solutions delivering measurable business impact through automation and AI.
                    </p>
                </div>
                <a href="#" className="btn btn-outline group">
                    View All Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card group flex flex-col h-full relative overflow-hidden"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="h-56 mb-6 overflow-hidden rounded-xl relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/10 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="space-y-3 mb-6 border-t border-white/5 pt-6">
                            {project.results.map((result, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <Sparkles className="w-3 h-3 text-primary" />
                                    <span>{result}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="px-2 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded hover:border-primary/30 hover:text-primary transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Projects;
