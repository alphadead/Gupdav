"use client";
import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface Plan {
    title: string;
    description: string;
    details: string[];
    buttonText: string;
}

export function BackgroundGradientDemo() {
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/priceData.json");
            const result = await response.json();
            setPlans(result.plans);
        }
        fetchData();
    }, []);

    if (plans.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center space-x-6 text-xl mb-14">
            {plans.map((plan, index) => (
                <BackgroundGradient
                    key={index}
                    className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 h-150"
                >
                    <div className="flex flex-col h-screen justify-between">
                        <div>
                            <h1 className="text-neutral-100 text-4xl text-center pb-7">{plan.title}</h1>
                            <p className="text-neutral-400 text-xl pb-7 text-center">{plan.description}</p>
                        </div>

                        <div className="flex-grow text-sm text-neutral-600 dark:text-neutral-100 text-xl leading-10 font-light">
                            {plan.details.map((detail, idx) => (
                                <p key={idx}>{detail}</p>
                            ))}
                        </div>

                        <div className="pt-7 flex justify-center">
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-200 bg-[linear-gradient(110deg,#18181b,45%,#1e2631,55%,#18181b)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 pr-20 pl-20">
                                {plan.buttonText}
                            </button>
                        </div>
                    </div>
                </BackgroundGradient>
            ))}
        </div>
    );
}
