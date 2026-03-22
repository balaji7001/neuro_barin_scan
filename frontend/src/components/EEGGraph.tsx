"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

export default function EEGGraph() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
        setData(prev => [
            ...prev.slice(-20),
            { value: Math.random() * 100 }
        ]);
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
            <Line
                type="monotone"
                dataKey="value"
                stroke="#56B79A"
                strokeWidth={3}
                dot={false}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}