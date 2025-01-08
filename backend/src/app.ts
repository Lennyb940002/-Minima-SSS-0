import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { stockRoutes } from './routes/stockRoutes';
import { salesRouter } from './routes/salesRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI non définie');
    process.exit(1);
}

mongoose.set('debug', true); // Pour voir les requêtes MongoDB

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('✅ Connecté à MongoDB'))
    .catch(err => {
        console.error('❌ Erreur de connexion à MongoDB:', err);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());

// Routes pour les ventes (inchangées)
app.use('/api', salesRouter);

// Routes pour le stock
app.use('/api/stock', stockRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
