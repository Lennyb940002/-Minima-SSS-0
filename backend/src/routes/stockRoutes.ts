import express from 'express';
import { StockService } from '../services/stockService';

export const stockRoutes = express.Router();

stockRoutes.get('/', async (req, res) => {
    try {
        const stocks = await StockService.getAllStock();
        res.json(stocks);
    } catch (error) {
        console.error('Erreur lors de la récupération des stocks :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des stocks' });
    }
});

stockRoutes.post('/', async (req, res) => {
    try {
        const stock = await StockService.createStock(req.body);
        res.status(201).json(stock);
    } catch (error) {
        console.error('Erreur détaillée lors de la création du stock :', error);
        res.status(400).json({
            error: error instanceof Error ? error.message : 'Erreur lors de la création du stock',
            details: error
        });
    }
});

stockRoutes.delete('/:reference', async (req, res) => {
    try {
        const result = await StockService.deleteStock(req.params.reference);
        if (result) {
            res.status(200).json({ message: 'Stock supprimé avec succès' });
        } else {
            res.status(404).json({ error: 'Stock non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du stock :', error);
        res.status(500).json({ error: 'Erreur lors de la suppression du stock' });
    }
});

stockRoutes.put('/:reference', async (req, res) => {
    try {
        const stock = await StockService.updateStock(req.params.reference, req.body);
        if (stock) {
            res.status(200).json(stock);
        } else {
            res.status(404).json({ error: 'Stock non trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du stock :', error);
        res.status(400).json({ error: 'Erreur lors de la mise à jour du stock' });
    }
});

stockRoutes.get('/low', async (req, res) => {
    try {
        const lowStock = await StockService.getLowStock();
        res.json(lowStock);
    } catch (error) {
        console.error('Erreur lors de la récupération des stocks faibles :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des stocks faibles' });
    }
});

stockRoutes.get('/analytics', async (req, res) => {
    try {
        const analytics = await StockService.getAnalytics();
        res.json(analytics);
    } catch (error) {
        console.error('Erreur lors de la récupération des analyses :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des analyses' });
    }
});
