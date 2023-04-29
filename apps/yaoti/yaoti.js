import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class yaoti extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'yaoti',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#供奉妖晶$',
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
            e.reply("你不是妖界之人");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "妖晶", "道具")
        if (!x) {
            e.reply("你没有妖晶");
            return;
        }
        if (player.灵根.type != "妖王" && player.灵根.name != "妖尊") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('一旦转为妖体,将会舍弃当前灵根。回复:【放弃妖体】或者【转世妖体】进行选择', false, { at: true });
            return;
        
        }
        let random = Math.random();
        if (player.灵根.name == "一重妖体") {
            if (x < 20) {
                e.reply("妖晶不足20个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -20);
            if (random < 0.9) {
                player.灵根 = {
                    "id":9633871,
                    "name":"二重妖体",
                    "type":"妖王",
                    "eff":0.42,
                    "法球倍率":0.27
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根二重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "二重妖体") {
            if (x < 30) {
                e.reply("妖晶不足30个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -30);
            if (random < 0.8) {
                player.灵根 = {
                    "id":9633872,
                    "name":"三重妖体",
                    "type":"妖王",
                    "eff":0.48,
                    "法球倍率":0.31
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根三重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "三重妖体") {
            if (x < 30) {
                e.reply("妖晶不足30个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -30);
            if (random < 0.7) {
                player.灵根 = {
                    "id":9633873,
                    "name":"四重妖体",
                    "type":"妖王",
                    "eff":0.54,
                    "法球倍率":0.36
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根四重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "四重妖体") {
            if (x < 40) {
                e.reply("妖晶不足40个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -40);
            if (random < 0.6) {
                player.灵根 = {
                    "id":9633874,
                    "name":"五重妖体",
                    "type":"妖王",
                    "eff":0.6,
                    "法球倍率":0.4
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根五重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "五重妖体") {
            if (x < 40) {
                e.reply("妖晶不足40个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -40);
            if (random < 0.5) {
                player.灵根 = {
                    "id":9633875,
                    "name":"六重妖体",
                    "type":"妖王",
                    "eff":0.66,
                    "法球倍率":0.43
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根六重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "六重妖体") {
            if (x < 40) {
                e.reply("妖晶不足40个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -40);
            if (random < 0.4) {
                player.灵根 = {
                    "id":9633876,
                    "name":"七重妖体",
                    "type":"妖王",
                    "eff":0.72,
                    "法球倍率":0.47
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根七重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "七重妖体") {
            if (x < 50) {
                e.reply("妖晶不足50个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -50);
            if (random < 0.3) {
                player.灵根 = {
                    "id":9633877,
                    "name":"八重妖体",
                    "type":"妖王",
                    "eff":0.78,
                    "法球倍率":0.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根八重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "八重妖体") {
            if (x < 50) {
                e.reply("妖晶不足50个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -50);
            if (random < 0.2) {
                player.灵根 = {
                    "id":9633878,
                    "name":"九重妖体",
                    "type":"妖王",
                    "eff":1.2,
                    "法球倍率":1.2
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,妖体突破成功,当前灵根九重妖体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "九重妖体") {
            if (x < 50) {
                e.reply("妖晶不足150个,当前妖晶数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -150);
            if (random < 0.1) {
                player.灵根 = {
                    "id":101510,
                    "name":"妖神圣体",
                    "type":"妖尊",
                    "eff":1.5,
                    "法球倍率":1.5
                };   
                await Write_player(usr_qq, player);
                e.reply("恭喜您,已成为妖界大能,具备了称帝资格,当前灵根为妖神圣体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        e.reply("你已是妖族大能！");
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
        if (choice == "放弃妖体") {

            await this.reply('重拾道心,继续快活');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "转世妖体") {
            var x = await exist_najie_thing(usr_qq, "妖晶", "道具")
            if (!x) {
                e.reply("你没有妖晶");
                return;
            }
            if (x < 10) {
                e.reply("你妖晶不足10个");
                return;
            }
            await Add_najie_thing(usr_qq, "妖晶", "道具", -10);
            player.灵根 = {
                "id":9633870,
                "name":"一重妖体",
                "type":"妖王",
                "eff":0.36,
                "法球倍率":0.23
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜你,成为了妖族大能!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}

