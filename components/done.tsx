"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Calendar, Trophy } from "lucide-react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export function DoneComponent() {
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTodos = localStorage.getItem("moje-ukoly");
        if (savedTodos) {
            const parsedTodos: Todo[] = JSON.parse(savedTodos);
            setCompletedTodos(parsedTodos.filter((t) => t.completed));
        }
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full max-w-2xl mx-auto p-4 space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-foreground">
                    Hotové úkoly
                </h1>
                <p className="text-muted-foreground">
                    Podívej se, co všechno už máš za sebou!
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border rounded-xl p-6 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Celkem splněno</p>
                        <p className="text-2xl font-bold">{completedTodos.length}</p>
                    </div>
                </div>
                <div className="bg-card border rounded-xl p-6 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Poslední aktivita</p>
                        <p className="text-2xl font-bold">Dnes</p>
                    </div>
                </div>
            </div>

            {/* Completed List */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b bg-muted/30">
                    <h2 className="font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Seznam úspěchů
                    </h2>
                </div>

                {completedTodos.length === 0 ? (
                    <div className="p-12 text-center text-muted-foreground">
                        <p>Zatím zde nic není. Vrať se do plánování a odškrtni nějaké úkoly!</p>
                    </div>
                ) : (
                    <div className="divide-y">
                        {completedTodos.map((todo) => (
                            <div
                                key={todo.id}
                                className="p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors"
                            >
                                <div className="h-6 w-6 rounded-full border-2 border-green-500 bg-green-500 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg line-through text-muted-foreground">
                                    {todo.text}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
