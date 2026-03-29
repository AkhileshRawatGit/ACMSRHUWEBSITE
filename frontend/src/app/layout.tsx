import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/context/LoadingContext";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
    title: "ACM Chapter | Futuristic Tech Hub",
    description: "Official website of the ACM Chapter - Empowering the next generation of tech leaders.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} font-sans`}>
                <LoadingProvider>
                    <Preloader />
                    <ParticleBackground />
                    <SmoothScrolling>
                        {children}
                    </SmoothScrolling>
                </LoadingProvider>
            </body>
        </html>
    );
}
