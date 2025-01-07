import express from 'express';
import { SalesService } from '../services/salesService';

export const salesRouter = express.Router();

salesRouter.post('/sales', async (req, res) => {
    try {
        const sale = await SalesService.createSale(req.body);
        res.status(201).json(sale);
    } catch (error) {
        console.error('Error creating sale:', error);
        res.status(400).json({
            error: error instanceof Error ? error.message : 'Erreur lors de la création de la vente'
        });
    }
});

salesRouter.get('/sales', async (req, res) => {
    try {
        const sales = await SalesService.getAllSales();
        res.json(sales);
    } catch (error) {
        console.error('Error fetching sales:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des ventes' });
    }
});

salesRouter.delete('/sales/:id', async (req, res) => {
    try {
        await SalesService.deleteSale(req.params.id);
        res.status(200).json({ message: 'Vente supprimée avec succès' });
    } catch (error) {
        console.error('Error deleting sale:', error);
        res.status(500).json({ error: 'Erreur lors de la suppression de la vente' });
    }
});

salesRouter.get('/sales/analytics', async (req, res) => {
    try {
        const analytics = await SalesService.getSaleAnalytics();
        res.json(analytics);
    } catch (error) {
        console.error('Error fetching analytics:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des analyses' });
    }
});