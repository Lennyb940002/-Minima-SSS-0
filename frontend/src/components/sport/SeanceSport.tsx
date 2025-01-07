import React from "react";

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

// Composant principal
export const SeanceSport = () => {
    const [hoveredModule, setHoveredModule] = React.useState<string | null>(null);
    const [activeModule, setActiveModule] = React.useState<string | null>(null);

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
                        className={`relative flex flex-col items-center justify-center p-6 shadow-md transition-transform transform ${hoveredModule === module.id ? " bg-gray-200" : "bg-white"
                            } w-[380px] h-[260px] rounded-[25px] cursor-pointer`}

                    >
                        <img
                            src={module.image}
                            alt={module.title}
                            className="w-[141px] h-[141px] object-contain mb-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
