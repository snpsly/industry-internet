import { ElNotification, ElMessageBox } from "element-plus"

const LevelSort = <T = any>(data: any[], field = "AlarmGrade") => {
  const Result: Array<Array<T>> = [
    data.filter((item) => item[field] == 2),
    data.filter((item) => item[field] == 1),
    data.filter((item) => item[field] == 0),
    data.filter((item) => item[field] == -1)
  ]

  Result.forEach((item) => {
    item.sort(function (a: any, b: any) {
      const obj1 = a.StartTime
      const obj2 = b.StartTime
      const val1 = Math.floor(new Date(obj1).getTime() / 1000)
      const val2 = Math.floor(new Date(obj2).getTime() / 1000)
      return val2 - val1
    })
  })
  let ResultSortData: T[] = []
  Result.forEach(function (item) {
    ResultSortData = ResultSortData.concat(item)
  })
  return JSON.parse(JSON.stringify(ResultSortData))
}

class WebSocketService {
  private socket: WebSocket | null = null
  private url: string = import.meta.env.VITE_GLOB_WebSocket_URL
  private reconnectTimer: ReturnType<typeof setInterval> | null = null
  private sendLoginIDTimer: ReturnType<typeof setInterval> | null = null
  private isReconnecting: boolean = false

  constructor() {}

  // 初始化WebSocket
  public initWebSocket(): void {
    console.log(this.socket)
    if (this.socket) {
      this.socket.close()
    }
    this.socket = new WebSocket(this.url)
    this.socket.onopen = this.onOpen.bind(this)
    this.socket.onmessage = this.onMessage.bind(this)
    this.socket.onclose = this.onClose.bind(this)
    this.socket.onerror = this.onError.bind(this)
  }

  // WebSocket打开事件处理
  private onOpen(): void {
    this.isReconnecting = false
    this.clearTimer(this.reconnectTimer)
    ElNotification().close()
    this.startSendLoginID()
    ElNotification({
      title: "连接成功",
      type: "success",
      duration: 2000
    })
  }

