const mongoose = require( 'mongoose' )

const Schema = mongoose.Schema

const blogSchema = new Schema( {
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: [ {
        subheading: {
            type: String,
            required: true
        },
        para: {
            type: String,
            required: true
        }
    },
    ],
    clickedCount: {
        type: Number,
        default: 0,
        required: false
    },
    tags: [ {
        type: Array,
        required: true
    } ],
    active: {
        type: Boolean,
        required: false,
        default: false
    },
    genre: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
}, { timestamps: true } )

module.exports = mongoose.model( 'Blog', blogSchema )