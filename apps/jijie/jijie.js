import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class jijie extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'jijie',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#迈入祭界之域$',
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
        if ( player.level_id <= 230) {
            e.reply("你不是祭界境大能！");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "祭界石", "道具")
        if (!x) {
            e.reply("你没有祭界石！");
            return;
        }
        if (player.灵根.type != "界体") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('尊贵的祭界大能,恭喜您！请您回复:【闲游界域】或者【迈入祭界】进行选择', false, { at: true });
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
        if (choice == "闲游界域") {

            await this.reply('身为祭界大能,应该再界域做一些贡献！');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "迈入祭界") {
            var x = await exist_najie_thing(usr_qq, "祭界石", "道具")
            if (!x) {
                e.reply("你有祭界石吗？");
                return;
            }
            if (x < 2700) {
                e.reply("你祭界石不足2700个！");
                return;
            }
            await Add_najie_thing(usr_qq, "祭界石", "道具", -2700);
            player.灵根 = {
                "id":75245997,
                "name":"祭界法则",
                "type":"界体",
                "eff":27.0,
                "法球倍率":27.0
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜您!已成功迈入祭界!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}


