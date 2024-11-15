//  **Shipment**: Manages details of shipments.
//   - Fields: `trackingNumber`, `origin`, `destination`, `status`, `vehicleAssigned`, `driverAssigned`, `expectedDeliveryDate`, `deliveryDate`.

const mongoose = require('mongoose')

const shipmentSchema = new mongoose.Schema({
    trackingNumber:{
        type: Number,
        unique: true,
        required: true,
    },
    origin: {
        type: String,
        required:true 
    },
    destination: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["in transit", "delivered"],
        default: "in transit"
    },
    vehicleAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
        
    },
    driverAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
        required: true
    },
    expectedDeliveryDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        default: null,
    }
},{timestamps: true})

const shipmentModel = mongoose.model("Shipment", shipmentSchema);

module.exports = shipmentModel;