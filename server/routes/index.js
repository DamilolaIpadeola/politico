import express from 'express';
import PartyController from '../../dummyServer/controllers/party';
import {checkCreatePartyInput,} from '../../dummyServer/middleware/validation' 


const app = express.Router();

app.get('/api/v1', (req, res) => {
    res.status(200)
        .json({
            status: true,
            message: "Welcome to politico API."
        });
});

app.post('/api/v1/parties', checkCreatePartyInput, PartyController.createParty);


export default app;
