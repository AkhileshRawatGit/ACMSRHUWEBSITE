import React from 'react';
import { Calendar, Users, Image as ImageIcon, TrendingUp } from 'lucide-react';

const StatBox = ({ title, value, icon: Icon, color }: any) => (
    <div className="glass-morphism p-8 rounded-2xl flex items-center space-x-6">
        <div className={`p-4 rounded-xl ${color}`}>
            <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
            <h3 className="text-zinc-500 text-sm font-medium mb-1 uppercase tracking-wider">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    </div>
);

export default function AdminDashboard() {
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold">DASHBOARD OVERVIEW</h1>
                <div className="text-sm text-zinc-500">Welcome back, Admin</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <StatBox title="Total Events" value="12" icon={Calendar} color="bg-blue-600" />
                <StatBox title="Team Members" value="24" icon={Users} color="bg-purple-600" />
                <StatBox title="Gallery Images" value="48" icon={ImageIcon} color="bg-green-600" />
                <StatBox title="Engagement" value="+15%" icon={TrendingUp} color="bg-orange-600" />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-morphism p-8 rounded-2xl">
                    <h2 className="text-xl font-bold mb-6 uppercase">Recent Activities</h2>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center font-bold text-neon-blue">A</div>
                                    <div>
                                        <p className="font-medium text-white">Event "Tech Pulse" was updated</p>
                                        <p className="text-sm text-zinc-500">2 hours ago</p>
                                    </div>
                                </div>
                                <button className="text-zinc-500 hover:text-white transition-colors">Details</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-morphism p-8 rounded-2xl h-fit">
                    <h2 className="text-xl font-bold mb-6 font-space uppercase">Quick Actions</h2>
                    <div className="space-y-4">
                        <button className="w-full py-4 rounded-xl bg-neon-blue text-black font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all">New Event</button>
                        <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 text-sm uppercase tracking-widest font-bold transition-all">Add Member</button>
                        <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 text-sm uppercase tracking-widest font-bold transition-all">Upload Photo</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
