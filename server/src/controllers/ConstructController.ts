import { Request, Response } from 'express';
import { ConstructBenefit } from '@models/ConstructBenefit';
import { Citi, Crud } from '../global'

export default class ConstructController implements Crud {

    async create(request: Request, response: Response) {
        const { tag, title, text, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if (isAnyUndefined) return response.status(400).send();

        const newConstructBenefit = { tag, title, text, image };
        const { httpStatus, message } = await Citi.insertIntoDatabase(ConstructBenefit, newConstructBenefit);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response) {
        const { httpStatus, values } = await Citi.getAll(ConstructBenefit);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const { value: userFound, message } = await Citi.findByID(ConstructBenefit, id);

        if (!userFound) return response.status(400).send({ message });

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(ConstructBenefit, userFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { tag, title, text, image } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if (isAnyUndefined) return response.status(400).send();

        const constructWithUpdatedValues = { tag, title, text, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(ConstructBenefit, id, constructWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}
