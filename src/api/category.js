import ajax from './apiRouters'

/*** 类目 ***/
export const CATEGORY_ITEMS = '/api/v1/category/items'
export const CATEGORY_ITEM_SET = '/api/v1/category/setItem'

// 获取类目列表
export const getCategoryItems = (type) => {
  return ajax.get(CATEGORY_ITEMS, {
    params: {
      type
    }
  })
}

// 更新类目实例
export const updateCategoryItem = (id, item) => {
  return ajax.put(CATEGORY_ITEM_SET, {
    id,
    item
  })
}

// 设置类目实例
export const setCategoryItem = data => {
  return ajax.post(CATEGORY_ITEM_SET, data)
}

// 删除类目实例
export const deleteCategoryItem = id => {
  return ajax.delete(CATEGORY_ITEM_SET, {
    params: {
      id
    }
  })
}

// 查询类目实例ById
export const getCategoryItem = id => {
  return ajax.get(CATEGORY_ITEM_SET, {
    params: {
      id
    }
  })
}