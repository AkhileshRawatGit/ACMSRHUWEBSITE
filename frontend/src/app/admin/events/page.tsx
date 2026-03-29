'use client';

import React, { useState } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AdminEventsPage = () => {
    const [events, setEvents] = useState([
        { id: '1', title: 'Tech Pulse 2024', date: '2024-03-15', status: 'Upcoming' },
        { id: '2', title: 'Cyber Security Hack', date: '2024-04-02', status: 'Published' },
        { id: '3', title: 'Web3 Workshop', date: '2024-04-20', status: 'Draft' },
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-bold uppercase">Manage Events</h1>
                    <p className="text-zinc-500 mt-1">Total {events.length} events found</p>
                </div>
                <Button variant="neon" className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" /> <span>Create New Event</span>
                </Button>
            </div>

            <div className="glass-morphism rounded-3xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                        <input
                            placeholder="Search events..."
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-neon-blue transition-all"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <select className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none">
                            <option>All Status</option>
                            <option>Upcoming</option>
                            <option>Published</option>
                            <option>Draft</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5 text-zinc-400 text-xs uppercase tracking-widest font-bold">
                                <th className="px-8 py-5">Event Title</th>
                                <th className="px-8 py-5">Date</th>
                                <th className="px-8 py-5">Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {events.map((event) => (
                                <tr key={event.id} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6 font-medium text-white">{event.title}</td>
                                    <td className="px-8 py-6 text-zinc-400">{event.date}</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${event.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' :
                                            event.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-zinc-500/20 text-zinc-400'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end space-x-2">
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-zinc-500 hover:text-white transition-all"><Edit className="w-4 h-4" /></button>
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-red-500/50 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminEventsPage;
