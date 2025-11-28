import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Operations Director, TechFlow',
        content: 'Hemmas transformed our chaotic manual processes into a streamlined, automated machine. We saved over 40 hours a week in the first month alone.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
        name: 'Michael Chen',
        role: 'CEO, GrowthScale',
        content: 'The AI lead scoring system Hemmas built gave us clarity we never had before. Our sales team is now focused only on high-value prospects.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    },
    {
        name: 'Emily Davis',
        role: 'Founder, EcomBoost',
        content: 'Professional, technical, and incredibly efficient. The automated inventory system has completely eliminated our stockout issues.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    return (
        <>
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-primary">Success</span></h2>
                <p className="text-gray-400">
                    Don't just take my word for it. Here's what my partners have to say.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div key={index} className="glass-panel rounded-2xl p-8 relative group hover:border-primary/30 transition-colors">
                        <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10 group-hover:text-primary/40 transition-colors" />

                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>

                        <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                            "{t.content}"
                        </p>

                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div>
                                <div className="font-bold text-white text-sm">{t.name}</div>
                                <div className="text-xs text-primary">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Testimonials;
