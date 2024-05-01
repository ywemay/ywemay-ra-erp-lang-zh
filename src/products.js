const products = {
  id: 'ID', 
  product: '产品', 
  products: '产品', 
  sku: 'SKU',
  published: '出版',
  label: '标签', 
  package: '包装',
}; 

export default {
  products,
  max: {
    unitPrice: '每单最高价格',
  },
  actions: {
    new: { product: "添加产品" },
    save_and_add_proposal: '保存/添加提案',
    save_and_list_products: '保存/列出产品',
  },
  inputs: {
    help: {
      product: {
        reference: "搜索现有产品的SKU或产品名称，或留空以在下面创建新产品。"
      },
    },
  },
}