import { Stock, IStock } from '../models/Stock';

export class StockService {
    static async getAllStock() {
        const stocks = await Stock.find().sort({ createdAt: -1 });
        return stocks;
    }

    static async createStock(stockData: Partial<IStock>) {
        console.log('Tentative de création de stock avec les données:', stockData);
        const stock = new Stock(stockData);
        const savedStock = await stock.save();
        console.log('Stock créé avec succès:', savedStock);
        return savedStock;
    }

    static async deleteStock(reference: string) {
        return await Stock.findOneAndDelete({ reference });
    }

    static async updateStock(reference: string, updateData: Partial<IStock>) {
        return await Stock.findOneAndUpdate(
            { reference },
            { ...updateData, lastUpdated: new Date() },
            { new: true }
        );
    }

    static async getLowStock() {
        return await Stock.find({ $expr: { $lte: ['$quantity', '$threshold'] } });
    }

    static async getAnalytics() {
        const analytics = await Stock.aggregate([
            {
                $group: {
                    _id: null,
                    totalProducts: { $sum: 1 },
                    totalValue: { $sum: { $multiply: ['$quantity', '$unitPrice'] } },
                    lowStockCount: {
                        $sum: { $cond: [{ $lte: ['$quantity', '$threshold'] }, 1, 0] }
                    }
                }
            }
        ]);
        return analytics[0] || { totalProducts: 0, totalValue: 0, lowStockCount: 0 };
    }
}
