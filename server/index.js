import axios, { CancelToken, isCancel } from 'axios-miniprogram';

// 基础服务器配置
axios.defaults.baseURL = 'http://abc.alongweb.top:3000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = '60000';

// 出错时显示错误信息
axios.defaults.showError = true;

// 请求时自动 loading
axios.defaults.showLoading = false;

// 请求拦截器
axios.interceptors.request.use((config) => {
	// 添加token
	// axios.defaults.headers.common['token'] = '123';
	// 自动显示 loading
	if (config.showLoading) {
		wx.showLoading();
	}
	return config;
});

// 响应拦截器
axios.interceptors.response.use((response) => {
	// 自动隐藏 loading
	if (response.config.showLoading) {
		wx.hideLoading();
	}
	return response;
});

// 全局错误处理
axios.defaults.errorHandler = (error) => {
	if (axios.isAxiosError(error)) {
		// 显示错误信息
		if (error.config.showError) {
			wx.showToast({
				title: error.response.data.errMsg,
			});
		}
	}

	return Promise.reject(error);
};

// 封装get请求
export const get = (url, config = {}) => {
	return new Promise((resolve, reject) => {
		const _config = {
			url: url,
			...config,
			method: 'GET',
		};

		console.log('get', { ..._config });

		axios
			.request({ ..._config })
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

// 封装post请求
export const post = (url, config = {}) => {
	return new Promise((resolve, reject) => {
		const _config = {
			url: url,
			...config,
			method: 'POST',
		};

		axios
			.request({ ..._config })
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

// 封装上传请求
export const upload = (url, config = {}) => {
	return new Promise((resolve, reject) => {
		const _config = {
			url: url,
			...config,
			method: 'POST',
			upload: true,
		};

		axios({
			method: 'POST',
			upload: true,
			onUploadProgress(event) {
				const {
					// 上传进度百分比
					progress,
					// 已经上传的数据长度，单位 Bytes
					totalBytesSent,
					// 预期需要上传的数据总长度，单位 Bytes
					totalBytesExpectedToSend,
				} = event;
				// TODO
			},
		})
			.then((response) => {
				// TODO
				resolve(response.data);
			})
			.catch((error) => {
				// 失败之后做些什么
			});
	});
};

// 封装下载求
export const download = (config = {}) => {
	return new Promise((resolve, reject) => {
		const _config = {
			url: url,
			...config,
			download: true,
			onDownloadProgress(event) {
				const {
					// 下载进度百分比
					progress,
					// 已经下载的数据长度，单位 Bytes
					totalBytesWritten,
					// 预预期需要下载的数据总长度，单位 Bytes
					totalBytesExpectedToWrite,
				} = event;

				// TODO
			},
		};

		axios({ ..._config })
			.then((response) => {
				// TODO
				resolve(response.data);
			})
			.catch((error) => {
				// 失败之后做些什么
				reject(error);
			});
	});
};
