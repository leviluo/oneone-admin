import specialitiesController from '../controllers/specialitiesController'
// import memberController from '../controllers/memberController'
import authController from '../controllers/authController'
import fileController from '../controllers/fileControllers'
// import organizationController from '../controllers/organizationController'
// import config from '../../config'

// const paths = config.utils_paths

import '../../utils'

export default function routers(router){

	router.post("/login",authController.login,router.allowedMethods());

	router.get("/auth",authController.auth,router.allowedMethods());

	router.get("/loginOut",authController.loginOut,router.allowedMethods());
	// 获取所有专业
	router.get("/specialities",specialitiesController.getItem,authController.islogin,router.allowedMethods());
	// 新增
	router.post("/specialities",specialitiesController.addNewItem,authController.islogin,router.allowedMethods());
	// 修改
	router.put("/specialities",specialitiesController.modifyItem,authController.islogin,router.allowedMethods());
	// 删除
	router.delete("/specialities",specialitiesController.deleteItem,authController.islogin,router.allowedMethods());
}
