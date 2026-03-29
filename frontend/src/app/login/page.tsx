'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
}).required();

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle login logic here
        alert('Login attempted. Backend integration pending.');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-6">
            <Link href="/" className="absolute top-8 left-8 text-zinc-500 hover:text-white flex items-center transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-morphism p-10 rounded-3xl w-full max-w-md"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold uppercase mb-2">Member <span className="text-neon-blue">Login</span></h1>
                    <p className="text-zinc-500">Welcome back, innovator.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                        <input
                            {...register('email')}
                            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                            placeholder="name@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <Button type="submit" variant="neon" className="w-full py-4 text-lg">Sign In</Button>
                </form>

                <div className="mt-8 text-center text-sm text-zinc-500">
                    Not a member? <a href="#" className="text-white hover:text-neon-blue">Request to join</a>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
