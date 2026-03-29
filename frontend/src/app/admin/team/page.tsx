'use client';

import React from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AdminTeamPage = () => {
    const members = [
        { id: '1', name: 'Dr. Jane Smith', role: 'Faculty Coordinator' },
        { id: '2', name: 'Alex Rivera', role: 'Chairman' },
        { id: '3', name: 'Sarah Chen', role: 'Vice Chairman' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold uppercase">Manage Team</h1>
                <Button variant="neon" className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" /> <span>Add Member</span>
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <div key={member.id} className="glass-morphism p-6 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-800" />
                            <div>
                                <p className="font-bold text-white">{member.name}</p>
                                <p className="text-sm text-zinc-500">{member.role}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-all"><Edit className="w-4 h-4" /></button>
                            <button className="p-2 hover:bg-white/10 rounded-lg text-red-500/50 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminTeamPage;
