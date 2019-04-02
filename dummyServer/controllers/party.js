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


}

export default PartyController;

