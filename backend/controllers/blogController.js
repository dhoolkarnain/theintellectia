const Blog = require( '../models/blogModel' )
const mongoose = require( 'mongoose' )

// get all workouts
const getBlogs = async ( req, res ) =>
{
    const blogs = await Blog.find( {} ).sort( { createdAt: -1 } )

    res.status( 200 ).json( blogs )
}

// get a single workout
const getBlog = async ( req, res ) =>
{
    const { id } = req.params

    if ( !mongoose.Types.ObjectId.isValid( id ) )
    {
        return res.status( 404 ).json( { error: 'No such blog' } )
    }

    const blog = await Blog.findById( id );

    if ( !blog )
    {
        return res.status( 404 ).json( { error: 'No such blog' } )
    }

    res.status( 200 ).json( blog )
}

// create a new workout
const createBlog = async ( req, res ) =>
{
    const { image, title, body, tags, genre, source } = req.body

    let emptyFields = []

    if ( !image )
    {
        emptyFields.push( 'image' )
    }
    if ( !title )
    {
        emptyFields.push( 'title' )
    }
    if ( !body )
    {
        emptyFields.push( 'body' )
    }
    if ( !tags )
    {
        emptyFields.push( 'tags' )
    }
    if ( !genre )
    {
        emptyFields.push( 'genre' )
    }
    if ( !source )
    {
        emptyFields.push( 'source' )
    }
    if ( emptyFields.length > 0 )
    {
        return res.status( 400 ).json( { error: 'Please fill in all fields', emptyFields } )
    }

    // add to the database
    try
    {
        const blog = await Blog.create( { image, title, body, tags, genre, source } )
        res.status( 200 ).json( blog )
    } catch ( error )
    {
        res.status( 400 ).json( { error: error.message } )
    }
}

// delete a workout
const deleteBlog = async ( req, res ) =>
{
    const { id } = req.params

    if ( !mongoose.Types.ObjectId.isValid( id ) )
    {
        return res.status( 400 ).json( { error: 'No such workout' } )
    }

    const blog = await Blog.findOneAndDelete( { _id: id } )

    if ( !blog )
    {
        return res.status( 400 ).json( { error: 'No such workout' } )
    }

    res.status( 200 ).json( blog )
}

// update a workout
const updateBlog = async ( req, res ) =>
{
    const { id } = req.params

    if ( !mongoose.Types.ObjectId.isValid( id ) )
    {
        return res.status( 400 ).json( { error: 'No such workout' } )
    }

    const blog = await Blog.findOneAndUpdate( { _id: id }, {
        ...req.body
    } )

    if ( !blog )
    {
        return res.status( 400 ).json( { error: 'No such workout' } )
    }

    res.status( 200 ).json( blog )
}

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
}