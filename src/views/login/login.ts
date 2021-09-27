import { Options, Vue } from 'vue-class-component'
import { ref, unref } from 'vue'
import { validPhone } from '@/utils/index'
import { login, getMe } from '@/api/auth'
import { useStore } from '@/store'

@Options({
  // components: {
  //   HelloWorld,
  // },
})
export default class Login extends Vue {
  private store = useStore()
  form = {
    phone: '',
    pwd: ''
  }
  loginFormRef = ref()
  rules = {
    phone: [
      {
        required: true,
        message: '请输入手机号码',
        trigger: ['change', 'blur']
      },
      {
        validator: (
          _rule: never,
          value: string,
          callback: (arg0?: Error | undefined) => unknown
        ): unknown =>
          validPhone(value)
            ? callback()
            : callback(new Error('请输入正确的手机号码')),
        trigger: ['change', 'blur']
      }
    ],
    pwd: [
      { required: true, message: '请输入密码', trigger: ['change', 'blur'] }
    ]
  }
  async login(): Promise<void> {
    const res = await login(this.form)
    console.log(res)
    if (res.code === 0) {
      const token = res.data.token || ''
      this.store.dispatch('changeToken', token)
      this.getMe(token)
    }
  }
  submit(): void {
    const loginRef = unref(this.loginFormRef)
    loginRef &&
      loginRef.validate((vaild: boolean): void => {
        vaild && this.login()
      })
  }
  /**
   * 查询我的信息
   * @param {String} token
   */
  async getMe(token: string): Promise<void> {
    try {
      const res = await getMe(token)
      if (res.code === 0) {
        this.store.dispatch('changeMe', res.data || {})
        this.$router.push({ name: 'home' })
      }
    } catch (err) {
      console.log(err)
    }
  }
}
