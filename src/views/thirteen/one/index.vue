<template>
  <TwelveTemplate :title="'产品数字化研发与设计'" :subDetail="''" :menu-list="list" />
</template>
<script lang="ts" setup>
import { ref } from "vue"
import TwelveTemplate from "@/components/TwelveTemplate/index.vue"
const list = ref([
  {
    label: "场景实例描述",
    value: "a",
    index: 1,
    img: "100.png",
    textDetail:
      "在低压电器行业内率先采用模块接口设计技术、模块参数化技术、模块应用技术等，依托PLM系统为内核，搭建具有天正特色【自主知识产权】的“天易研”数字化集成开发平台，应用“天易研”平台建立了CBB模块通用库、设计标准库、材料结构化的物性表征库、基于客户需求形成的各种产品配置模板等知识库模型，通过与各设计工具集成，辅助开展产品研发设计，实现了多地域、跨专业、跨部门的一体化协同的并行设计，通过数字化虚拟仿真与优化平台的建立，实现各类典型低压电器及其附属计算机动态仿真模拟，同时通过建立各种仿真知识库模型，降低仿真门槛要求，缩减仿真周期，提升仿真的准确性，目前已逐步由传统物理试验为主要手段向数字化仿真转变，在应对大客户大规模定制的输配电中达到需求的快速响应与交付。"
  },
  {
    label: "解决的痛点问题描述",
    value: "b",
    index: 2,
    textDetail: `1、面对大量的个性化，定制化需求，产品研发周期长、项目交付达成率低，市场竟争力薄弱，客户抱怨或丢单；
2、设计人员培养周期长，设计知识不能共享、过度依赖设计人员个人经验，研发方案反复试错；
3、多地域、跨专业、跨部门协同难、协同效率低；
4、通过仿真分析实现小型断路器、交流接触器、继电器等产品的研发的机械、电磁、强度等及多场合耦合问题的求解，可以在设计阶段发现和解决问题，避免了后期修改带来的额外成本。`
  },
  {
    label: "采用的技术方案",
    value: "c",
    index: 3,
    img: "101.png",
    textDetail: `1、在需求阶段通过TG-PMS平台，对项目需求、多顶目协同、项目里程碑、项目的计划和执行进行管理；
2、通过Windchill PLM协同设计平台，建立各种知识库模型、产品定制化选项规则、BOM配置规则、各种研发协同任务工作流等；
3、通过三维软件CREO、UG等CAD建模技术与天易研平台的集成，实现各基础知识库的快速调用与数字化建模，机构仿真，尺寸链分析等；
4、通过MAXWELL、FLUENT、ADAMS等仿真软件，实现断路器产品的线圈电磁仿真、流体仿真，模流分析、热分析等。`
  },
  {
    label: "保障要素",
    value: "d",
    index: 4,
    img: "102.png",
    textDetail: `1、建立了新人培训机制，天正商学院中上岗前要求学习有关课程，并通过线上考试；
2、建立了基础研究仿真分析部门，增加仿真工程师岗位，强化仿真数据应用，并通过赋能形式提升研发人员仿真能力。
3、制定了Q/TZ J0135有关产品模块化设计规范系列标准，保证设计的一致性。`
  },
  {
    label: "已实施成效",
    value: "e",
    index: 5,
    textDetail: `配合天易研平台的CBB模块及各知识库，通过Creo的模块化设计，的研发人员总体设计效率提升22%；产品生命周期中用户需求响应时间平均缩短35%，产品制造质量平均提升5%；产品成本平均减少8%（含试验成本，设计过程成本、协同设计成本、零部件外购成本、工装制造成本、装配成本等）；用户需求满意度提升3%。`
  },
  {
    label: "其他",
    value: "f",
    index: 6,
    textDetail: `实践证明，通过采用模块化设计，整合综合效益取得了显助提升，借助目前主流产品的成熟模块化设计经验，该模式目前也逐步在成套车间（嘉兴区域）、小三箱车间（温州苏吕）等区域及其它产品线上逐步渗透推行。`
  },
  {
    label: "经济性和可推广性",
    value: "h",
    index: 7,
    textDetail: `1、积极参与国家、地方有关智能制造标准制定，助推行业及地方智能制造高质量发展，目前已完成1项国家标准（GB/T 43541—2023 智能制造 网络协同制造 业务架构与信息模型）及1项地方标准（DB33/T 1388—2024 “未来工厂”建设导则）的发布。
2、平台化设计在嘉兴、温州等多个研发部门运行，同时已交付10余个平台化产品给行业客户运行，运行良好，目前固化沉淀了一套行之有效的运行机制，具有一定的可推广性和复制性；
3、建立了一系列的应用案例，各项案例均可作为技术的培训优秀案例，供低压电器从业人员学习借鉴,例如：基于模块化小型断路器设计案例、基于多场合的高电压MCCB开断技术、多源耦合干扰下的直流故障电弧特性仿真分析等仿真研究案例等；
4、带动产业链的上下游，为供应制、制造商提供场景应用提供建设范本及参考。`
  }
])
</script>
<style lang="scss" scoped></style>
