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
    };

    static getParty(req, res) {
        return res.status(200).json({
            status: true,
            party
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
                // if (name) {
                //     party[i].name = name;
                // } 
                // else if (description) {

                //     party[i].description = description;
                // }
                // else if (hqAddress) {
                //     party[i].hqAddress = hqAddress;
                // }
                // else if (logoUrl) {
                //     party[i].logoUrl = logoUrl     
                // }
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

    
}
export default PartyController;

