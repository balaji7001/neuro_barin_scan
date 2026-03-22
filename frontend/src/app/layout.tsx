"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <html lang="en">
        <body className="bg-[#F4F7F9]">

            {/* ===== TOP NAVBAR ===== */}
            <Navbar />

            {/* ===== MAIN CONTENT ===== */}
            <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-[calc(100vh-80px)]"
            >
            {children}
            </motion.main>

        </body>
        </html>
    );
}