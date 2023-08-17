const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['donor', 'admin', 'organisation', 'hospital']
    },
    name: {
        type: String,
        required: function () {
            if (this.role === 'donor' || this.role === 'admin')
                return true;

            return false;
        }
    },
    organisationName: {
        type: String,
        required: function () {
            if (this.role === 'organisation')
                return true;

            return false;
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role === 'hospital')
                return true;

            return false;
        }
    },
    email: {
        type: String,
        required: [true, 'E-mail is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        message: [true, 'Address is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    }
}, { timestamps: true });
module.exports = mongoose.model('users', userSchema);