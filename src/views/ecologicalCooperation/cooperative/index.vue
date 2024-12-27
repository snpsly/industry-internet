<template>
  <div class="page flex-col">
    <div class="block_1 flex-row">
      <div class="section_1 flex-col">
        <div class="text-wrapper_2 flex-col" style="margin-top: 0">
          <span class="text_11">合作模式计划</span>
          <span class="text_12">合作模式计划</span>
        </div>
        <div class="group_2 flex-row justify-between">
          <div class="block_2 flex-col" />
          <span class="text_13">共同目标设定</span>
        </div>
        <span class="text_14"
          >在合作模式中，共同目标的设定至关重要，它有助于减少误解、增强团队协作效率，并确保项目的顺利进行。共同目标需兼顾各方利益，确保公平性和可持续性，以激发成员积极性和创造力。明确的目标有助于资源有效分配，避免浪费，并与长期愿景保持一致。通过建立评估体系，可定期检查项目进展并及时调整策略。</span
        >
        <div class="group_3 flex-row">
          <span class="paragraph_1">利<br />益<br />共<br />享<br />原<br />则</span>
          <div class="list_1 flex-row">
            <div
              class="list-items_1 flex-col"
              :style="{ background: item.lanhuBg0 }"
              v-for="(item, index) in loopData0"
              :key="index"
            >
              <div class="text-wrapper_3 flex-row justify-between">
                <span class="text_15" v-html="item.lanhutext0" />
                <span class="text_16" v-html="item.lanhutext1" />
              </div>
              <span class="text_17" v-html="item.lanhutext2" />
            </div>
          </div>
        </div>
        <div class="group_4 flex-row justify-between">
          <div class="group_5 flex-col" />
          <span class="text_18">沟通渠道建立</span>
        </div>
        <span class="text_19"
          >在合作模式中，共同目标的设定至关重要，它有助于减少误解、增强团队协作效率，并确保项目的顺利进行。共同目标需兼顾各方利益，确保公平性和可持续性，以激发成员积极性和创造力。明确的目标有助于资源有效分配，避免浪费，并与长期愿景保持一致。通过建立评估体系，可定期检查项目进展并及时调整策略。</span
        >
        <div class="group_6 flex-row justify-between">
          <div class="block_3 flex-col" />
          <span class="text_20">信任关系培养</span>
        </div>
        <div class="image-wrapper_1 flex-row justify-between">
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/SketchPngaffdb5552d68f3eb725fa0e189bbce44507e7405369a9eb15528f7f5c7ad1dee"
          />
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/SketchPngd79b511b185ad0fc5d01134a4ed3690778f8b2537c06a60c41c58882c0109844"
          />
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/SketchPng6aee3b4e444588700a854fe9605c99019a4a961ff8b44d6bc29c98aae2c4dcc6"
          />
        </div>
        <div class="group_7 flex-row justify-between">
          <div class="box_1 flex-row">
            <div class="text-group_1 flex-col justify-between">
              <span class="text_21">沟通透明</span>
              <span class="text_22"
                >通过定期会议和即时通讯工具确保双方信息交流畅通无阻，减少误解和猜疑，建立互信基础。</span
              >
            </div>
          </div>
          <div class="box_2 flex-row">
            <div class="text-group_2 flex-col justify-between">
              <span class="text_23">共享资源</span>
              <span class="text_24">双方共享项目进展、市场动态和技术资料，共同应对挑战，促进合的深度和广度。</span>
            </div>
          </div>
          <div class="box_3 flex-row">
            <div class="text-group_3 flex-col justify-between">
              <span class="text_25">互惠互利</span>
              <span class="text_26"
                >确保合作成果对双方都有利，通过公平分配利益，增强彼此的合作意愿和长期合作关系。</span
              >
            </div>
          </div>
        </div>
        <div class="image-text_1 flex-row justify-between">
          <div class="block_4 flex-col" />
          <span class="text-group_4">资源整合利用</span>
        </div>
        <div class="group_8 flex-row justify-between">
          <div class="section_2 flex-row">
            <div class="text-group_5 flex-col justify-between">
              <span class="text_27">共享平台</span>
              <span class="paragraph_2"
                >通过建立资源共享平台，各合作方可以共享技术、数据和人才资源<br />提高整体研发效率，降低重复投入，加速项目进展。</span
              >
            </div>
          </div>
          <div class="section_3 flex-row">
            <div class="text-group_6 flex-col justify-between">
              <span class="text_28">资金支持</span>
              <span class="text_29"
                >资金是创新的重要保障，通过多方共同投资，可以为项目提供充足的资金支持，确保项目的顺利进行，减少资金风险。</span
              >
            </div>
          </div>
        </div>
        <div class="group_9 flex-row justify-between">
          <div class="box_4 flex-row">
            <div class="text-group_7 flex-col justify-between">
              <span class="text_30">技术互补</span>
              <span class="text_31"
                >不同合作方在技术上有各自的优势，通过互补合作，可以形成更强大的技术实力，解决单一企业难以克服的技术难题。</span
              >
            </div>
          </div>
          <div class="text-wrapper_4 flex-col">
            <span class="text_32">知识产权</span>
            <span class="text_33"
              >明确知识产权归属和分配机制，可以激励各方积极参与创新活动，保护创新成果，存进技术的持续发展的应用。</span
            >
          </div>
        </div>
        <div class="group_10 flex-row justify-between">
          <div class="box_5 flex-col" />
          <span class="text_34">营销活动协同</span>
        </div>
        <div class="group_11 flex-row">
          <div class="text-wrapper_5 flex-col">
            <span class="paragraph_3">线<br />上<br />推<br />广</span>
          </div>
          <div class="text-wrapper_6 flex-col">
            <span class="paragraph_4">合<br />作<br />伙<br />伴<br />营<br />销</span>
          </div>
          <div class="text-wrapper_7 flex-col">
            <span class="paragraph_5">线<br />下<br />活<br />动</span>
          </div>
          <div class="block_5 flex-col">
            <div class="section_4 flex-row">
              <div class="text-group_8 flex-col justify-between">
                <span class="text_35">客户关系管理</span>
                <span class="text_36"
                  >建立CRM系统，跟踪需求，提供个性化服务，提升客户满意度和忠诚度，建立长期合作关系。</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="image-text_2 flex-row justify-between">
          <div class="box_6 flex-col" />
          <span class="text-group_9">计划制定流程</span>
        </div>
        <div class="group_12 flex-row">
          <div class="text-wrapper_8 flex-col">
            <span class="text_37">01</span>
          </div>
          <div class="text-wrapper_9 flex-col">
            <span class="text_38">02</span>
          </div>
          <div class="text-wrapper_10 flex-col">
            <span class="text_39">03</span>
          </div>
        </div>
        <div class="group_13 flex-row justify-between">
          <div class="box_7 flex-row">
            <div class="text-group_10 flex-col justify-between">
              <span class="text_40">确定目标</span>
              <span class="text_41">项目目标有共同的理解和共识，为后续工作奠定基础。</span>
            </div>
          </div>
          <div class="box_8 flex-row">
            <div class="text-group_11 flex-col justify-between">
              <span class="text_42">分配资源</span>
              <span class="text_43"
                >根据项目需求合理分配人力、物力和财力资源，确保每个环节都有足够的支持，提高项目执行效率。</span
              >
            </div>
          </div>
          <div class="box_9 flex-row">
            <div class="text-group_12 flex-col justify-between">
              <span class="text_44">制定时间表</span>
              <span class="text_45"
                >制定详细的时间表，明确各阶段的关键节点和里程碑，确保项目按计划顺利推进，及时调整偏差。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0: "rgba(22,175,188,0.740000)",
          lanhutext0: "基本概念",
          lanhutext1: "01",
          lanhutext2:
            "利益共享机制确保合作各方根据员意大小分享收益，激发积极性，减少矛盾，为项目成功奠定基础，促进长期稳定发展。"
        },
        {
          lanhuBg0: "rgba(11,35,37,0.522000)",
          lanhutext0: "实施方式",
          lanhutext1: "02",
          lanhutext2: "实施利益共享需明确分配规则，如股权分配，利润分成等，并建立监督机制确保公平性，维护各方利益。"
        },
        {
          lanhuBg0: "rgba(22,175,188,0.740000)",
          lanhutext0: "案例分析",
          lanhutext1: "03",
          lanhutext2: "与供应商合作，共享技术与市场资源，提升产品品质和竞争力，实现双赢，增强供应链稳定性。"
        }
      ],
      constants: {}
    }
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100vw;
  height: 253.18vw;
  overflow: hidden;
  .block_1 {
    width: 100vw;
    height: 253.18vw;
    .section_1 {
      width: 100vw;
      height: 248.81vw;
      .group_1 {
        width: 96.05vw;
        height: 2.71vw;
        margin: 0.83vw 0 0 2.55vw;
        .image_1 {
          width: 7.04vw;
          height: 2.35vw;
        }
        .text_1 {
          width: 16.46vw;
          height: 1.67vw;
          overflow-wrap: break-word;
          color: rgba(22, 179, 167, 1);
          font-size: 1.4vw;
          letter-spacing: 4.401275634765625px;
          font-family: Helvetica, "Microsoft YaHei", Arial, sans-serif;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.67vw;
          margin: 0.31vw 0 0 0.78vw;
        }
        .text_2 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 15.62vw;
        }
        .text_3 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_4 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_5 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_6 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.76vw;
        }
        .text_7 {
          width: 2.82vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 4.27vw;
        }
        .text_8 {
          width: 2.82vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 2.18vw;
        }
        .text_9 {
          width: 3.75vw;
          height: 1.31vw;
          overflow-wrap: break-word;
          color: rgba(93, 91, 91, 1);
          font-size: 0.93vw;
          font-weight: normal;
          text-align: right;
          white-space: nowrap;
          line-height: 1.31vw;
          margin: 0.72vw 0 0 1.66vw;
        }
        .text-wrapper_1 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 8px;
          height: 2.66vw;
          width: 7.04vw;
          margin: 0.05vw 0 0 1.82vw;
          .text_10 {
            width: 1.88vw;
            height: 1.31vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 0.93vw;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: right;
            white-space: nowrap;
            line-height: 1.31vw;
            margin: 0.67vw 0 0 2.55vw;
          }
        }
      }
      .text-wrapper_2 {
        width: 99.64vw;
        height: 22.77vw;
        background: url("/src/assets/1029/6.jpg") 100% no-repeat;
        background-size: 100% 100%;
        margin-top: 1.93vw;
        .text_11 {
          text-shadow: 4px 4px 8px rgba(12, 121, 113, 0.12);
          width: 38.55vw;
          height: 6.36vw;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 4.53vw;
          letter-spacing: 36.24580383300781px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 6.36vw;
          margin: 7.55vw 0 0 33.28vw;
        }
        .text_12 {
          background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0, rgba(235, 226, 226, 0.58) 100%);
          width: 38.55vw;
          height: 6.36vw;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 4.53vw;
          letter-spacing: 36.24580383300781px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 6.36vw;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: -1.25vw 0 3.75vw 33.28vw;
        }
      }
      .group_2 {
        width: 17.66vw;
        height: 3.08vw;
        margin: 2.81vw 0 0 40vw;
        .block_2 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.94vw;
        }
        .text_13 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .text_14 {
        width: 57.82vw;
        height: 6.88vw;
        overflow-wrap: break-word;
        color: rgba(119, 119, 119, 1);
        font-size: 1.25vw;
        letter-spacing: 3.9122447967529297px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        text-align: right;
        line-height: 1.72vw;
        margin: 1.71vw 0 0 21.66vw;
      }
      .group_3 {
        width: 90.27vw;
        height: 29.38vw;
        background: url("/src/assets/1029/7.png") -0.63vw -0.68vw no-repeat;
        background-size: 91.97vw 31.09vw;
        margin: 4.01vw 0 0 5.72vw;
        .paragraph_1 {
          text-shadow: 4px 2px 7px rgba(132, 231, 255, 0.38);
          width: 3.44vw;
          height: 23.75vw;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 3.07vw;
          letter-spacing: 6.6176018714904785px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          line-height: 3.96vw;
          margin: 2.81vw 0 0 4.73vw;
        }
        .list_1 {
          width: 76.78vw;
          height: 26.15vw;
          margin: 3.28vw 0.62vw 0 4.68vw;
          .list-items_1 {
            width: 25.37vw;
            height: 26.15vw;
            margin-right: 0.32vw;
            .text-wrapper_3 {
              width: 20.16vw;
              height: 11.72vw;
              margin: -0.46vw 0 0 1.87vw;
              .text_15 {
                width: 7.77vw;
                height: 2.35vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 1.66vw;
                letter-spacing: 5.216326713562012px;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                white-space: nowrap;
                line-height: 2.35vw;
                margin-top: 9.38vw;
              }
              .text_16 {
                width: 8.96vw;
                height: 9.64vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 6.87vw;
                letter-spacing: 6.417346954345703px;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                white-space: nowrap;
                line-height: 9.64vw;
              }
            }
            .text_17 {
              width: 21.93vw;
              height: 6.88vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              line-height: 1.72vw;
              margin: 1.09vw 0 6.92vw 1.71vw;
            }
          }
        }
      }
      .group_4 {
        width: 17.66vw;
        height: 3.08vw;
        margin: 2.81vw 0 0 40vw;
        .group_5 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 1.2vw;
        }
        .text_18 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .text_19 {
        width: 57.82vw;
        height: 6.88vw;
        overflow-wrap: break-word;
        color: rgba(119, 119, 119, 1);
        font-size: 1.25vw;
        letter-spacing: 3.9122447967529297px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        text-align: right;
        line-height: 1.72vw;
        margin: 1.71vw 0 0 21.66vw;
      }
      .group_6 {
        width: 17.66vw;
        height: 3.08vw;
        margin: 3.85vw 0 0 40vw;
        .block_3 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 1.05vw;
        }
        .text_20 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .image-wrapper_1 {
        width: 86.46vw;
        height: 18.75vw;
        margin: 2.39vw 0 0 7.6vw;
        .image_2 {
          width: 27.35vw;
          height: 18.75vw;
        }
        .image_3 {
          width: 27.35vw;
          height: 18.75vw;
          margin-left: 2.24vw;
        }
        .image_4 {
          width: 27.35vw;
          height: 18.75vw;
          margin-left: 2.19vw;
        }
      }
      .group_7 {
        width: 86.46vw;
        height: 14.85vw;
        margin-left: 7.61vw;
        .box_1 {
          background-color: rgba(119, 119, 119, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          .text-group_1 {
            width: 24.22vw;
            height: 8.6vw;
            margin: 2.6vw 0 0 1.77vw;
            .text_21 {
              width: 7.77vw;
              height: 2.35vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.66vw;
              letter-spacing: 5.216326713562012px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.35vw;
              margin-left: 0.16vw;
            }
            .text_22 {
              width: 24.22vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.1vw;
            }
          }
        }
        .box_2 {
          background-color: rgba(119, 119, 119, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          margin-left: 2.24vw;
          .text-group_2 {
            width: 24.22vw;
            height: 8.6vw;
            margin: 2.6vw 0 0 1.56vw;
            .text_23 {
              width: 7.77vw;
              height: 2.35vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.66vw;
              letter-spacing: 5.216326713562012px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.35vw;
            }
            .text_24 {
              width: 24.22vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.1vw;
            }
          }
        }
        .box_3 {
          background-color: rgba(119, 119, 119, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          margin-left: 2.19vw;
          .text-group_3 {
            width: 24.22vw;
            height: 8.6vw;
            margin: 2.6vw 0 0 1.56vw;
            .text_25 {
              width: 7.77vw;
              height: 2.35vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.66vw;
              letter-spacing: 5.216326713562012px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.35vw;
              margin-left: 0.53vw;
            }
            .text_26 {
              width: 24.22vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.1vw;
            }
          }
        }
      }
      .image-text_1 {
        width: 17.3vw;
        height: 3.08vw;
        margin: 3.12vw 0 0 39.73vw;
        .block_4 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 1.2vw;
        }
        .text-group_4 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .group_8 {
        width: 89.74vw;
        height: 13.23vw;
        margin: 2.5vw 0 0 5.1vw;
        .section_2 {
          width: 51.52vw;
          height: 13.23vw;
          background: url("/src/assets/1029/1111.jpg") 0vw -0.06vw no-repeat;
          background-size: 51.56vw 13.28vw;
          .text-group_5 {
            width: 42.19vw;
            height: 6.98vw;
            margin: 1.61vw 0 0 3.8vw;
            .text_27 {
              width: 8.29vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
              margin-left: 0.16vw;
            }
            .paragraph_2 {
              width: 42.19vw;
              height: 3.44vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
        .section_3 {
          width: 38.23vw;
          height: 13.23vw;
          background: url("/src/assets/1029/22222.jpg") 0vw -0.06vw no-repeat;
          background-size: 38.28vw 13.28vw;
          .text-group_6 {
            width: 33.18vw;
            height: 8.7vw;
            margin: 1.61vw 0 0 2.76vw;
            .text_28 {
              width: 8.29vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
              margin-left: 0.16vw;
            }
            .text_29 {
              width: 33.18vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
      }
      .group_9 {
        width: 89.64vw;
        height: 13.08vw;
        margin-left: 5.27vw;
        .box_4 {
          width: 44.02vw;
          height: 13.08vw;
          background: url("/src/assets/1029/3333.jpg") -0.06vw -0.06vw no-repeat;
          background-size: 44.06vw 13.12vw;
          .text-group_7 {
            width: 38.34vw;
            height: 6.98vw;
            margin: 1.56vw 0 0 3.64vw;
            .text_30 {
              width: 8.29vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
              margin-left: 0.16vw;
            }
            .text_31 {
              width: 38.34vw;
              height: 3.44vw;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
        .text-wrapper_4 {
          width: 45.63vw;
          height: 13.08vw;
          background: url("/src/assets/1029/4444.jpg") -0.06vw -0.06vw no-repeat;
          background-size: 45.67vw 13.12vw;
          .text_32 {
            width: 8.29vw;
            height: 2.5vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.77vw;
            letter-spacing: 5.542346954345703px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
            line-height: 2.5vw;
            margin: 1.4vw 0 0 1.82vw;
          }
          .text_33 {
            width: 41.62vw;
            height: 3.44vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.25vw;
            letter-spacing: 3.9122447967529297px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            text-align: left;
            line-height: 1.72vw;
            margin: 1.04vw 0 4.68vw 2.03vw;
          }
        }
      }
      .group_10 {
        width: 17.66vw;
        height: 3.08vw;
        margin: 2.34vw 0 0 39.37vw;
        .box_5 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 1.2vw;
        }
        .text_34 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .group_11 {
        width: 90.11vw;
        height: 20.37vw;
        margin: 2.34vw 0 0 4.94vw;
        .text-wrapper_5 {
          box-shadow: 5px 2px 11px 0px rgba(21, 54, 48, 0.49);
          background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0beb5255033c45c09d25569dba20456c_mergeImage.png);
          height: 20.37vw;
          border: 1px solid rgba(151, 151, 151, 1);
          width: 12.04vw;
          .paragraph_3 {
            text-shadow: 1px 1px 2px rgba(128, 132, 133, 0.56);
            width: 1.98vw;
            height: 9.38vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.66vw;
            letter-spacing: 5.216326713562012px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            line-height: 2.35vw;
            margin: 5.05vw 0 0 5.41vw;
          }
        }
        .text-wrapper_6 {
          box-shadow: 5px 2px 11px 0px rgba(21, 54, 48, 0.49);
          background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8fcb970b0c4b442bb91f6c1b521aa1fd_mergeImage.png);
          height: 20.37vw;
          margin-left: 0.37vw;
          width: 10.84vw;
          .paragraph_4 {
            text-shadow: 1px 1px 2px rgba(128, 132, 133, 0.56);
            width: 1.98vw;
            height: 14.07vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.66vw;
            letter-spacing: 5.216326713562012px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            line-height: 2.35vw;
            margin: 3.12vw 0 0 4.42vw;
          }
        }
        .text-wrapper_7 {
          box-shadow: 5px 2px 11px 0px rgba(21, 54, 48, 0.49);
          background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/559ca2062bc4480697a42c74e319ff6d_mergeImage.png);
          height: 20.37vw;
          margin-left: 0.32vw;
          width: 11.67vw;
          .paragraph_5 {
            text-shadow: 1px 1px 2px rgba(128, 132, 133, 0.56);
            width: 1.98vw;
            height: 9.38vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 1.66vw;
            letter-spacing: 5.216326713562012px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            line-height: 2.35vw;
            margin: 5.05vw 0 0 4.84vw;
          }
        }
        .block_5 {
          box-shadow: 4px 2px 4px 0px rgba(46, 76, 70, 0.31);
          background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e1bbbc2232504f80b52c2f86c913b907_mergeImage.png);
          height: 20.37vw;
          margin-left: 0.37vw;
          width: 54.54vw;
          .section_4 {
            background-color: rgba(61, 73, 71, 0.4);
            width: 54.48vw;
            height: 20.37vw;
            margin-left: 0.06vw;
            .text-group_8 {
              width: 35.94vw;
              height: 6.88vw;
              margin: 2.08vw 0 0 2.7vw;
              .text_35 {
                text-shadow: 1px 1px 2px rgba(128, 132, 133, 0.56);
                width: 11.67vw;
                height: 2.35vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 1.66vw;
                letter-spacing: 5.216326713562012px;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                white-space: nowrap;
                line-height: 2.35vw;
                margin-left: 0.21vw;
              }
              .text_36 {
                text-shadow: 1px 1px 2px rgba(128, 132, 133, 0.56);
                width: 35.94vw;
                height: 3.44vw;
                overflow-wrap: break-word;
                color: rgba(255, 255, 255, 1);
                font-size: 1.25vw;
                letter-spacing: 3.9122447967529297px;
                font-family: PingFangSC-Semibold;
                font-weight: 600;
                text-align: left;
                line-height: 1.72vw;
                margin-top: 1.1vw;
              }
            }
          }
        }
      }
      .image-text_2 {
        width: 17.14vw;
        height: 3.08vw;
        margin: 2.29vw 0 0 39.94vw;
        .box_6 {
          background-color: rgba(11, 165, 150, 1);
          border-radius: 1px;
          width: 1.2vw;
          height: 1.15vw;
          margin-top: 0.99vw;
        }
        .text-group_9 {
          width: 15.32vw;
          height: 3.08vw;
          overflow-wrap: break-word;
          color: rgba(69, 69, 69, 1);
          font-size: 2.18vw;
          letter-spacing: 6.846428394317627px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          text-align: right;
          white-space: nowrap;
          line-height: 3.08vw;
        }
      }
      .group_12 {
        width: 86.46vw;
        height: 28.44vw;
        margin: 1.14vw 0 0 7.6vw;
        .text-wrapper_8 {
          height: 28.23vw;
          background: url("/src/assets/1029/2222.jpg") 0vw -0.06vw no-repeat;
          background-size: 27.55vw 28.33vw;
          width: 27.5vw;
          .text_37 {
            text-shadow: 3px 6px 10px rgba(92, 97, 98, 0.38);
            width: 7.66vw;
            height: 9.64vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 6.87vw;
            letter-spacing: 6.417346954345703px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
            line-height: 9.64vw;
            margin-left: 1.2vw;
          }
        }
        .text-wrapper_9 {
          height: 28.23vw;
          background: url("/src/assets/1029/22.jpg") 0vw -0.06vw no-repeat;
          background-size: 26.82vw 28.28vw;
          width: 26.78vw;
          margin: 0.2vw 0 0 2.08vw;
          .text_38 {
            text-shadow: 3px 6px 10px rgba(92, 97, 98, 0.38);
            width: 8.96vw;
            height: 9.64vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 6.87vw;
            letter-spacing: 6.417346954345703px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
            line-height: 9.64vw;
            margin: -0.2vw 0 0 1.35vw;
          }
        }
        .text-wrapper_10 {
          height: 28.23vw;
          background: url("/src/assets/1029/222.jpg") 0vw -0.06vw no-repeat;
          background-size: 27.23vw 28.33vw;
          margin-left: 2.87vw;
          width: 27.24vw;
          .text_39 {
            text-shadow: 3px 6px 10px rgba(92, 97, 98, 0.38);
            width: 8.96vw;
            height: 9.64vw;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 6.87vw;
            letter-spacing: 6.417346954345703px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
            line-height: 9.64vw;
            margin-left: 1.1vw;
          }
        }
      }
      .group_13 {
        width: 86.46vw;
        height: 14.85vw;
        margin: 0 0 2.39vw 7.6vw;
        .box_7 {
          background-color: rgba(92, 92, 92, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          .text-group_10 {
            width: 24.22vw;
            height: 6.98vw;
            margin: 2.5vw 0 0 1.77vw;
            .text_40 {
              width: 8.29vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
              margin-left: 0.16vw;
            }
            .text_41 {
              width: 24.22vw;
              height: 3.44vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
        .box_8 {
          background-color: rgba(92, 92, 92, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          margin-left: 2.24vw;
          .text-group_11 {
            width: 24.22vw;
            height: 8.7vw;
            margin: 2.5vw 0 0 1.56vw;
            .text_42 {
              width: 8.29vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
            }
            .text_43 {
              width: 24.22vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
        .box_9 {
          background-color: rgba(92, 92, 92, 0.1);
          width: 27.35vw;
          height: 14.85vw;
          margin-left: 2.19vw;
          .text-group_12 {
            width: 24.22vw;
            height: 8.7vw;
            margin: 2.5vw 0 0 1.56vw;
            .text_44 {
              width: 10.32vw;
              height: 2.5vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.77vw;
              letter-spacing: 5.542346954345703px;
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              text-align: left;
              white-space: nowrap;
              line-height: 2.5vw;
              margin-left: 0.16vw;
            }
            .text_45 {
              width: 24.22vw;
              height: 5.16vw;
              overflow-wrap: break-word;
              color: rgba(69, 69, 69, 1);
              font-size: 1.25vw;
              letter-spacing: 3.9122447967529297px;
              font-weight: normal;
              text-align: left;
              line-height: 1.72vw;
              margin-top: 1.05vw;
            }
          }
        }
      }
    }
    .text-wrapper_11 {
      background-color: rgba(17, 17, 17, 0.97);
      width: 100vw;
      height: 4.43vw;
      margin: 248.75vw 0 0 -100vw;
      .text_46 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 26.35vw;
      }
      .text_47 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_48 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_49 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_50 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.76vw;
      }
      .text_51 {
        width: 2.82vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 4.27vw;
      }
      .text_52 {
        width: 2.82vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 2.18vw;
      }
      .text_53 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 1.66vw;
      }
      .text_54 {
        width: 3.75vw;
        height: 1.31vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 0.93vw;
        font-weight: normal;
        text-align: right;
        white-space: nowrap;
        line-height: 1.31vw;
        margin: 1.56vw 0 0 5.46vw;
      }
      .text_55 {
        width: 12.04vw;
        height: 2.35vw;
        overflow-wrap: break-word;
        color: rgba(255, 255, 255, 1);
        font-size: 1.66vw;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        text-align: right;
        white-space: nowrap;
        line-height: 2.35vw;
        margin: 0.78vw 4.21vw 0 0.88vw;
      }
    }
  }
}
body * {
  box-sizing: border-box;
  flex-shrink: 0;
}
body {
  font-family:
    PingFangSC-Regular,
    Roboto,
    Helvetica Neue,
    Helvetica,
    Tahoma,
    Arial,
    PingFang SC-Light,
    Microsoft YaHei;
}
input {
  background-color: transparent;
  border: 0;
}
button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
}

button:active {
  opacity: 0.6;
}
.van-nav-bar__left:active,
.van-nav-bar__right:active {
  opacity: 1;
}
[class*="van-"]::after {
  border-bottom: 0;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.justify-start {
  display: flex;
  justify-content: flex-start;
}
.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}
.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}
.justify-around {
  display: flex;
  justify-content: space-around;
}
.justify-between {
  display: flex;
  justify-content: space-between;
}
.align-start {
  display: flex;
  align-items: flex-start;
}
.align-center {
  display: flex;
  align-items: center;
}
.align-end {
  display: flex;
  align-items: flex-end;
}
</style>
