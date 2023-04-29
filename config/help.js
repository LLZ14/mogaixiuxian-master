/**
* 请注意，系统不会读取help_default.js ！！！！
* 【请勿直接修改此文件，且可能导致后续冲突】
*
* 如需自定义可将文件【复制】一份，并重命名为 help.js
*
* */

export const helpCfg = {
  // 帮助标题
  "title": "WeLM帮助",

  // 帮助副标题 
  "subTitle": "Yunzai-Bot & WeLM-Plugin",

  // 帮助表格列数，可选：2-5，默认3
  // 注意：设置列数过多可能导致阅读困难，请参考实际效果进行设置
  "colWidth": 265,

  // 帮助表格列数，可选：2-5，默认3
  // 注意：设置列数过多可能导致阅读困难，请参考实际效果进行设置
  "colCount": 3,

  // 皮肤选择，可多选，或设置为all
  // 皮肤包放置于 resources/help/theme
  // 皮肤名为对应文件夹名
  // theme: 'all', // 设置为全部皮肤
  // theme: ['default','theme2'], // 设置为指定皮肤 
  "theme": "all",

  // 排除皮肤：在存在其他皮肤时会忽略该项内设置的皮肤
  // 默认忽略default：即存在其他皮肤时会忽略自带的default皮肤
  // 如希望default皮肤也加入随机池可删除default项
  "themeExclude": [
    "default"
  ],
  // 是否启用背景毛玻璃效果，若渲染遇到问题可设置为false关闭
  "bgBlur": true
}
export const helpList = [
  {
    "group": "主要功能",
    "list": [
      {
        "icon": 71,
        "title": "#突破斗师境界",
        "desc": "需要斗旋珠激活体制"
      },
      {
        "icon": 94,
        "title": "#突破斗皇壁障",
        "desc": "需要斗皇石凝聚斗宗之体"
      },
      {
        "icon": 79,
        "title": "#突破斗宗壁障",
        "desc": "需要踏空石凝聚斗尊之体"
      },
      {
        "icon": 90,
        "title": "#凝聚斗圣之躯",
        "desc": "需要斗圣石凝聚斗尊之体"
      },
      {
        "icon": 3,
        "title": "##凝聚斗帝血脉",
        "desc": "显示此内容"
      },
    {
      "icon": 3,
      "title": "#融道星空万界",
      "desc": "磅礴的星空之力入体,需要大量星陨石"
    },
    {
        "icon": 3,
        "title": "#斗破天地万物宇宙星云",
        "desc": "斗破苍穹最强体质,需要大量苍穹之光"
      },
      {
          "icon": 3,
          "title": "#苍穹界",
          "desc": "#进入苍穹界+地点名"
        },
        {
            "icon": 3,
            "title": "#凝聚大帝道体",
            "desc": "#需要大量的大帝晶壁方可凝聚"
          },

    ]
  },
  {
    "group": "管理命令，仅管理员可用",
    "auth": "master",
    "list": [
      {
        "icon": 85,
        "title": "#填写token #更改name",
        "desc": "使用功能前必须填写token"
      },
      {
        "icon": 92,
        "title": "welm更新 #welm强制更新",
        "desc": "更新插件"
      }
    ]
  }
]