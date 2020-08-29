import bgAnimation from './bgAnimation'

const components = {
  bgAnimation
}

// 组件安装
function myComponent (Vue) {
  // 组件是否已安装
  if (myComponent.installed) {
    return
  }
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
}
// 导出组件
export default myComponent
