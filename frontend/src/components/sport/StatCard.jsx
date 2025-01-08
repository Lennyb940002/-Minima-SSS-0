// components/StatCard.jsx
import { calculateXPForNextLevel } from './utils/xpCalculator';
import PropTypes from 'prop-types';

export const StatCard = ({ module, stats, progressPercentage }) => {
    const xpForNextLevel = calculateXPForNextLevel(stats?.level || 0);

    return (
        <div className="relative flex flex-col items-center justify-center p-6 shadow-md bg-white w-full max-w-[380px] h-[320px] rounded-[25px] cursor-pointer hover:shadow-lg transition-shadow">
            <img src={module.image} alt={module.title} className="w-[141px] h-[141px] object-contain mb-4" />
            <p className="text-black text-lg font-medium mb-1">{module.title}</p>
            <p className="text-black text-sm font-medium mb-2">
                Niveau {stats?.level || 0}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                <div
                    className="bg-black h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <p className="text-xs text-gray-500">
                {stats?.xp || 0}/{xpForNextLevel} XP
            </p>
            <p className="text-xs text-gray-500 mt-1">
                Total XP: {stats?.totalXP || 0}
            </p>
        </div>
    );
};

StatCard.propTypes = {
    module: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    stats: PropTypes.shape({
        xp: PropTypes.number,
        level: PropTypes.number,
        totalXP: PropTypes.number,
    }),
    progressPercentage: PropTypes.number.isRequired,
};