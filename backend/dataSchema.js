import mongoose from 'mongoose'

const boatData = mongoose.Schema(
    {
        boatName: {
            type: String,
            require: true,
            minLength: 1
        },

        constructionYear: {
            type: String,
            require: true,
            minLength: 1
        },

        material: {
            type: String,
            require: true,
            minLength: 1
        },

        serialNumber: {
            type: String,
            require: true,
            minLength: 1
        }, 

        boatType: {
            type: String,
            require: true,
            minLength: 1
        },

        bookedStatus: {
            type: Boolean,
            minLength: 1,
            default: false
        },

        bookedFrom: {
            type: String,
            /* minLength: 1 */
        },

        bookedTo: {
            type: String,
            /* minLength: 1 */
        },

        bookingNumber: {
            type: String,
            /* minLength: 1 */
        }
    },

    {
        timestamps: true
    }
)


const boatDataSet = mongoose.model('boatDataSet',boatData )

export default boatDataSet