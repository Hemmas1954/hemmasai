import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Database, Code } from 'lucide-react';

const skillCategories = [
    {
        title: 'Automation',
        icon: <Workflow className="w-5 h-5" />,
        skills: ['n8n', 'Zapier', 'Make', 'Power Automate', 'Webhooks']
    },
    {
        title: 'AI Engineering',
        icon: <Cpu className="w-5 h-5" />,
        skills: ['OpenAI API', 'LangChain', 'RAG', 'Prompt Eng.', 'Fine-tuning']
    },
    {
        title: 'Development',
        icon: <Code className="w-5 h-5" />,
        skills: ['Python', 'JavaScript', 'Docker', 'Git', 'SQL', 'AWS']
    },
    {
        title: 'Stack',
        icon: <Database className="w-5 h-5" />,
        skills: ['Airtable', 'Notion', 'Salesforce', 'HubSpot', 'Shopify']
    }
];

const Skills = () => {
    return (
        <>
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                <p className="text-gray-400">
                    A robust toolkit designed to build scalable, efficient, and intelligent automation systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded-full hover:text-white hover:bg-white/10 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Skills;
