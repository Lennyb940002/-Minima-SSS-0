import React from 'react';

export const BicepsExercise = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Biceps</h1>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
                    Ajouter un exercice
                </button>
            </div>

            {/* Exercise Info */}
            <div className="text-gray-600 text-sm">
                <p>Séance de biceps - Niveau: Débutant</p>
                <p>Fréquence : 1-2 fois par semaine</p>
                <p>Durée : Environ 30-45 minutes</p>
            </div>

            {/* Exercise Card */}
            <div className="bg-gray-100 p-6 rounded-lg space-y-4">
                <h2 className="font-medium">Curl biceps avec haltères (Dumbbell Bicep Curl)</h2>

                <div className="space-y-2">
                    <p>• Séries : 3</p>
                    <p>• Répétitions : 10-12</p>
                    <p>• Repos : 60 secondes</p>
                </div>

                <div className="mt-4">
                    <p className="font-medium">• Spécialité :</p>
                    <p className="text-sm text-gray-600">
                        Tirez un haltère dans chaque main, paumes tournées vers l'avant.
                        Gardez les coudes près du corps. Levez les haltères vers les épaules,
                        puis redescendez.
                    </p>
                </div>
            </div>

            {/* Difficulty Selector */}
            <div className="flex space-x-4 justify-center mt-6">
                <button className="bg-red-500 text-white px-6 py-2 rounded-full">
                    Débutant
                </button>
                <button className="text-gray-500 px-6 py-2">
                    Intermédiaire
                </button>
                <button className="text-gray-500 px-6 py-2">
                    Confirmé
                </button>
            </div>

            {/* Graph */}
            <svg className="w-full h-48" viewBox="0 0 400 150">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                <path
                    d="M0,40 C50,60 100,20 150,40 C200,60 250,20 300,40 C350,60 400,20 400,40 L400,150 L0,150 Z"
                    fill="url(#gradient)"
                />
                <path
                    d="M0,40 C50,60 100,20 150,40 C200,60 250,20 300,40 C350,60 400,20 400,40"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};