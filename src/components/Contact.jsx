import React, { useEffect } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

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
                        <a href="mailto:hemmasmohamed7@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Email Me</div>
                                <div className="font-medium">hemmasmohamed7@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/hemmas-mohamed-06a96021b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">Connect</div>
                                <div className="font-medium">LinkedIn Profile</div>
                            </div>
                        </a>

                        <div className="flex gap-4 mt-8">
                            <a href="https://github.com/Hemmas1954" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/213676067652" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 h-[600px] w-full bg-black/50 rounded-lg overflow-hidden">
                    <Cal
                        namespace="30min"
                        calLink="mohamed-hemmas-acwsxi/30min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ "layout": "month_view" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
