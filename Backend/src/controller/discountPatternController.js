import DiscountPattern from '../model/discountPattern.js';

const DiscountPatternController = {
    async getByEstablishmentId(req, res) {
        const { establishment_id } = req.params;

        try {
            const discountPatterns = await DiscountPattern.findAll({ where: { establishment_id } });
            if (discountPatterns.length > 0) {
                res.json(discountPatterns);
            } else {
                res.status(404).json({ message: 'Nenhum padrão de desconto encontrado para este estabelecimento.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    },

    async getById(req, res) {
        const { establishment_id, pattern_id } = req.params;

        try {
            const discountPattern = await DiscountPattern.findOne({
                where: {
                    id: pattern_id,
                    establishment_id
                }
            });
            if (discountPattern) {
                res.json(discountPattern);
            } else {
                res.status(404).json({ message: 'Padrão de desconto não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    },

    async create(req, res) {
        const establishment_id = parseInt(req.params.establishment_id);
        const { rule, discount_type, discount_value, discount_percentage } = req.body;

        try {
            const newDiscountPattern = await DiscountPattern.create({
                establishment_id,
                rule,
                discount_type,
                discount_value,
                discount_percentage
            });
            res.status(201).json(newDiscountPattern);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    },

    async delete(req, res) {
        const { establishment_id, pattern_id } = req.params;

        try {
            const discountPattern = await DiscountPattern.findOne({
                where: {
                    id: pattern_id,
                    establishment_id
                }
            });
            if (discountPattern) {
                await discountPattern.destroy();
                res.json({ message: 'Padrão de desconto deletado com sucesso.' });
            } else {
                res.status(404).json({ message: 'Padrão de desconto não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
};

export default DiscountPatternController;
