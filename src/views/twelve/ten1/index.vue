<template>
  <TwelveTemplate
    :title="'天智BI'"
    :subDetail="'天智BI系统通过集成、准备、存储、分析和可视化数据，帮助企业洞察业务绩效、趋势和机会，从而做出更明智的决策。其架构涵盖了数据源层、数据准备层、数据分析层和用户界面层，核心功能包括数据集成、数据准备、数据存储、数据分析和数据可视化。天智BI在销售和营销、财务和会计、运营和供应链、人力资源、客户服务等多个领域都有广泛的应用。'"
    :menu-list="list"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue"
import TwelveTemplate from "@/components/TwelveTemplate/index.vue"
const list = ref([
  {
    label: "快速了解",
    value: "a",
    index: 1,

    textDetail: `天智BI 是一套技术和工具，用于将企业的原始数据转换为有意义的信息，从而支持业务决策。天智BI系统通过收集、清洗、分析和呈现数据，帮助企业洞察业务绩效、趋势和机会，从而做出更明智的决策。`
  },
  {
    label: "架构说明",
    value: "b",
    index: 2,
    textDetail: `天智BI系统的架构通常包括以下几个主要组成部分：
1. 数据源层：
数据库：企业内部的各种关系型数据库（如MySQL、Oracle）和NoSQL数据库（如MongoDB）。
数据仓库：集中存储和管理来自多个数据源的数据，用于支持复杂的查询和分析。
数据湖：存储大量原始数据，支持多种数据格式和结构，常用于大数据分析。
2. 数据准备层：
数据提取（ETL）：从不同的数据源提取数据，进行转换和加载到数据仓库或数据湖中。
数据清洗：清理和标准化数据，确保数据的准确性和一致性。
数据整合：将来自不同来源的数据整合在一起，形成统一的数据视图。
3. 数据分析层：
OLAP（在线分析处理）：支持多维数据分析，提供快速的查询和分析能力。
数据挖掘：使用统计学和机器学习算法，从数据中发现隐藏的模式和趋势。
报表生成：生成各种报表和仪表板，展示关键业务指标和分析结果。
4. 用户界面层：
报表工具：提供预定义和自定义报表，支持各种格式（如PDF、Excel）的导出。
仪表板：实时展示关键业务指标和分析结果，支持交互式查询和可视化。
自助分析：允许业务用户自行进行数据查询和分析，无需IT支持。`
  },
  {
    label: "核心功能",
    value: "c",
    index: 3,
    textDetail: `1. 数据集成：
多数据源集成：从各种数据源（如数据库、文件、API）中提取数据，进行集成和整合。
实时数据集成：支持实时数据流的处理和分析，确保数据的时效性。
2. 数据准备：
数据清洗：清除不完整、不准确或不一致的数据，确保数据质量。
数据转换：将数据转换为统一的格式和结构，便于分析。
3. 数据存储：
数据仓库：存储和管理大量的历史数据，支持复杂的查询和分析。
数据湖：存储原始数据，支持大规模的数据处理和分析。
4. 数据分析：
报表生成：生成各种报表，展示业务绩效和关键指标。
仪表板：实时展示关键业务指标，支持交互式查询和可视化。
数据挖掘：使用统计学和机器学习算法，发现数据中的模式和趋势。
5. 数据可视化：
图表和图形：使用柱状图、折线图、饼图等多种图表，直观展示数据。
地理信息系统（GIS）：将数据与地理位置结合，展示空间分布和趋势。`
  },
  {
    label: "应用场景",
    value: "d",
    index: 4,
    textDetail: `1. 销售和营销：
销售分析：分析销售数据，了解销售额、客户行为和市场趋势。
营销效果评估：评估营销活动的效果，优化营销策略。
2. 财务和会计：
财务报表：生成财务报表，监控收入、支出和利润。
预算和预测：制定预算和财务预测，支持财务决策。
3. 运营和供应链：
库存管理：分析库存数据，优化库存水平和补货策略。
供应链优化：监控供应链绩效，优化物流和运输成本。
4. 人力资源：
员工绩效分析：分析员工绩效数据，支持绩效管理和激励措施。
招聘分析：评估招聘效果，优化招聘策略。`
  },
  {
    label: "客户服务",
    value: "e",
    index: 5,
    textDetail: `客户满意度分析：分析客户反馈和满意度数据，提升服务质量。
客户行为分析：分析客户行为，提供个性化的服务和推荐。`
  }
])
</script>
<style lang="scss" scoped></style>
