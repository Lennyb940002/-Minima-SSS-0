// services/stockApi.ts
import axios from 'axios';
import type { StockItem } from '../components/stock/types';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const stockApi = {
    getAllStock: async (): Promise<StockItem[]> => {
        try {
            const response = await api.get<any[]>('/stock');
            console.log('Réponse brute de l\'API:', response.data);

            const transformedData: StockItem[] = response.data.map(item => ({
                id: item._id,
                product: item.product,
                reference: item.reference,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                salePrice: item.salePrice,
                category: item.category,
                description: item.description,
                threshold: item.threshold,
                lastUpdated: new Date(item.lastUpdated)
            }));

            console.log('Données transformées:', transformedData);
            return transformedData;
        } catch (error) {
            console.error('Erreur lors de la récupération des stocks :', error);
            throw error;
        }
    },

    createStock: async (stock: Omit<StockItem, 'id'>): Promise<StockItem> => {
        try {
            const response = await api.post<any>('/stock', stock);
            console.log('Réponse API createStock:', response.data);

            return {
                id: response.data._id,
                product: response.data.product,
                reference: response.data.reference,
                quantity: response.data.quantity,
                unitPrice: response.data.unitPrice,
                salePrice: response.data.salePrice,
                category: response.data.category,
                description: response.data.description,
                threshold: response.data.threshold,
                lastUpdated: new Date(response.data.lastUpdated)
            };
        } catch (error) {
            console.error('Erreur lors de la création du stock :', error);
            throw error;
        }
    },

    updateStock: async (reference: string, updateData: Partial<StockItem>): Promise<StockItem> => {
        try {
            const response = await api.put<any>(`/stock/${reference}`, updateData);
            return {
                id: response.data._id,
                product: response.data.product,
                reference: response.data.reference,
                quantity: response.data.quantity,
                unitPrice: response.data.unitPrice,
                salePrice: response.data.salePrice,
                category: response.data.category,
                description: response.data.description,
                threshold: response.data.threshold,
                lastUpdated: new Date(response.data.lastUpdated)
            };
        } catch (error) {
            console.error('Erreur lors de la mise à jour du stock :', error);
            throw error;
        }
    },

    deleteStock: async (reference: string): Promise<void> => {
        try {
            await api.delete(`/stock/${reference}`);
            console.log('Stock supprimé avec succès:', reference);
        } catch (error) {
            console.error('Erreur lors de la suppression du stock :', error);
            throw error;
        }
    },

    getAnalytics: async (): Promise<StockAnalytics> => {
        try {
            const response = await api.get<StockAnalytics>('/stock/analytics');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des analytics :', error);
            throw error;
        }
    }
};