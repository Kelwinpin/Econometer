import DiscountRequest from '../model/discountRequest.js';

const DiscountRequestController = {
    async create(req, res) {
        const user_id = parseInt(req.params.user_id);
        const establishment_id = parseInt(req.params.establishment_id)
        const { validity, discount_value, purchase_value, status, validation_date } = req.body;

        try {
            const newDiscountRequest = await DiscountRequest.create({
                validity,
                discount_value,
                purchase_value,
                status,
                validation_date,
                user_id,
                establishment_id
            });
            res.status(201).json(newDiscountRequest);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getById(req, res) {
        const { establishment_id, user_id, request_id } = req.params;

        try {
            const discountRequest = await DiscountRequest.findOne({
                where: {
                    id: request_id,
                    user_id,
                    establishment_id
                }
            });
            if (discountRequest) {
                res.json(discountRequest);
            } else {
                res.status(404).json({ message: 'Discount request not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async update(req, res) {
        const { establishment_id, user_id, request_id } = req.params;
        const { validity, discount_value, purchase_value, status, validation_date } = req.body;

        try {
            const discountRequest = await DiscountRequest.findOne({
                where: {
                    id: request_id,
                    user_id,
                    establishment_id
                }
            });
            if (discountRequest) {
                await discountRequest.update({
                    validity,
                    discount_value,
                    purchase_value,
                    status,
                    validation_date
                });
                res.json(discountRequest);
            } else {
                res.status(404).json({ message: 'Discount request not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async delete(req, res) {
        const { establishment_id, user_id, request_id } = req.params;

        try {
            const discountRequest = await DiscountRequest.findOne({
                where: {
                    id: request_id,
                    user_id,
                    establishment_id
                }
            });
            if (discountRequest) {
                await discountRequest.destroy();
                res.json({ message: 'Discount request deleted successfully' });
            } else {
                res.status(404).json({ message: 'Discount request not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getByUserId(req, res) {
        const { user_id } = req.params;

        try {
            const discountRequests = await DiscountRequest.findAll({
                where: { user_id }
            });
            res.json(discountRequests);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getByEstablishmentId(req, res) {
        const { establishment_id } = req.params;

        try {
            const discountRequests = await DiscountRequest.findAll({
                where: { establishment_id }
            });
            res.json(discountRequests);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export default DiscountRequestController;
