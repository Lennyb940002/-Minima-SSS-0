import mongoose from 'mongoose';

export interface ISale {
    product: string;
    quantity: number;
    salePrice: number;
    unitCost: number;
    margin: number;
    date: Date;
    client?: string;
    paymentMethod: 'cash' | 'card' | 'transfer';
    paymentStatus: 'pending' | 'completed' | 'cancelled';
    notes?: string;
}

const SaleSchema = new mongoose.Schema<ISale>({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    salePrice: {
        type: Number,
        required: true,
        min: 0
    },
    unitCost: {
        type: Number,
        required: true,
        min: 0
    },
    margin: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    client: {
        type: String
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'card', 'transfer'],
        default: 'cash'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

export const Sale = mongoose.model<ISale>('Sale', SaleSchema);