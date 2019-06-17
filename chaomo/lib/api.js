const baseData = {
	base_url: 'https://mock.biaoyansu.com/api/1/',
	appKey: '9b20e6d77f9e4982e60ea86bb9fcbb3f5ab62887cbe4865bc686866614bdd2b6',
	timestamp: Date.now()
}

class HTTP {
	request({
		url,
		data = {}
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data)
		})
	}

	_request(url, resolve, reject, data = {}) {
		uni.request({
			url: baseData.base_url + url,
			data,
			method: 'POST',
			header: {
				'BIAO-MOCK-APP-KEY': baseData.appKey,
				'BIAO-MOCK-TIMESTAMP': baseData.timestamp,
				'BIAO-MOCK-SIGNATURE': this._sign(baseData.appKey, baseData.timestamp)
			},
			success: r => {
				const code = r.statusCode.toString();
				if (code.startsWith('2')) {
					resolve(r.data)
				} else {
					reject();
					this._showError('请求错误')
				}
			},
			fail: () => {
				reject();
				this._showError('请求失败')
			}
		})
	}

	_showError(title) {
		wx.showToast({
			title,
			icon: 'none',
			duration: 2000
		})
	}

	_sign(appKey, timestamp) {
		return this._btoa(appKey + timestamp);
	}

	_btoa(str) {
		let c1, c2, c3;
		let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		let i = 0,
			len = str.length,
			strin = '';
		while (i < len) {
			c1 = str.charCodeAt(i++) & 0xff;
			if (i == len) {
				strin += base64EncodeChars.charAt(c1 >> 2);
				strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
				strin += "==";
				break;
			}
			c2 = str.charCodeAt(i++);
			if (i == len) {
				strin += base64EncodeChars.charAt(c1 >> 2);
				strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
				strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
				strin += "=";
				break;
			}
			c3 = str.charCodeAt(i++);
			strin += base64EncodeChars.charAt(c1 >> 2);
			strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
			strin += base64EncodeChars.charAt(c3 & 0x3F)
		}
		return strin
	}
}

export {
	HTTP
}
