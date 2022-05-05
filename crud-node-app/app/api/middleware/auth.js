// Fake auth middleware
module.exports = {
    auth: (req, res, next) => {
        // validate authentication
        // if (!isAuthenticated) return res.status(401).send({success:false, message:"unauthorized");
        next();
    }
}
