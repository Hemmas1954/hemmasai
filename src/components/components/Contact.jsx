import React from 'react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 bg-black/40 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="text-primary">Automate?</span></h2>
                    <p className="text-gray-400 mb-8">
                        Let's discuss how we can streamline your operations, reduce costs, and implement intelligent AI workflows.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:contact@hemmas.ai" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Email Me</div>
                                <div className="font-medium">contact@hemmas.ai</div>
                            </div>
                        </a>

                        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Connect</div>
                                <div className="font-medium">LinkedIn Profile</div>
                            </div>
                        </a>

                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
