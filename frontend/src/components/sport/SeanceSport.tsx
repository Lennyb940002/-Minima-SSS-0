import React, { useState } from "react";

// Import des images
import epaule from "../../image/epaule (1).png";
import salle from "../../image/salle-de-sport (1).png";
import devant from "../../image/devant.png";
import dos from "../../image/dos.png";
import humain from "../../image/humain.png";
import dos1 from "../../image/dos (1).png";
import biceps from "../../image/biceps (1).png";
import muscles from "../../image/muscles.png";
import dos2 from "../../image/dos (2).png";

// Composant BicepsExercise
const BicepsExercise = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Biceps</h1>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm shadow-md">
                    Ajouter un exercice
                </button>
            </div>
            <div className="text-gray-700 text-sm space-y-2">
                <p>Séance de biceps - <strong>Niveau:</strong> Débutant</p>
                <p><strong>Fréquence:</strong> 1-2 fois par semaine</p>
                <p><strong>Durée:</strong> Environ 30-45 minutes</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                    Curl biceps avec haltères (Dumbbell Bicep Curl)
                </h2>
                <div className="text-gray-700 mt-4">
                    <p><strong>Séries:</strong> 3</p>
                    <p><strong>Répétitions:</strong> 10-12</p>
                    <p><strong>Repos:</strong> 60 secondes</p>
                </div>
                <div className="mt-6">
                    <p className="font-medium text-gray-800">Spécialité :</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Tenez un haltère dans chaque main, paumes tournées vers l'avant.
                        Gardez les coudes près du corps. Levez les haltères vers les épaules,
                        puis redescendez lentement.
                    </p>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md">
                    Débutant
                </button>
                <button className="text-gray-600 hover:text-gray-800 px-6 py-2">
                    Intermédiaire
                </button>
                <button className="text-gray-600 hover:text-gray-800 px-6 py-2">
                    Confirmé
                </button>
            </div>
        </div>
    );
};

const modules = [
    { id: "epaule", image: epaule, title: "Épaule" },
    { id: "salle", image: salle, title: "Salle de sport" },
    { id: "devant", image: devant, title: "Devant" },
    { id: "dos", image: dos, title: "Dos" },
    { id: "humain", image: humain, title: "Humain" },
    { id: "dos1", image: dos1, title: "Dos 1" },
    { id: "biceps", image: biceps, title: "Biceps" },
    { id: "muscles", image: muscles, title: "Muscles" },
    { id: "dos2", image: dos2, title: "Dos 2" },
];

