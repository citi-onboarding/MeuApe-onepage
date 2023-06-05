import { Request, Response } from 'express';
import { ConstructBenefits } from '@models/ConstructBenefits';
import { Citi, Crud } from '../global'

export default class ConstructBenefitsController implements Crud {

    async create(request: Request, response: Response){
        const {tag, title, text, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if(isAnyUndefined) return response.status(400).send();

        const newConstructbenefits = {tag, title, text, image};
        const {httpStatus, message} = await Citi.insertIntoDatabase(ConstructBenefits, newConstructbenefits);

        return response.status(httpStatus).send({ message });
    }
    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(ConstructBenefits);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: ConstructBenefitsFound, message} = await Citi.findByID(ConstructBenefits, id); 
           
        if(!ConstructBenefitsFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(ConstructBenefits, ConstructBenefitsFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {tag, title, text, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(tag, title, text, image);
        if(isAnyUndefined) return response.status(400).send();

        const footerWithUpdatedValues = { tag, title, text, image };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(ConstructBenefits, id, footerWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}