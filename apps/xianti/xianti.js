import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class xianti extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'xianti',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#供奉仙石$',
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
        if (player.魔道值 > 0) {
            e.reply("仙魔有别,势不两立");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "仙石", "道具")
        if (!x) {
            e.reply("你没有仙石");
            return;
        }
        if (player.灵根.type != "仙体" && player.灵根.type != "仙帝") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('你想扎根仙界,必须放弃前身的一切。回复:【放弃仙籍】或者【位列仙班】进行选择', false, { at: true });
            return;
        
        }
        let random = Math.random();
        if (player.灵根.name == "一品仙身") {
            if (x < 20) {
                e.reply("仙石不足20个,当前魔石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -20);
            if (random < 0.9) {
                player.灵根 = {
                    "id":5821175,
                    "name":"二品仙身",
                    "type":"仙体",
                    "eff":0.42,
                    "法球倍率":0.27
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班二品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "二品仙身") {
            if (x < 30) {
                e.reply("仙石不足30个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -30);
            if (random < 0.8) {
                player.灵根 = {
                    "id":5821176,
                    "name":"三品仙身",
                    "type":"仙体",
                    "eff":0.48,
                    "法球倍率":0.31
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班三品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "三品仙身") {
            if (x < 30) {
                e.reply("仙石不足30个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -30);
            if (random < 0.7) {
                player.灵根 = {
                    "id":5821177,
                    "name":"四品仙身",
                    "type":"仙体",
                    "eff":0.54,
                    "法球倍率":0.36
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班四品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "四品仙身") {
            if (x < 40) {
                e.reply("仙石不足40个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -40);
            if (random < 0.6) {
                player.灵根 = {
                    "id":5821178,
                    "name":"五品仙身",
                    "type":"仙体",
                    "eff":0.6,
                    "法球倍率":0.4
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班五品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "五品仙身") {
            if (x < 40) {
                e.reply("仙石不足40个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -40);
            if (random < 0.5) {
                player.灵根 = {
                    "id":5821179,
                    "name":"六品仙身",
                    "type":"仙体",
                    "eff":0.66,
                    "法球倍率":0.43
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班六品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "六品仙身") {
            if (x < 40) {
                e.reply("仙石不足40个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -40);
            if (random < 0.4) {
                player.灵根 = {
                    "id":5821180,
                    "name":"七品仙身",
                    "type":"仙体",
                    "eff":0.72,
                    "法球倍率":0.47
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班七品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "七品仙身") {
            if (x < 50) {
                e.reply("仙石不足50个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -50);
            if (random < 0.3) {
                player.灵根 = {
                    "id":5821181,
                    "name":"八品仙身",
                    "type":"仙体",
                    "eff":0.78,
                    "法球倍率":0.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班八品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "八品仙身") {
            if (x < 50) {
                e.reply("仙石不足50个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -50);
            if (random < 0.1) {
                player.灵根 = {
                    "id":5821182,
                    "name":"九品仙身",
                    "type":"仙体",
                    "eff":1.2,
                    "法球倍率":1.2
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,仙身升品成功,当前仙班九品仙身!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        }
        else if (player.灵根.name == "九品仙身") {
            if (x < 50) {
                e.reply("仙石不足150个,当前仙石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -150);
            if (random < 0.1) {
                player.灵根 = {
                    "id":5821183,
                    "name":"东极紫薇大帝",
                    "type":"仙帝",
                    "eff":9.99,
                    "法球倍率":9.99
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜您,已成为仙界大帝,具备了永生资格,当前位列仙界东极紫薇大帝!");
                return;
            }
            else {
                e.reply("稳住道心,仙人有仙人的姿态！");
                return;
            }
        
        }
        e.reply("您已是仙界大帝！");
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
        if (choice == "放弃仙籍") {

            await this.reply('重拾道心,继续逍遥一方！');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "位列仙班") {
            var x = await exist_najie_thing(usr_qq, "仙石", "道具")
            if (!x) {
                e.reply("你没有仙石");
                return;
            }
            if (x < 10) {
                e.reply("你仙石不足10个");
                return;
            }
            await Add_najie_thing(usr_qq, "仙石", "道具", -10);
            player.灵根 = {
                "id":5821174,
                "name":"一品仙身",
                "type":"仙体",
                "eff":0.36,
                "法球倍率":0.23
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜你,成功把户口移到仙界!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}

