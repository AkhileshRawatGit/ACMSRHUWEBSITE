import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-black min-h-screen text-white">
            <AdminSidebar />
            <main className="flex-1 p-10 overflow-auto">
                {children}
            </main>
        </div>
    );
}
