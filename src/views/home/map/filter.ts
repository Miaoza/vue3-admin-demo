export const filterItems = [
  {
    type: 'select',
    model: 'test',
    label: '产品',
    clearable: true,
    options: [...new Array(4)].map((_, i) => ({
      label: `product${i + 1}`,
      value: `product${i + 1}`
    })),
    defaultValue: 'product1'
  }
]
