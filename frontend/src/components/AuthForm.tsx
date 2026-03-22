"use client";

import { useState } from "react";
import { motion } from "framer-motion";

    export default function AuthForm() {
    const [mode, setMode] = useState("login");
    const [role, setRole] = useState("patient");

    return (
        <div className="container-center">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="card w-full max-w-md text-center"
        >

            {/* Logo */}
            <div className="w-16 h-16 mx-auto mb-4 bg-[#3B6F8E] rounded-xl flex items-center justify-center text-white text-xl">
            🧠
            </div>

            {/* Toggle Login/Register */}
            <div className="toggle-group relative mb-4">
            <motion.div
                layout
                className="absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow"
                animate={{ x: mode === "login" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300 }}
            />

            <button className="toggle-btn z-10" onClick={() => setMode("login")}>
                Login
            </button>
            <button className="toggle-btn z-10" onClick={() => setMode("register")}>
                Register
            </button>
            </div>

            {/* Role Toggle */}
            <div className="toggle-group relative mb-6">
            <motion.div
                layout
                className="absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow"
                animate={{ x: role === "patient" ? 0 : "100%" }}
            />

            <button className="toggle-btn z-10" onClick={() => setRole("patient")}>
                Patient
            </button>
            <button className="toggle-btn z-10" onClick={() => setRole("doctor")}>
                Medical Staff
            </button>
            </div>

            {/* Inputs */}
            {mode === "register" && (
            <>
                <input className="input mb-4" placeholder="Full Name" />
                {role === "doctor" && (
                <input className="input mb-4" placeholder="Designation" />
                )}
            </>
            )}

            {mode === "login" && (
            <input className="input mb-4" placeholder="Patient ID" />
            )}

            <input className="input mb-4" placeholder="Phone Number" />

            {/* Button */}
            <motion.button
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full mb-4"
            >
            {mode === "login" ? "Request OTP" : "Register Profile"}
            </motion.button>

        </motion.div>
        </div>
    );
}