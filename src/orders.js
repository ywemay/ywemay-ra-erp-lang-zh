const orders = {
  status: '状态',
  orders: '订单',
  order: '订单',
  items: '订单项目',
  count: '订单数量',
  no: {
    items: '未找到订单项目...',
  },
}

const sales = {
  orders: '销售订单',
  order: '销售订单',
  extended: '扩展',
}

 const messages = {
  no: {
    sales: {
      orders: '找不到销售订单。'
    }
  }
}

const info = {
  product: {
    sales: {
      orders: '此产品是订单中的产品列表：',
    }
  }
}

export default {
  orders,
  sales,
  total: {
    orders: '订单数量',
    orderItems: '订单项数量',
  },
  last: {
    orderDate: '最后下单时间',
    proposalDate: '最后提交建议时间',
  },
  first: {
    orderDate: '首次下单时间',
    proposalDate: '第一次提交建议时间',
  },
  actions: {
    new: {
      order: '添加订单'
    }
  },
  info,
  messages,
}