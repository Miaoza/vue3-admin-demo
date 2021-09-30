export const columns = [
  {
    label: 'ID',
    prop: 'id',
    width: 100
  },
  {
    label: '用户名',
    prop: 'username',
    'min-width': 120
  },
  {
    label: '性别',
    prop: 'gender'
  }
]

export const filterItems = [
  {
    type: 'select',
    model: 'gender',
    label: '性别',
    clearable: true,
    options: ['男', '女'].map((gender) => ({
      label: gender,
      value: gender
    }))
  }
]
