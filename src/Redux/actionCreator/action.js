import actionConstant from "../ActionConstant/actionConstant";
export const paramsAction = (params) => {
    return {
        type: actionConstant.params,
        payload: params,
    };
};
