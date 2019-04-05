import express from 'express';
import PartyController from '../../dummyServer/controllers/party';
import {checkCreatePartyInput, checkParamsId, checkCreatePoliticalOffices} from '../../dummyServer/middleware/validation' 
import officesController from '../../dummyServer/controllers/office';
const app = express.Router();

app.get('/api/v1', (req, res) => {
    res.status(200)
        .json({
            status: true,
            message: "Welcome to politico API."
        });
});

app.post('/api/v1/parties', checkCreatePartyInput, PartyController.createParty);
app.get('/api/v1/parties', PartyController.getParty)
app.get('/api/v1/parties/:id', checkParamsId, PartyController.getSpecificParty);
app.put('/api/v1/parties/:id', checkParamsId, PartyController.editSpecificParty);
app.delete('/api/v1/parties/:id', checkParamsId, PartyController.deleteSpecificParty);
app.post('/api/v1/offices', checkCreatePoliticalOffices, officesController.createPoliticalOffices)
app.get('/api/v1/offices', officesController.getAllOffices)
app.get('/api/v1/offices/:id', checkParamsId, officesController.getSpecificOffices)




export default app;
