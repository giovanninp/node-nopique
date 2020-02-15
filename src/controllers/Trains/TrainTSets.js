const Train = require('../../models/Train');
const TrainSet = require('../../models/TrainSet');

module.exports = {
	async index(req, resp) {
		const {
			train_id
		} = req.query;

		let result = {
			train: {},
			train_sets: []
		};

		if (train_id) {
			result.train = await Train.findById(train_id);
			result.train_sets = await TrainSet.find({
				train_id
			});
		}

		return resp.json(result);

	},
	async store(req, resp) {
		const {
			train_id,
			train_set_id
		} = req.body;

		let result = {
			train: {},
			train_set: {}
		};
		console.log("hello");
		if(train_id && train_set_id) {
			result.train = await Train.findById(train_id);
			result.train_set = await TrainSet.findById(train_set_id);
			console.log(result);
			if(result.train && result.train_set) {
				result.train.trains_sets_ids.push(train_set_id);
				result.train = await Train.findByIdAndUpdate(train_id,{
					trains_sets_ids: result.train.trains_sets_ids
				});
				result.train_set = await TrainSet.findByIdAndUpdate(train_set_id,{
					train_id
				});
			}
		}
		return resp.json(result);
	},
	async delete(req, resp) {

	}
}