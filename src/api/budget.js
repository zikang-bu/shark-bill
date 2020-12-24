import ajax from './apiRouters'

/*** 预算 ***/
export const BUDGET_INFO = '/api/v1/budget/budget'

// 获取预算信息
export const getBudgetInfo = (date) => {
    return ajax.post(BUDGET_INFO, { date })
}