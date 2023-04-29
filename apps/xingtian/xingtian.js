import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class xingtian extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'xingtian',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#融道星空万界$',
                    fnc: 'add_lingeng'
                },
            ],
        });
    }

    async add_lingeng(e) {
        if (!e.isGroup) {
            return;
        }
        //固定写法
        let usr_qq = e.user_id;
        //有无存档
        let ifexistplay = await existplayer(usr_qq);
        if (!ifexistplay) {
            return;
        }
        let player = await Read_player(usr_qq);
        if ( player.level_id <= 233) {
            e.reply("你不是星天境大能！");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "星陨石", "道具")
        if (!x) {
            e.reply("你没有星陨石！");
            return;
        }
        if (player.灵根.type != "星天体") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('尊贵的星天大能,恭喜您！请您回复:【纵横星域】或者【融道星空】进行选择', false, { at: true });
            return;
        }
    }
    async RE_lingeng(e) {
        //不开放私聊功能
        if (!e.isGroup) {
            return;
        }
        let usr_qq = e.user_id;
        let player = await Read_player(usr_qq);
        /** 内容 */
        let new_msg = this.e.message;
        let choice = new_msg[0].text;
        if (choice == "纵横星域") {

            await this.reply('身为星天大能,应该再星域做一些贡献！');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "融道星空") {
            var x = await exist_najie_thing(usr_qq, "星陨石", "道具")
            if (!x) {
                e.reply("你有星陨石吗？");
                return;
            }
            if (x < 3500) {
                e.reply("你星陨石不足3500个！");
                return;
            }
            await Add_najie_thing(usr_qq, "星陨石", "道具", -3500);
            player.灵根 = {
                "id":752975719,
                "name":"星空道体",
                "type":"星天体",
                "eff":35.0,
                "法球倍率":35.0
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜您!已成功融道星空!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}


