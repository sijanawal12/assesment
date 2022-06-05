
module.exports = (sequelize, DataTypes) => {
    const Videolist = sequelize.define("videolist", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    link: {
        type: DataTypes.STRING
    },
    
})

return Videolist

}