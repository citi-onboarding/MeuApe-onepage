import { Request, Response } from 'express';
import { ClientBenefit } from '@models/ClientBenefit';
import { Citi, Crud } from '../global'

export default class ClientController implements Crud {

    async create(request: Request, response: Response) {
        const { tag, title, text, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if (isAnyUndefined) return response.status(400).send();

        const newClientBenefit = { tag, title, text, image };
        const { httpStatus, message } = await Citi.insertIntoDatabase(ClientBenefit, newClientBenefit);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(ClientBenefit);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const { value: userFound, message } = await Citi.findByID(ClientBenefit, id);

        if (!userFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(ClientBenefit, userFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { tag, title, text, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if (isAnyUndefined) return response.status(400).send();

        const clientWithUpdatedValues = { tag, title, text, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(ClientBenefit, id, clientWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}