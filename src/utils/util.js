export default function  showSuccess(text){
    wx.showToast({
        title: text,
        icon: 'success',
        duration: 2000
      })
    }
export function showModel(title,content){
    wx.showModal({
        title: title,
        content: content,
        showCancel:false
      })
}