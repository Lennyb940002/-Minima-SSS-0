import mongoose, { Document } from 'mongoose';

export interface IStock extends Document {
    product: string;
    reference: string;
    quantity: number;
    unitPrice: number;
    salePrice: number;
    threshold: number;
    category: string;
    description?: string;
    lastUpdated: Date;
}

const StockSchema = new mongoose.Schema<IStock>({
    product: { type: String, required: true },
    reference: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true, min: 0 },
    unitPrice: { type: Number, required: true, min: 0 },
    salePrice: { type: Number, required: true, min: 0 },
    threshold: { type: Number, required: true, default: 5 },
    category: { type: String, required: true },
    description: { type: String },
    lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

export const Stock = mongoose.model<IStock>('Stock', StockSchema);
