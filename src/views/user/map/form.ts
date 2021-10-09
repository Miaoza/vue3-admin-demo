export default [
  {
    type: 'input',
    model: 'username',
    label: '用户名',
    span: 24,
    attrs: {
      placeholder: '请输入用户名',
      required: true
    },
    defaultValue: ''
  },
  {
    type: 'date',
    model: 'birth',
    label: '出生日期',
    span: 8,
    attrs: {
      placeholder: '请选择出生日期',
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY/MM/DD',
      disabledDate: (time: Date): boolean => {
        return time.getTime() > Date.now()
      },
      required: true
    },
    defaultValue: ''
  },
  {
    type: 'select',
    model: 'gender',
    label: '性别',
    options: ['男', '女'].map((v) => ({
      label: v,
      value: v
    })),
    span: 8,
    attrs: {
      placeholder: '请选择性别',
      clearable: true,
      required: true
    },
    defaultValue: ''
  }
]
