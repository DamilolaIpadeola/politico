import { request } from "http";

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

export const checkParamsId = (req, res, next) => {
    if (isNaN(req.params.id)) {
        return res.status(400).json({
            status: false,
            message: 'Id have to be a number' 
        }) 
    } else {
        next();
    }
}
export const checkCreatePoliticalOffices = (request, response) => {
    const {name, type} = request.body
    if(!name || !type) {
        return response.status(404).json ({
            status: false,
            message: "invalid input"
        })
    }
}