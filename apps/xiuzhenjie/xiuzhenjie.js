import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class xiuzhenjie extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'xiuzhenjie',
            /** 功能描述 */
            dsc: '交易模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 600,
            rule: [
                {
                    reg: '^#供奉修真石$',
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
            e.reply("你不是修真界之人");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "修真石", "道具")
        if (!x) {
            e.reply("你没有修真石");
            return;
        }
        if (player.灵根.type != "修真灵尊") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('一旦转为修真至尊体,将会舍弃当前灵根。回复:【放弃修真至尊体】或者【转世修真至尊体】进行选择', false, { at: true });
            return;
        
        }
        let random = Math.random();
        if (player.灵根.name == "一重修真至尊体") {
            if (x < 25) {
                e.reply("修真石不足25个,当前魔石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -25);
            if (random < 0.9) {
                player.灵根 = {
                    "id":699551,
                    "name":"二重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.42,
                    "法球倍率":0.3
             
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根二重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "二重修真至尊体") {
            if (x < 35) {
                e.reply("修真石不足35个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -35);
            if (random < 0.8) {
                player.灵根 = {
                    "id":699552,
                    "name":"三重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.48,
                    "法球倍率":0.4
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根三重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "三重修真至尊体") {
            if (x < 35) {
                e.reply("修真石不足35个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -35);
            if (random < 0.7) {
                player.灵根 = {
                    "id":699553,
                    "name":"四重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.54,
                    "法球倍率":0.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根四重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "四重修真至尊体") {
            if (x < 45) {
                e.reply("修真石不足45个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -45);
            if (random < 0.6) {
                player.灵根 = {
                    "id":699554,
                    "name":"五重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.6,
                    "法球倍率":0.6
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根五重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "五重修真至尊体") {
            if (x < 45) {
                e.reply("修真石不足45个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -45);
            if (random < 0.5) {
                player.灵根 = {
                    "id":699555,
                    "name":"六重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.66,
                    "法球倍率":0.7
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根六重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "六重修真至尊体") {
            if (x < 45) {
                e.reply("修真石不足45个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -45);
            if (random < 0.4) {
                player.灵根 = {
                    "id":699556,
                    "name":"七重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.72,
                    "法球倍率":0.8
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根七重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "七重修真至尊体") {
            if (x < 55) {
                e.reply("修真石不足55个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -55);
            if (random < 0.3) {
                player.灵根 = {
                    "id":699557,
                    "name":"八重修真至尊体",
                    "type":"修真灵尊",
                    "eff":0.78,
                    "法球倍率":0.9
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根八重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "八重修真至尊体") {
            if (x < 55) {
                e.reply("修真石不足55个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -55);
            if (random < 0.2) {
                player.灵根 = {
                    "id":699558,
                    "name":"九重修真至尊体",
                    "type":"修真灵尊",
                    "eff":1.2,
                    "法球倍率":1.3
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜你,修真至尊体突破成功,当前灵根九重修真至尊体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        }
        else if (player.灵根.name == "九重修真至尊体") {
            if (x < 55) {
                e.reply("修真石不足155个,当前修真石数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -155);
            if (random < 0.1) {
                player.灵根 = {
                    "id":699559,
                    "name":"修真至尊完全体",
                    "type":"修真灵尊",
                    "eff":1.5,
                    "法球倍率":1.6
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜您,已成为修真界大能,具备了称帝资格,当前灵根为修真至尊完全体!");
                return;
            }
            else {
                e.reply("失败");
                return;
            }
        
        }
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
        if (choice == "放弃修真至尊体") {

            await this.reply('重拾道心,继续苟着');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "转世修真至尊体") {
            var x = await exist_najie_thing(usr_qq, "修真石", "道具")
            if (!x) {
                e.reply("你没有修真石");
                return;
            }
            if (x < 15) {
                e.reply("你修真石不足15个");
                return;
            }
            await Add_najie_thing(usr_qq, "修真石", "道具", -15);
            player.灵根 = {
                "id":699550,
                "name":"一重修真至尊体",
                "type":"修真灵尊",
                "eff":0.36,
                "法球倍率":0.25
            };
            await Write_player(usr_qq, player);
            e.reply("恭喜你,成为了修真界王者!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}

