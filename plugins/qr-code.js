import VueQrCode from 'vue-qrcode'

export default defineNuxtPlugin((NuxtApp) => {

  return{
    provide:{
      qrCode : VueQrCode
    }
  }
})