  // WebSocket消息事件处理
  private onMessage(event: MessageEvent): void {
    const msg: any = JSON.parse(event.data)
    const data = JSON.parse(localStorage.getItem("data")) //本地
    // console.log(data);
    switch (msg.DataType) {
      case "0": // 告警
        const AlarmStr: string = localStorage.getItem("Alarm") || "[]"
        const Alarm: AlarmInfo[] = JSON.parse(AlarmStr)
        const AlarmList: AlarmInfo[] = data.DataList as AlarmInfo[]
        AlarmList.map((item: AlarmInfo) => {
          if (!AlarmStr.includes(item.AlarmRecID)) {
            // const index:number = Alarm.findIndex(val => item.AlarmRecID == val.AlarmRecID);
            //无当前告警
            if (item.EndTime === "") {
              item.TriggerValue = Number(item.TriggerValue.toFixed(2))
              Alarm.push(item)
            }
          } else {
            //有当前告警
            const index: number = Alarm.findIndex((val) => item.AlarmRecID === val.AlarmRecID)
            if (item.EndTime === "") {
              item.TriggerValue = Number(item.TriggerValue.toFixed(2))
              Alarm[index] = item
            } else {
              Alarm.splice(index, 1)
            }
          }
        })
        localStorage.setItem("Alarm", JSON.stringify(LevelSort(Alarm)))
        window.dispatchEvent(new CustomEvent("onAlarm"))
        break
      case "11":
        msg.DataList.forEach(function (val) {
          // window.dispatchEvent(new CustomEvent('onSpeak', { detail: val.FaultName }))
          if (!JSON.stringify(data).includes(val.RecordID)) {
            const index = data.findIndex((item: any) => item.RecordID == val.RecordID)
            if (val.EndTime == "") {
              switch (val.AlarmGrade) {
                case -1:
                  val.AlarmGrade = "预警告警"
                  val.AlarmGradeCode = -1
                  val.background = "#96dcff"
                  break
                case 0:
                  val.AlarmGrade = "次要告警"
                  val.AlarmGradeCode = 0
                  val.background = "#4896E9"
                  break
                case 1:
                  val.AlarmGrade = "重要"
                  val.AlarmGradeCode = 1
                  val.background = "#ebb36c"
                  break
                case 2:
                  val.AlarmGrade = "紧急"
                  val.AlarmGradeCode = 2
                  val.background = "#f20c00"
                  break
              }
              val.TriggerValue = val.TriggerValue.toFixed(2)
              // val.StartTime = '2023-05-13 12:12:14'
              val.speakCount = 0
              if (index == -1) {
                data.push(val)
              } else {
                data[index] = JSON.parse(JSON.stringify(val))
              }
            } else {
              if (index != -1) {
                data.splice(index, 1)
              }
            }
          }
        })
        //排序后保存

        localStorage.setItem("data", JSON.stringify(data))
        break
      case "1":
        msg.DataList.forEach(function (val, key) {
          const speakCount = 0
          const index = data.findIndex((item) => item.RecordID == val.RecordID)
          if (val.EndTime == "") {
            switch (val.AlarmGrade) {
              case -1:
                val.AlarmGradeCode = -1
                val.AlarmGrade = "预警告警"
                val.background = "#96dcff"
                break
              case 0:
                val.AlarmGrade = "次要告警"
                val.AlarmGradeCode = 0
                val.background = "#4896E9"
                break
              case 1:
                val.AlarmGrade = "重要"
                val.AlarmGradeCode = 1
                val.background = "#ebb36c"
                break
              case 2:
                val.AlarmGrade = "紧急"
                val.AlarmGradeCode = 2
                val.background = "#f20c00"
                break
            }
            val.TriggerValue = val.TriggerValue.toFixed(2)
            if (index != -1) {
              val.speakCount = data[index].speakCount
            } else {
              val.speakCount = speakCount
            }

            if (index == -1) {
              data.push(val)
            } else {
              data[index] = JSON.parse(JSON.stringify(val))
            }
          } else {
            if (index != -1) {
              data.splice(index, 1)
            }
          }
        })
        //排序后保存
        localStorage.setItem("data", JSON.stringify(data))
        break
    }
  }

  // WebSocket关闭事件处理
  private onClose(): void {
    console.log("WebSocket连接关闭")
    this.scheduleReconnect(3000)
  }

  // WebSocket错误事件处理
  private onError(): void {
    console.log("WebSocket连接发生错误")
    this.scheduleReconnect()
  }

  // 开始发送登录ID
  private startSendLoginID(): void {
    this.clearTimer(this.sendLoginIDTimer)
    this.sendLoginIDTimer = setInterval(() => {
      const token = localStorage.getItem("loginId")
      if (token) {
        this.sendWebSocket({ dataType: 110, data: { loginId: token } })
        this.clearTimer(this.sendLoginIDTimer)
      }
    }, 1000)
  }

  // 通过WebSocket发送数据
  private sendWebSocket(data: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data))
    } else {
      setTimeout(() => this.sendWebSocket(data), 1000)
    }
  }

  // 安排WebSocket重连
  private scheduleReconnect(time: number = 5000): void {
    if (this.isReconnecting) return
    this.isReconnecting = true
    if (time === 5000) {
      // 错误重连才有提示
      ElNotification({
        title: "网络连接发生错误，正在尝试重连...",
        type: "error",
        showClose: false,
        duration: 0
      })
    }
    this.clearTimer(this.reconnectTimer)
    this.reconnectTimer = setInterval(() => {
      this.initWebSocket()
    }, time)
  }

  // 清除定时器
  private clearTimer(timer: ReturnType<typeof setInterval> | null): void {
    if (timer) {
      clearInterval(timer)
    }
  }

  // 关闭WebSocket连接
  public closeWebSocket(): void {
    if (this.socket) {
      this.socket.close()
    }
    this.clearTimer(this.reconnectTimer)
    this.clearTimer(this.sendLoginIDTimer)
  }
}

export default new WebSocketService()
