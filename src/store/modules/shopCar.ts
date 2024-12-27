import { ref, computed } from "vue"
import type { Ref } from "vue"
import { defineStore } from "pinia"

interface shop {
  id: string
  path: string
  price: number
  name: string
  subTitle: string
  type: string
  num?: number
}

/** 设置侧边栏状态本地缓存 */

export const useShopCarStore = defineStore("shopCar", () => {
  const shopList: Ref<shop[]> = ref([])

  const carTotal = computed(() =>
    shopList.value.reduce((sum, shop) => {
      return sum + (shop.num || 0) // 如果 num 未定义，则视为 0
    }, 0)
  )
  const carPriceTotal = computed(() =>
    shopList.value.reduce((sum, shop) => {
      const quantity = shop.num || 0 // 如果 num 未定义，则视为 0
      return sum + quantity * shop.price
    }, 0)
  )
  const addCar = (value: shop) => {
    const index = shopList.value.findIndex((p) => {
      return p.id == value.id
    })
    if (index !== -1) {
      shopList.value[index].num && shopList.value[index].num++
    } else {
      shopList.value.push({ ...value, num: 1 }) // 克��对象
    }
  }
  const removeCar = (value: shop) => {
    const index = shopList.value.findIndex((p) => {
      return p.id == value.id
    })
    if (index !== -1) {
      shopList.value.splice(index, 1) // 删除元素
    }
  }
  const editCarNum = (value: shop, actionName: string) => {
    const index = shopList.value.findIndex((p) => {
      return p.id == value.id
    })
    if (index !== -1) {
      if (actionName === "add") {
        shopList.value[index].num && shopList.value[index].num++
      }
      if (actionName === "delete") {
        shopList.value[index].num && shopList.value[index].num > 0 && shopList.value[index].num--
      }
    }
  }

  return { addCar, removeCar, editCarNum, carTotal, shopList, carPriceTotal }
})
