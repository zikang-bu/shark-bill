import ajax from './apiRouters'

/*** 记账 ***/
export const BOOK_ITEMS = '/api/v1/book/items'
export const BOOK_ITEM = '/api/v1/book/setItem'

// 获取记账列表
export const getBookItems = (date) => {
  return ajax.get(BOOK_ITEMS, {
    params: {
      date
    }
  })
}

// 更新记账实例
export const updateBookItem = (id, date, category, type, amount, remarks) => {
  return ajax.put(BOOK_ITEM, {
    id, date, category, type, amount, remarks
  })
}

// 设置记账实例
export const setBookItem = (date, category, type, amount, remarks) => {
  return ajax.post(BOOK_ITEM, {
    date, category, type, amount, remarks
  })
}

// 删除记账实例
export const deleteBookItem = id => {
  return ajax.delete(BOOK_ITEM, {
    params: {
      id
    }
  })
}

// 查询记账实例ById
export const getBookItem = id => {
  return ajax.get(BOOK_ITEM, {
    params: {
      id
    }
  })
}