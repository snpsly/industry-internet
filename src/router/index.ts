import { type RouteRecordRaw, createRouter } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"

const Layouts = () => import("@/topLayouts/index.vue")
const leftLayouts = () => import("@/layouts/index.vue")
/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/redirect",
  //   component: Layouts,
  //   meta: {
  //     hidden: true
  //   },
  //   children: [
  //     {
  //       path: ":path(.*)",
  //       component: () => import("@/views/redirect/index.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/login",
  //   component: () => import("@/views/login/index.vue"),
  //   meta: {
  //     hidden: true
  //   }
  // },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
          hidden: true
        }
      },
      {
        path: "dashboard",
        component: () => import("@/views/home/index.vue"),
        name: "dashboard",
        meta: {
          title: "首页",
          affix: true
        }
      },
      {
        path: "/IntelligentInternet",
        name: "智慧物联",
        meta: {
          menu: true
        },
        children: [
          {
            path: "introduce",
            component: () => import("@/views/IntelligentInternet/introduce/index.vue"),
            name: "物联方案介绍"
          },
          {
            path: "theCase",
            name: "系统解决方案",
            children: [
              {
                path: "SCADA",
                component: () => import("@/views/middle/SCADA/index.vue"),
                name: "SCADA数据采集方案"
              },
              {
                path: "middleEAM",
                component: () => import("@/views/middle/EAM/index.vue"),
                name: "EAM设备管理方案"
              },
              {
                path: "test_3",
                component: () => import("@/views/middle/数字孪生/index.vue"),
                name: "数字孪生解决方案"
              },
              {
                path: "connectingDevice",
                component: () => import("@/views/connectingDevice/index.vue"),
                name: "设备连接应用实例"
              }
            ]
          },
          {
            path: "solution",
            name: "产品解决方案",
            children: [
              {
                path: "nygl",
                component: () => import("@/views/middle/能源管理/index.vue"),
                name: "能源管理解决方案"
              },
              // {
              //   path: "https://tyd.tengen.com/",
              //   component: () => import("@/views/404/index.vue"),
              //   name: "天易盾系统"
              // },
              {
                path: "tyw",
                component: () => import("@/views/middle/天易维/index.vue"),
                name: "配电运维解决方案"
              },
              {
                path: "aqtyw",
                component: () => import("@/views/middle/天易盾/index.vue"),
                name: "安全用电解决方案"
              },
              {
                path: "user_case",
                component: () => import("@/views/connectingDeviceCopy/index.vue"),
                name: "产品连接应用案例"
              }
              // {
              //   path: "user_case",
              //   component: () => import("@/views/IntelligentInternet/userCase/index.vue"),
              //   name: "连接产品清单"
              // }
            ]
          }
        ]
      },
      {
        path: "PLMPLM",
        component: () => import("@/views/middle/PLM/index.vue"),
        name: "PLM系统",
        meta: {
          hidden: true
        }
      },
      {
        path: "/intelligentManufacturing",
        name: "智能制造",
        meta: {
          menu: true
        },
        children: [
          {
            path: "solution",
            component: () => import("@/views/intelligentManufacturing/solution/index.vue"),
            name: "智能智造方案"
          },
          {
            path: "manufacturingApplication",
            name: "智能制造方案介绍",
            children: [
              {
                path: "one",
                component: () => import("@/views/thirteen/one/index.vue"),
                name: "数字化研发应用方案"
              },
              {
                path: "five",
                component: () => import("@/views/thirteen/five/index.vue"),
                name: "5G全连接工厂方案"
              },
              {
                path: "three",
                component: () => import("@/views/thirteen/three/index.vue"),
                name: "智能排产应用方案"
              },
              {
                path: "twelve",
                component: () => import("@/views/thirteen/twelve/index.vue"),
                name: "质量管理应用方案"
              },
              {
                path: "nine",
                component: () => import("@/views/thirteen/nine/index.vue"),
                name: "智慧物流应用方案"
              },
              {
                path: "two",
                component: () => import("@/views/thirteen/two/index.vue"),
                name: "供应链协同应用方案"
              },
              {
                path: "eleven",
                component: () => import("@/views/thirteen/eleven/index.vue"),
                name: "采购策略优化方案"
              }
              // { path: "ONSONS", component: () => import("@/views/middle/ONS/index.vue"), name: "ONS系统" },

              // {
              //   path: "bibibibibibibibi",
              //   component: () => import("@/views/middle/BI/index.vue"),
              //   name: "BI订单跟踪系统"
              // },
              // {
              //   path: "codeSelect",
              //   component: () => import("@/views/intelligentManufacturing/codeSelect/index.vue"),
              //   name: "码上查"
              // }
            ]
          },
          // {
          //   path: "modelLibrary",
          //   component: () => import("@/views/applicationMarket/modelLibrary/index.vue"),
          //   name: "模型化管理"
          // },

          {
            path: "manufacturingScheme",
            // component: () => import("@/views/intelligentManufacturing/manufacturingSchemecopy/index.vue"),
            name: "数字化解决方案",
            children: [
              {
                path: "one",
                component: () => import("@/views/twelve/three/index.vue"),
                name: "生产排程管理APS系统"
              },
              {
                path: "five",
                component: () => import("@/views/twelve/four/index.vue"),
                name: "智能仓储管理WMS系统"
              },
              {
                path: "three",
                component: () => import("@/views/twelve/nine/index.vue"),
                name: "数据采集SCADA系统"
              },
              {
                path: "twelve",
                component: () => import("@/views/twelve/ten1/index.vue"),
                name: "大数据分析BI平台"
              },
              {
                path: "nine",
                component: () => import("@/views/twelve/five/index.vue"),
                name: "质量数据管理QMS系统"
              },
              {
                path: "two",
                component: () => import("@/views/twelve/six/index.vue"),
                name: "制造运营管理MOM系统"
              },
              {
                path: "eleven",
                component: () => import("@/views/twelve/eight1/index.vue"),
                name: "一体化研发PLM平台"
              },
              {
                path: "eleven1",
                component: () => import("@/views/twelve/eleven1/index.vue"),
                name: "综合项目管理PMS系统"
              }
              // { path: "ONSONS", component: () => import("@/views/middle/ONS/index.vue"), name: "ONS系统" },
              // { path: "PLMPLM", component: () => import("@/views/middle/PLM/index.vue"), name: "PLM系统" },
              // {
              //   path: "bibibibibibibibi",
              //   component: () => import("@/views/middle/BI/index.vue"),
              //   name: "BI订单跟踪系统"
              // },
              // {
              //   path: "codeSelect",
              //   component: () => import("@/views/intelligentManufacturing/codeSelect/index.vue"),
              //   name: "码上查"
              // }
            ]
          }
        ]
      },
      {
        path: "/intelligentManufacturing/codeList",
        name: "型号列表",
        component: () => import("@/views/intelligentManufacturing/codeList/index.vue")
      },
      {
        path: "/applicationMarket",
        name: "应用市场",
        meta: {
          menu: true
        },
        children: [
          {
            path: "appApplication",
            component: () => import("@/views/applicationMarket/appApplication/index.vue"),
            name: "APP应用市场"
          },

          {
            path: "modelLibrary",
            name: "行业管理模型库",
            component: () => import("@/views/applicationMarket/modelLibrary/index.vue")
          }
        ]
      },
      {
        path: "/platformService",
        name: "平台服务",
        meta: {
          menu: true
        },
        component: () => import("@/views/platformService/index.vue")
        // children: [
        //   {
        //     path: "https://scm.tengen.com.cn",
        //     component: () => import("@/views/home/index.vue"),
        //     name: "供应商服务"
        //   },
        //   {
        //     path: "https://dmc.tengen.com.cn/pcweb/",
        //     name: "经销商服务",
        //     component: () => import("@/views/home/index.vue")
        //   },
        //   {
        //     path: "11111",
        //     name: "客户服务",
        //     component: () => import("@/views/404/index.vue")
        //   },
        //   {
        //     path: "22222",
        //     name: "工业企业服务",
        //     component: () => import("@/views/404/index.vue")
        //   }
        // ]
      },
      // {
      //   path: "/ecologicalCooperation",
      //   name: "生态合作",
      //   meta: {
      //     menu: true
      //   }
      // },
      {
        path: "/developer",
        meta: {
          menu: true
        },
        name: "开发者",
        children: [
          {
            path: "53513",
            component: () => import("@/views/middle/BPM/index.vue"),
            name: "BPM开发"
          },
          {
            path: "43448",
            name: "API开发",
            component: () => import("@/views/middle/API/index.vue")
          },
          {
            path: "3318",
            name: "APP开发",
            component: () => import("@/views/middle/APP/index.vue")
          },
          {
            path: "help",
            name: "开发者帮助",
            component: () => import("@/views/developer/help/index.vue")
          }
        ]
      },
      {
        path: "/middle",
        meta: {
          menu: false
        },
        name: "中间页",
        children: [
          {
            path: "middle1",
            component: () => import("@/views/middle/API/index.vue"),
            name: "middle1"
          },
          {
            path: "middle2",
            name: "能源管理",
            component: () => import("@/views/middle/能源管理/index.vue")
          },
          {
            path: "middle3",
            name: "天易维",
            component: () => import("@/views/middle/天易维/index.vue")
          },
          {
            path: "middle5",
            name: "天易盾",
            component: () => import("@/views/middle/天易盾/index.vue")
          },
          {
            path: "middle4",
            name: "EAM",
            component: () => import("@/views/developer/help/index.vue")
          }
        ]
      },
      {
        path: "/me",
        // component: () => import("@/views/404/index.vue"),
        meta: {
          menu: true
        },
        name: "关于我们",
        children: [
          // {
          //   path: "ecosystem",
          //   component: () => import("@/views/ecologicalCooperation/ecosystem/index.vue"),
          //   name: "生态体系"
          // },
          {
            path: "me",
            name: "关于我们",
            component: () => import("@/views/ecologicalCooperation/me/index.vue")
          },
          {
            path: "businessPartner",
            name: "生态体系",
            component: () => import("@/views/ecologicalCooperation/businessPartner/index.vue")
          },
          {
            path: "businessPartner1",
            name: "合作模式计划",
            component: () => import("@/views/ecologicalCooperation/cooperative/index.vue")
          }
        ]
      },
      {
        path: "/twelve",
        meta: {
          menu: false
        },
        name: "解决方案",
        children: [
          {
            path: "one",
            component: () => import("@/views/twelve/one/index.vue"),
            name: "BPM开发1"
          },
          {
            path: "two",
            component: () => import("@/views/twelve/two/index.vue"),
            name: "BPM开发2"
          },
          {
            path: "three",
            component: () => import("@/views/twelve/three/index.vue"),
            name: "BPM开发3"
          },
          {
            path: "four",
            component: () => import("@/views/twelve/four/index.vue"),
            name: "BPM开发4"
          },
          {
            path: "five",
            component: () => import("@/views/twelve/five/index.vue"),
            name: "BPM开发5"
          },
          {
            path: "six",
            component: () => import("@/views/twelve/six/index.vue"),
            name: "MOM/MES系统"
          },
          {
            path: "seven",
            component: () => import("@/views/twelve/seven/index.vue"),
            name: "能源管理系统"
          },
          {
            path: "eight",
            component: () => import("@/views/twelve/eight/index.vue"),
            name: "BPM开发8"
          },
          {
            path: "nine",
            component: () => import("@/views/twelve/nine/index.vue"),
            name: "BPM开发9"
          },
          {
            path: "ten",
            component: () => import("@/views/twelve/ten/index.vue"),
            name: "BPM开发10"
          },
          {
            path: "eleven",
            component: () => import("@/views/twelve/eleven/index.vue"),
            name: "BPM开发11"
          }
        ]
      },
      {
        path: "/thirteen",
        meta: {
          menu: false
        },
        name: "十三",
        children: [
          {
            path: "one",
            component: () => import("@/views/thirteen/one/index.vue"),
            name: "十三1"
          },
          {
            path: "two",
            component: () => import("@/views/thirteen/two/index.vue"),
            name: "十三2"
          },
          {
            path: "three",
            component: () => import("@/views/thirteen/three/index.vue"),
            name: "十三3"
          },
          {
            path: "four",
            component: () => import("@/views/thirteen/four/index.vue"),
            name: "十三4"
          },
          {
            path: "five",
            component: () => import("@/views/thirteen/five/index.vue"),
            name: "十三5"
          },
          {
            path: "six",
            component: () => import("@/views/thirteen/six/index.vue"),
            name: "十三111"
          },
          {
            path: "seven",
            component: () => import("@/views/thirteen/seven/index.vue"),
            name: "十三22"
          },
          {
            path: "eight",
            component: () => import("@/views/thirteen/eight/index.vue"),
            name: "十三8"
          },
          {
            path: "nine",
            component: () => import("@/views/thirteen/nine/index.vue"),
            name: "十三9"
          },
          {
            path: "ten",
            component: () => import("@/views/thirteen/ten/index.vue"),
            name: "十三10"
          },
          {
            path: "eleven",
            component: () => import("@/views/thirteen/eleven/index.vue"),
            name: "十三11"
          },
          {
            path: "twelve",
            component: () => import("@/views/thirteen/twelve/index.vue"),
            name: "十三12"
          },
          {
            path: "thirteen",
            component: () => import("@/views/thirteen/thirteen/index.vue"),
            name: "十三13"
          }
        ]
      }
    ]
  },
  {
    path: "/control",
    component: () => import("@/views/control/home/index.vue"),
    meta: {
      menu: true,
      target: "_blank"
    },
    name: "控制台"
  },
  {
    path: "/manage",
    component: leftLayouts,
    redirect: "/manage/appList",
    name: "manage1",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "appList",
        component: () => import("@/views/manage/appList/index.vue"),
        name: "appList",
        meta: {
          title: "APP清单",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage2",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "modelList",
        component: () => import("@/views/manage/modelList/index.vue"),
        name: "modelList",
        meta: {
          title: "行业模型清单",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage3",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "serviceEnterprises",
        component: () => import("@/views/manage/serviceEnterprises/index.vue"),
        name: "serviceEnterprises",
        meta: {
          title: "服务企业清单",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage4",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "equipmentList",
        component: () => import("@/views/manage/equipmentList/index.vue"),
        name: "equipmentList",
        meta: {
          title: "设备清单",
          elIcon: "Grid"
        }
      }
    ]
  },
  // {
  //   path: "/manage",
  //   component: leftLayouts,
  //   name: "manage5",
  //   meta: {
  //     title: "表格",
  //     elIcon: "Grid"
  //   },
  //   children: [
  //     {
  //       path: "deviceData",
  //       component: () => import("@/views/manage/deviceData/index.vue"),
  //       name: "deviceData",
  //       meta: {
  //         title: "设备实时数据",
  //         elIcon: "Grid"
  //       }
  //     }
  //   ]
  // },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage6",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "deviceTable",
        component: () => import("@/views/manage/deviceTable/index.vue"),
        name: "deviceTable",
        meta: {
          title: "设备类型表",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage7",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "productTypes",
        component: () => import("@/views/manage/productTypes/index.vue"),
        name: "productTypes",
        meta: {
          title: "产品类型表",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage8",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "developerHelp",
        component: () => import("@/views/manage/developerHelp/index.vue"),
        name: "developerHelp",
        meta: {
          title: "开发者帮助文件",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage9",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "user",
        component: () => import("@/views/manage/user/index.vue"),
        name: "user",
        meta: {
          title: "用户表",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage10",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "user123",
        component: () => import("@/views/manage/user123/index.vue"),
        name: "user123",
        meta: {
          title: "工业设备列表",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage11",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "user123123",
        component: () => import("@/views/manage/user123123/index.vue"),
        name: "user123123",
        meta: {
          title: "连接产品清单",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage12",
    meta: {
      title: "检测分析指标",
      elIcon: "Grid"
    },
    children: [
      {
        path: "enter",
        component: () => import("@/views/manage/detection/enter/index.vue"),
        name: "enter",
        meta: {
          title: "检测分析指标录入"
        }
      },
      {
        path: "onlineSituation",
        component: () => import("@/views/manage/detection/onlineSituation/index.vue"),
        name: "onlineSituation",
        meta: {
          title: "公有云设备日在线情况"
        }
      },
      {
        path: "appDailyActive",
        component: () => import("@/views/manage/detection/appDailyActive/index.vue"),
        name: "appDailyActive",
        meta: {
          title: "公有云APP日活数量"
        }
      },
      {
        path: "killerAPPonline",
        component: () => import("@/views/manage/detection/killerAPPonline/index.vue"),
        name: "killerAPPonline",
        meta: {
          title: "杀手锏APP在线用户"
        }
      },
      {
        path: "killerAPPSubscription",
        component: () => import("@/views/manage/detection/killerAPPSubscription/index.vue"),
        name: "killerAPPSubscription",
        meta: {
          title: "杀手锏APP订阅数量"
        }
      },
      {
        path: "newModel",
        component: () => import("@/views/manage/detection/newModel/index.vue"),
        name: "newModel",
        meta: {
          title: "新模式统计解决方案数量"
        }
      },
      {
        path: "featuresIndex",
        component: () => import("@/views/manage/detection/featuresIndex/index.vue"),
        name: "featuresIndex",
        meta: {
          title: "平台现有特色指数"
        }
      }
    ]
  },
  {
    path: "/manage",
    component: leftLayouts,
    name: "manage13",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "demo",
        component: () => import("@/views/manage/demo/index.vue"),
        name: "demo",
        meta: {
          title: "报文",
          elIcon: "Grid"
        }
      }
    ]
  },
  {
    path: "/home",
    component: () => import("@/views/control/home/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/application",
    component: () => import("@/views/control/application/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/solution",
    component: () => import("@/views/control/solution/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/collection",
    component: () => import("@/views/control/collection/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/online",
    component: () => import("@/views/control/online/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/rzzp",
    component: () => import("@/views/control/docs/rzzpfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/gnjc",
    component: () => import("@/views/control/docs/gnjc.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/sjjc",
    component: () => import("@/views/control/docs/sjjc.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/qysyfw",
    component: () => import("@/views/control/docs/qysyfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/jxfw",
    component: () => import("@/views/control/docs/jxfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/wlfw",
    component: () => import("@/views/control/docs/wlfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/rzzpfw",
    component: () => import("@/views/control/docs/rzzpfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/gyhlwwfw",
    component: () => import("@/views/control/docs/gyhlwwfw.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/more",
    component: () => import("@/views/control/docs/more.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/element-plus",
    component: () => import("@/views/table/element-plus/index.vue")
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/permission",
  //   component: Layouts,
  //   redirect: "/permission/page",
  //   name: "Permission",
  //   meta: {
  //     title: "权限",
  //     svgIcon: "lock",
  //     roles: ["admin", "editor"], // 可以在根路由中设置角色
  //     alwaysShow: true // 将始终显示根菜单
  //   },
  //   children: [
  //     {
  //       path: "page",
  //       component: () => import("@/views/permission/page.vue"),
  //       name: "PagePermission",
  //       meta: {
  //         title: "页面级",
  //         roles: ["admin"] // 或者在子导航中设置角色
  //       }
  //     },
  //     {
  //       path: "directive",
  //       component: () => import("@/views/permission/directive.vue"),
  //       name: "DirectivePermission",
  //       meta: {
  //         title: "按钮级" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
