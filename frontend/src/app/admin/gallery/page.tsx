'use client';

import React from 'react';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AdminGalleryPage = () => {
    const photos = [
        { id: '1', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865', date: '2024-02-01' },
        { id: '2', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952', date: '2024-02-05' },
        { id: '3', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b', date: '2024-02-10' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-bold uppercase">Manage Gallery</h1>
                <Button variant="neon" className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" /> <span>Upload Photo</span>
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photos.map((photo) => (
                    <div key={photo.id} className="relative aspect-square group rounded-2xl overflow-hidden glass-morphism">
                        <img src={photo.url} alt="Gallery" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="p-3 bg-red-500 rounded-full text-white hover:scale-110 transition-transform">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="aspect-square rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-zinc-600 hover:text-zinc-400 hover:border-white/20 transition-all cursor-pointer">
                    <Plus className="w-10 h-10 mb-2" />
                    <span className="text-sm font-medium">Add More</span>
                </div>
            </div>
        </div>
    );
};

export default AdminGalleryPage;
