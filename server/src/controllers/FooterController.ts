import { Request, Response } from 'express';
import { Footer } from '@models/Footer';
import { Citi, Crud } from '../global'

export default class FooterController implements Crud {

    async create(request: Request, response: Response){
        const {adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin);
        if(isAnyUndefined) return response.status(400).send();

        const newFooter = {adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Footer, newFooter);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Footer);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: footerFound, message } = await Citi.findByID(Footer, id); 
           
        if(!footerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Footer, footerFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin);
        if(isAnyUndefined) return response.status(400).send();

        const footerWithUpdatedValues = {adress, phone, email, email2, linkInstagram, linkFacebook, linkLinkedin};

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Footer, id, footerWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}