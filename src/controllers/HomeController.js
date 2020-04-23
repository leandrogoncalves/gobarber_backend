const HomeController = {

    index: function(req, res){
        return res.json({
            message: "hello world"
        });
    }
};

export default HomeController;