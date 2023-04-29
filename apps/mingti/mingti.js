import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class mingti extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'mingti',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#供奉冥石$',
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
        if (player.魔道值 < 5000) {
            e.reply("你不是冥界之人");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "冥石", "道具")
        if (!x) {
            e.reply("你没有冥石");
            return;
        }
        if (player.灵根.type != "冥王" && player.灵根.type != "冥尊") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('一旦转为冥根,将会舍弃当前灵根。回复:【放弃冥根】或者【转世冥根】进行选择', false, { at: true });
            return;
        
        }
        let random = Math.random();
        if (player.灵根.name == "一重冥体") {
            if (x < 20) {
                e.reply("冥石不足20个,当前魔石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -20);
            if (random < 0.9) {
                player.灵根 = {
                    "id":699501,
                    "name":"二重冥体",
                    "type":"冥王",
                    "eff":0.42,
                    "法球倍率":0.27
             
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根二重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "二重冥体") {
            if (x < 30) {
                e.reply("冥石不足30个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -30);
            if (random < 0.8) {
                player.灵根 = {
                    "id":699502,
                    "name":"三重冥体",
                    "type":"冥王",
                    "eff":0.48,
                    "法球倍率":0.31
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根三重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "三重冥体") {
            if (x < 30) {
                e.reply("冥石不足30个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -30);
            if (random < 0.7) {
                player.灵根 = {
                    "id":699503,
                    "name":"四重冥体",
                    "type":"冥王",
                    "eff":0.54,
                    "法球倍率":0.36
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根四重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "四重冥体") {
            if (x < 40) {
                e.reply("冥石不足40个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -40);
            if (random < 0.6) {
                player.灵根 = {
                    "id":699504,
                    "name":"五重冥体",
                    "type":"冥王",
                    "eff":0.6,
                    "法球倍率":0.4
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根五重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "五重冥体") {
            if (x < 40) {
                e.reply("冥石不足40个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -40);
            if (random < 0.5) {
                player.灵根 = {
                    "id":699505,
                    "name":"六重冥体",
                    "type":"冥王",
                    "eff":0.66,
                    "法球倍率":0.43
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根六重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "六重冥体") {
            if (x < 40) {
                e.reply("冥石不足40个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -40);
            if (random < 0.4) {
                player.灵根 = {
                    "id":699506,
                    "name":"七重冥体",
                    "type":"冥王",
                    "eff":0.72,
                    "法球倍率":0.47
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根七重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "七重冥体") {
            if (x < 50) {
                e.reply("冥石不足50个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -50);
            if (random < 0.3) {
                player.灵根 = {
                    "id":699507,
                    "name":"八重冥体",
                    "type":"冥王",
                    "eff":0.78,
                    "法球倍率":0.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根八重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "八重冥体") {
            if (x < 50) {
                e.reply("冥石不足50个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -50);
            if (random < 0.2) {
                player.灵根 = {
                    "id":699508,
                    "name":"九重冥体",
                    "type":"冥王",
                    "eff":1.2,
                    "法球倍率":1.2
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,冥根突破成功,当前灵根九重冥体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "九重冥体") {
            if (x < 50) {
                e.reply("冥石不足150个,当前冥石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -150);
            if (random < 0.1) {
                player.灵根 = {
                    "id":699509,
                    "name":"冥神体",
                    "type":"冥尊",
                    "eff":1.5,
                    "法球倍率":1.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜您,已成为冥界大能,具备了称帝资格,当前灵根为冥神体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        
        }
        e.reply("你已是冥界尊者！");
        return;
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
        if (choice == "放弃冥根") {

            await this.reply('重拾道心,继续苟着');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "转世冥根") {
            var x = await exist_najie_thing(usr_qq, "冥石", "道具")
            if (!x) {
                e.reply("你没有冥石");
                return;
            }
            if (x < 10) {
                e.reply("你冥石不足10个");
                return;
            }
            await Add_najie_thing(usr_qq, "冥石", "道具", -10);
            player.灵根 = {
                "id":699500,
                "name":"一重冥体",
                "type":"冥王",
                "eff":0.36,
                "法球倍率":0.23
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜你,成为了冥界王者!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}

