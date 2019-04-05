import party from "../models/party";

class PartyController {

    static createParty(request, response) {
        const partyAdded = {
            id: party.length + 1,
            description: request.body.description,
            name: request.body.name,
            hqAddress: request.body.hqAddress,
            logoUrl: request.body.logoUrl,

        };
        party.push(partyAdded)
        return response.status(201).json({
            message: "you have successfully created a party",
            newParty: party[party.length - 1]

        })
    }

    static getParty(req, res) {
        if (party.length === 0) {
            return res.status(200).json({
                status: true,
                message: "no party available"
            })

        }
        return response.status(200).json({
            status: true,
            data: party
        })
    }

    static getSpecificParty(req, res) {
        let data;
        for (let i = 0; i < party.length; i++) {
            if (req.params.id == party[i].id) {
                data = party[i];
            }
        }
        if (data) {
            return res.status(200).json({
                status: true,
                data: data
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'no party found'
            })
        }

    }

    static editSpecificParty(request, response) {
        let data
        const { name, description, hqAddress, logoUrl } = request.body
        for (let i = 0; i < party.length; i++) {
            if (request.params.id == party[i].id) {
                
                party[i].name = name ? name : party[i].name;
                party[i].description = description ? description : party[i].description;
                party[i].hqAddress = hqAddress ? hqAddress : party[i].hqAddress;
                party[i].logoUrl = logoUrl ? logoUrl : party[i].logoUrl;
                data = party[i]
            }
        }

        return response.status(200).json({
            status: true,
            data: data
        })
    }
    
    static deleteSpecificParty(request, response) {
        let found = false;
        for (let i = 0; i < party.length; i++) {
            if (request.params.id == party[i].id) {
                party.splice(i, 1)
                found = true
            }
        }

        if (found) {
            return response.status(200).json({
                status: true,
                message: 'you have successfully deleted a party'
            })
        } else {
            return response.status(404).json({
                status: true,
                message: 'No party found for the specify id'
            })
        }

    }

}
export default PartyController;

