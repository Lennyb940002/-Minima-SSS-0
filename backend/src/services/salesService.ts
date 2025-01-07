import { Sale, ISale } from '../models/Sale';
import mongoose from 'mongoose';

export class SalesService {
    static async getAllSales() {
        const sales = await Sale.find().sort({ date: -1 });
        return sales.map(sale => ({
            ...sale.toObject(),
            _id: sale._id.toString()
        }));
    }

    static async createSale(saleData: Partial<ISale>) {
        const margin = (saleData.salePrice || 0) - ((saleData.unitCost || 0) * (saleData.quantity || 1));

        const sale = new Sale({
            ...saleData,
            margin,
            paymentStatus: saleData.paymentStatus?.toLowerCase() || 'pending',
            paymentMethod: saleData.paymentMethod?.toLowerCase() || 'cash'
        });

        return await sale.save();
    }

    static async deleteSale(saleId: string) {
        return await Sale.findByIdAndDelete(saleId);
    }

    static async updateSale(saleId: string, updateData: Partial<ISale>) {
        const margin = updateData.salePrice && updateData.unitCost && updateData.quantity
            ? (updateData.salePrice - (updateData.unitCost * updateData.quantity))
            : undefined;

        const dataToUpdate = margin ? { ...updateData, margin } : updateData;
        return await Sale.findByIdAndUpdate(saleId, dataToUpdate, { new: true });
    }

    static async getSaleAnalytics() {
        const totalSales = await Sale.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $multiply: ['$salePrice', '$quantity'] } },
                    totalQuantity: { $sum: '$quantity' },
                    totalMargin: { $sum: '$margin' },
                    totalSales: { $sum: 1 }
                }
            }
        ]);

        const monthlySales = await Sale.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
                    monthlyRevenue: { $sum: { $multiply: ['$salePrice', '$quantity'] } },
                    monthlyQuantity: { $sum: '$quantity' },
                    monthlySales: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        return {
            totalSales: totalSales[0] || {
                totalRevenue: 0,
                totalQuantity: 0,
                totalMargin: 0,
                totalSales: 0
            },
            monthlySales
        };
    }
}