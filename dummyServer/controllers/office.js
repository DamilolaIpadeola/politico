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


    static getAllOffices(request, response) {
        if (offices.length === 0) {
            return request.status(404).json({
                status: true,
                message: "no Offices available"
            })

        }
        return response.status(200).json({
            status: true,
            data: offices
        })
    }

    static getSpecificOffices(request, response) {
        let data;
        for (let i = 0; i < offices.length; i++) {
            if (request.params.id == offices[i].id) {
                data = offices[i];
            }
        }
        if (data) {
            return response.status(200).json({
                status: true,
                data: data
            })
        } else {
            return response.status(404).json({
                status: true,
                message: 'no Office found'
            })
        }

    }
    
}

export default officesController;