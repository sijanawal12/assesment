
module.exports = (sequelize, DataTypes) => {
    const Video = sequelize.define("video", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.TEXT
    },
    active: {
        type: DataTypes.TEXT
    }

})

return Video

}