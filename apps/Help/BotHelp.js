import plugin from '../../../../lib/plugins/plugin.js';
import puppeteer from '../../../../lib/puppeteer/puppeteer.js';
import Help from '../../model/help.js';
import Help1 from '../../model/xunbaohelp.js';
import Help2 from '../../model/shituhelp.js';
import md5 from 'md5';

let helpData = {
  md5: '',
  img: '',
};

/**
 * 修仙帮助模块
 */

export class BotHelp extends plugin {
  constructor() {
    super({
      /** 功能名称 */
      name: 'BotHelp',
      /** 功能描述 */
      dsc: '修仙帮助',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 400,
      rule: [
        {
          reg: '^#修仙帮助$',
          fnc: 'Xiuxianhelp',
        },
        {
          reg: '^#修仙管理$',
          fnc: 'adminsuper',
        },
        {
          reg: '^#宗门管理$',
          fnc: 'AssociationAdmin',
        },
        {
          reg: '^#修仙扩展$',
          fnc: 'Xiuxianhelpcopy',
        },
        {
          reg: '^#寻宝帮助$',
          fnc: 'xunbaohelp',
        },
        {
          reg: '^#师徒帮助$',
          fnc: 'shituhelp',
        },
        {
          reg: '^#更多帮助$',
          fnc: 'gengduohelp',
        },
      ],
    });
  }
  async xunbaohelp(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help1.xunbaohelp(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  async Xiuxianhelpcopy(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help.gethelpcopy(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  /**
   * rule - 修仙帮助
   * @returns
   */
  async Xiuxianhelp(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help.get(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  async gengduohelp(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help.gengduohelp(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }
  async adminsuper(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help.setup(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  async AssociationAdmin(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help.Association(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  async shituhelp(e) {
    if (!e.isGroup) {
      return;
    }
    let data = await Help2.shituhelp(e);
    if (!data) return;
    let img = await this.cache(data);
    await e.reply(img);
  }

  async cache(data) {
    let tmp = md5(JSON.stringify(data));
    if (helpData.md5 == tmp) return helpData.img;
    helpData.img = await puppeteer.screenshot('help', data);
    helpData.md5 = tmp;
    return helpData.img;
  }
}
