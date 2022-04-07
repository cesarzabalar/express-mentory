const { connect } = require('mongoose');
const { MONGO_URI } = require('../../../config');

class MongoDB {
	conn = null;

	static async getConnect() {
		if (!this.conn) {
			this.conn = connect(MONGO_URI);
			return await this.conn;
		}
		return this.conn;
	}
}

module.exports = MongoDB;
