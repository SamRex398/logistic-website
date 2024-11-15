//  **Order**: Tracks individual orders being shipped.
//   - Fields: `orderId`, `client`, `items`, `shipment`, `status`, `orderDate`, `deliveryDate`.

const mongoose = required('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        unique: true,
        required: true,
    },
    client: {
        type: mongoose.Schema.Type.ObjectId,
        ref:'User',
        required: true,
    },
    items: [{
        itemName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    shipment: {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'Shipment',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in transit', 'delivered'],
        default: 'pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryDate: {
        type: Date
    }
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel