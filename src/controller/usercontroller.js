const User = require("../model/User")

//get all users
exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        if(users.length === 0)
        return res.status(404).json({
            success: false,
            message: 'No users were found'
        })
        res.status(200).json({
            success: true,
            message: "To-do list found",
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}

//get single users
exports.getUser = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let user = await User.findOne(id);
        if(!user) return res.status(404).json({
            success: false,
            message: 'To-do list not found'
        });
        res.status(200).json({
            success: true,
            message: 'To-do list found',
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
};

//create users
exports.createUser = async (req, res) => {
    try {
        let user = await req.body;
    let created = await User.create(user);
    if(!created) return res.status(400).json({
        success: false,
        message: 'To-do list creation failed'
    })
    return res.status(201).json({
        success: true,
        message: 'To-do list created successfully',
        user: created
    });
    } catch (error) {
       res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message,
       }) ;
    }
};

//update users
exports.updateUser = async (req, res) => {
  try {
    let id = {_id: req.params.id};
    let user = await req.body;
    let update = await User.findOneAndUpdate(id, user, {new: true});

    if (!update) 
    return res.status(400).json({
        success: false,
        message: "To-do list not updated",
    });
    return res.status(200).json({
        success: true,
        message: "To-do list updated",
        user: update,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
    });
  }
};

//delete users
exports.deleteUser = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let deleted = await User.findOneAndRemove(id);
        if(!deleted) return res.status(400).json({
            success: false,
            message: "To-do list not deleted",
        });
        return res.status(200).json({
            success: true,
            message: "To-do list deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};