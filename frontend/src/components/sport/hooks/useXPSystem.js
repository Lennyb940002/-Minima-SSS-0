// hooks/useXPSystem.js
import { useState, useEffect } from 'react';
import { modules } from '../constants/modules';
import { calculateXPForNextLevel } from '../utils/xpCalculator';

export const useXPSystem = () => {
    const [muscleStats, setMuscleStats] = useState(() => {
        const savedStats = localStorage.getItem('muscleStats');
        if (savedStats) {
            return JSON.parse(savedStats);
        }
        // Initialize stats for each module
        return modules.reduce((acc, module) => {
            acc[module.title] = { xp: 0, level: 0, totalXP: 0 };
            return acc;
        }, {});
    });

    useEffect(() => {
        localStorage.setItem('muscleStats', JSON.stringify(muscleStats));
    }, [muscleStats]);

    const gainXP = (groupe, baseXP) => {
        setMuscleStats((prevStats) => {
            const updatedStats = { ...prevStats };
            const currentStats = updatedStats[groupe];

            if (currentStats) {
                let newXP = currentStats.xp + baseXP;
                let newLevel = currentStats.level;
                let newTotalXP = currentStats.totalXP + baseXP;

                while (newXP >= calculateXPForNextLevel(newLevel)) {
                    newXP -= calculateXPForNextLevel(newLevel);
                    newLevel += 1;
                }

                updatedStats[groupe] = {
                    xp: newXP,
                    level: newLevel,
                    totalXP: newTotalXP
                };
            }

            return updatedStats;
        });
    };

    const getProgressPercentage = (stats) => {
        if (!stats) return 0;
        const xpNeeded = calculateXPForNextLevel(stats.level);
        return (stats.xp / xpNeeded) * 100;
    };

    return { muscleStats, gainXP, getProgressPercentage };
};