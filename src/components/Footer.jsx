import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-secondary)] py-8 border-t border-[var(--border)]">
            <div className="container text-center">
                <p className="text-[var(--text-secondary)] text-sm">
                    © {new Date().getFullYear()} Hemmas Mohamed. All rights reserved.
                </p>
                <p className="text-[var(--text-secondary)] text-xs mt-2">
                    AI Automation Engineer & n8n Workflow Architect
                </p>
            </div>
        </footer>
    );
};

export default Footer;
