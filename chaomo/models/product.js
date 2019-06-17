import {
	HTTP
} from "../lib/api"

class ProductRequest extends HTTP {

	read(data) {
		return this.request({
			url: 'product/read',
			data
		})
	}

	// update(data) {
	// 	return this.request({
	// 		url: 'product/update',
	// 		data
	// 	})
	// }
}


export {
	ProductRequest
}
