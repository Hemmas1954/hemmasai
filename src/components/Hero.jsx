import React from 'react';
import { ArrowRight, Bot, Workflow, Zap, Sparkles, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/photo.png';

const TypewriterText = ({ text, delay = 0, className = "" }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: () => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            transition: {
                duration: 0, // Instant appearance for typing effect
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={`inline-block ${className}`}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
            {/* Advanced Animated Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                {/* Animated Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center">

                {/* Profile Photo Container with Orbiting Elements */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative mb-12"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        {/* Glowing Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-2xl opacity-50 animate-pulse"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-primary via-white to-purple-600">
                            <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                <img
                                    src={profilePhoto}
                                    alt="Mohamed Hemmas"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Orbiting Tech Icons */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -m-8 border border-white/10 rounded-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-primary/50 p-2 rounded-full text-primary shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <Bot size={20} />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -m-16 border border-white/5 rounded-full"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black border border-purple-500/50 p-2 rounded-full text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                <Workflow size={20} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                        <Sparkles className="w-4 h-4" />
                        <span>AI Automation Engineer & n8n Architect</span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        <TypewriterText text="Automation" delay={0.5} /> <br />
                        <span className="gradient-text glow-text">
                            <TypewriterText text="Future of Work" delay={2.0} />
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        I'm Mohamed Hemmas. I transform complex manual processes into intelligent, self-running systems.
                        Specializing in AI Agents, n8n workflows, and business process automation.
                    </p>
                </motion.div>

                {/* Services / Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl"
                >
                    {[
                        {
                            icon: <Bot className="w-8 h-8" />,
                            title: "AI Agents",
                            desc: "Intelligent bots that handle customer support, lead gen, and data analysis 24/7."
                        },
                        {
                            icon: <Workflow className="w-8 h-8" />,
                            title: "Workflow Automation",
                            desc: "Seamless integrations between your favorite apps using n8n and Make."
                        },
                        {
                            icon: <Cpu className="w-8 h-8" />,
                            title: "System Architecture",
                            desc: "Scalable, robust technical infrastructures designed for growth and efficiency."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-4 mt-12"
                >
                    <a href="#projects" className="btn btn-primary group px-8 py-4 text-lg">
                        View My Work <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="btn btn-outline px-8 py-4 text-lg">
                        Book a Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