const Planning = () => {
    const jours = [
        {
            jour: "Lundi",
            exercices: [
                { nom: "Élévations latérales à la poulie", groupe: "Épaules", series: "2 x 12" },
                { nom: "Pec deck inversé", groupe: "Épaules", series: "2 x 12" },
                { nom: "Développé militaire", groupe: "Épaules", series: "2 x 12" },
                { nom: "Développé couché", groupe: "Pectoraux", series: "2 x 9" },
                { nom: "Écartés à la poulie vis-à-vis", groupe: "Pectoraux", series: "3 x 9" },
                { nom: "Développé couché haltères", groupe: "Pectoraux", series: "2 x 9" },
                { nom: "Pec-deck", groupe: "Pectoraux", series: "2 x 9" },
                { nom: "Vélo spinning", groupe: "Cardio", series: "-" },
            ],
        },
        {
            jour: "Mardi",
            exercices: [
                { nom: "Tirage horizontal à la poulie", groupe: "Dos", series: "4 x 21" },
                { nom: "Tirage vertical prise serrée", groupe: "Dos", series: "3 x 21" },
                { nom: "Rowing à la barre", groupe: "Dos", series: "3 x 21" },
                { nom: "Crunch", groupe: "Abdominaux", series: "2 min" },
                { nom: "Planche", groupe: "Abdominaux", series: "1 min 30" },
            ],
        },
        {
            jour: "Mercredi",
            exercices: [
                { nom: "Squat", groupe: "Fessiers/Quadriceps/Ischio-jambiers", series: "2 x 8" },
                { nom: "Presse à cuisses inclinée", groupe: "Fessiers/Quadriceps/Ischio-jambiers", series: "3 x 9" },
                { nom: "Hack squat", groupe: "Fessiers/Quadriceps/Ischio-jambiers", series: "3 x 9" },
                { nom: "Leg curl assis à la machine", groupe: "Fessiers/Quadriceps/Ischio-jambiers", series: "2 x 12" },
                { nom: "Fentes avant avec haltères", groupe: "Fessiers/Quadriceps", series: "3 x 10" },
                { nom: "Machine à escaliers", groupe: "Cardio", series: "-" },
            ],
        },
        {
            jour: "Jeudi",
            exercices: [
                { nom: "Extensions verticales à la poulie haute", groupe: "Triceps", series: "3 x 9" },
                { nom: "Dips assis à la machine Hammer Strength", groupe: "Triceps", series: "10 x 3" },
                { nom: "Dips assis à la machine", groupe: "Triceps", series: "2 x 9" },
                { nom: "Curl haltères prise marteau", groupe: "Biceps", series: "3 x 9" },
                { nom: "Curl pupitre barre EZ", groupe: "Biceps", series: "2 x 12" },
                { nom: "Crunch", groupe: "Abdominaux", series: "2 min" },
                { nom: "Planche", groupe: "Abdominaux", series: "1 min 30" },
                { nom: "Vélo elliptique", groupe: "Cardio", series: "-" },
            ],
        },
        {
            jour: "Vendredi",
            exercices: [
                { nom: "Élévations latérales à la poulie", groupe: "Épaules", series: "2 x 12" },
                { nom: "Pec deck inversé", groupe: "Épaules", series: "2 x 12" },
                { nom: "Développé militaire", groupe: "Épaules", series: "2 x 12" },
                { nom: "Développé couché", groupe: "Pectoraux", series: "2 x 9" },
                { nom: "Écartés à la poulie vis-à-vis", groupe: "Pectoraux", series: "3 x 9" },
                { nom: "Développé couché haltères", groupe: "Pectoraux", series: "2 x 9" },
                { nom: "Pec-deck", groupe: "Pectoraux", series: "2 x 9" },
            ],
        },
    ];

    return (
        <div className="bg-white p-6 rounded-lg mt-10">
            <h2 className="text-black text-xl font-bold mb-6">Planning d'entraînement</h2>
            {jours.map((jour, index) => (
                <div key={index} className="mb-4">
                    <h3 className="bg-black pt-2 pb-2 rounded-lg font-semibold text-lg text-white mb-2 pl-2">{jour.jour}</h3>
                    <div className="w-max-[260px] h-[290px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 pl-0 pt-4">
                        {jour.exercices.map((exercice, idx) => (
                            <div
                                key={idx}
                                className="bg-black/70 p-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                            >
                                <p className="text-white text-sm font-medium text-gray-800">
                                    {exercice.nom}
                                </p>
                                <p className="text-white text-xs text-gray-600">
                                    {exercice.groupe}
                                </p>
                                <p className="text-white text-xs text-gray-600">
                                    {exercice.series}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Composant principal
export const SeanceSport = () => {
    const [hoveredModule, setHoveredModule] = useState<string | null>(null);
    const [activeModule, setActiveModule] = useState<string | null>(null);

    if (activeModule === "biceps") {
        return <BicepsExercise />;
    }

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                    <div
                        key={module.id}
                        onMouseEnter={() => setHoveredModule(module.id)}
                        onMouseLeave={() => setHoveredModule(null)}
                        onClick={() => setActiveModule(module.id)}
                        className={`relative flex flex-col items-center justify-center p-6 shadow-md transition-transform transform ${hoveredModule === module.id ? "bg-gray-200" : "bg-white"
                            } w-[380px] h-[320px] rounded-[25px] cursor-pointer`}
                    >
                        <img src={module.image} alt={module.title} className="w-[141px] h-[141px] object-contain mb-2" />
                        <p className="text-black text-sm font-medium mb-2">Niveau 0</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-black h-2.5 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <Planning />
        </div>
    );
};

export default SeanceSport;