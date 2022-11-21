/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx0effbfbfa63db2dd',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '6ed03e7d752b699cc173fa4ef1027730',

  PROVINCE: '广东',
  CITY: '汕头',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小陈',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTju86UtuJMhPO2r53k3TDtYZgRM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'e99kYgC0ZDcyCUVhCpX3UzAJ_In1h_dscHCukJb9Jsk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小陈', year: '2002', date: '08-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'e99kYgC0ZDcyCUVhCpX3UzAJ_In1h_dscHCukJb9Jsk',

  CALLBACK_USERS: [
    {
      name: '小陈',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oTju86UtuJMhPO2r53k3TDtYZgRM',
    }
  ],

}

module.exports = USER_CONFIG

