export const checkCreatePartyInput = (req, res, next) => {
    const { name, hqAddress, logoUrl, description } = req.body
    if (!name || !hqAddress || !logoUrl || !description) {
        return res.status(400).json({
            status: false,
            message: 'all fields are required'
        })
    }else {
        next();
};
};
