import axios from 'axios';
import { Sale } from '../components/sales/types';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const salesApi = {
    getAllSales: async () => {
        try {
            const response = await api.get<Sale[]>('/sales');
            return response.data;
        } catch (error) {
            console.error('Error fetching sales:', error);
            return [];
        }
    },

    createSale: async (sale: Omit<Sale, '_id'>) => {
        const response = await api.post<Sale>('/sales', sale);
        return response.data;
    },

    deleteSale: async (id: string) => {
        await api.delete(`/sales/${id}`);
    },

    getSalesAnalytics: async () => {
        try {
            const response = await api.get('/sales/analytics');
            return response.data;
        } catch (error) {
            console.error('Error fetching analytics:', error);
            return null;
        }
    }
};