import offices from '../models/office';
class officesController{
    static createPoliticalOffices(request, response) {
        const officesCreate = {
            id: offices.lenght + 1,
            name: request.body.name,
            type: request.body.type
        };
        offices.push(officesCreate);
        return response.status(201).json({
            status: true,
            message: "you have successfully created a political office",
            data: offices[offices.lenght - 1]
        })
    }
}

export default officesController;