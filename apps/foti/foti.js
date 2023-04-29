import plugin from '../../../../lib/plugins/plugin.js';
 import {
    existplayer,
    Read_player,
    exist_najie_thing,
    Add_najie_thing,
    Write_player,
} from '../Xiuxian/xiuxian.js';

export class foti extends plugin {
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
                    reg: '^#供奉舍利子$',
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
            e.reply("施主,你杀气太重！");
            return;
        }
        let x = await exist_najie_thing(usr_qq, "舍利子", "道具")
        if (!x) {
            e.reply("你没有舍利子");
            return;
        }
        if (player.灵根.type != "佛门" && player.灵根.name != "圣佛") {
            /** 设置上下文 */
            this.setContext('RE_lingeng');
            /** 回复 */
            await e.reply('一但遁入空门,将会舍弃七情六欲。回复:【放弃佛体】或者【遁入空门】进行选择', false, { at: true });
            return;
        
        }
        let random = Math.random();
        if (player.灵根.name == "一品僧人") {
            if (x < 20) {
                e.reply("舍利子不足20个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -20);
            if (random < 0.9) {
                player.灵根 = {
                    "id":1321175,
                    "name":"二品僧人",
                    "type":"佛门",
                    "eff":0.42,
                    "法球倍率":0.27
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为二品僧人!");
                return;
            }
            else {
                e.reply("施主,不可心生杂念！");
                return;
            }
        }
        else if (player.灵根.name == "二品僧人") {
            if (x < 30) {
                e.reply("舍利子不足30个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -30);
            if (random < 0.8) {
                player.灵根 = {
                    "id":1321176,
                    "name":"三品僧人",
                    "type":"佛门",
                    "eff":0.48,
                    "法球倍率":0.31
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为三品僧人!");
                return;
            }
            else {
                e.reply("施主,不可心生杂念！");
                return;
            }
        }
        else if (player.灵根.name == "三品僧人") {
            if (x < 30) {
                e.reply("舍利子不足30个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -30);
            if (random < 0.7) {
                player.灵根 = {
                    "id":1321177,
                    "name":"四品僧人",
                    "type":"佛门",
                    "eff":0.54,
                    "法球倍率":0.36
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为四品僧人!");
                return;
            }
            else {
                e.reply("施主,静下心来！");
                return;
            }
        }
        else if (player.灵根.name == "四品僧人") {
            if (x < 40) {
                e.reply("舍利子不足40个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -40);
            if (random < 0.6) {
                player.灵根 = {
                    "id":1321178,
                    "name":"五品僧人",
                    "type":"佛门",
                    "eff":0.6,
                    "法球倍率":0.4
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为五品僧人!");
                return;
            }
            else {
                e.reply("施主,空即是色！");
                return;
            }
        }
        else if (player.灵根.name == "五品僧人") {
            if (x < 40) {
                e.reply("舍利子不足40个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -40);
            if (random < 0.5) {
                player.灵根 = {
                    "id":1321179,
                    "name":"六品僧人",
                    "type":"佛门",
                    "eff":0.66,
                    "法球倍率":0.43
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为六品僧人!");
                return;
            }
            else {
                e.reply("施主,色即是空！");
                return;
            }
        }
        else if (player.灵根.name == "六品僧人") {
            if (x < 40) {
                e.reply("舍利子不足40个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -40);
            if (random < 0.4) {
                player.灵根 = {
                    "id":1321180,
                    "name":"七品僧人",
                    "type":"佛门",
                    "eff":0.72,
                    "法球倍率":0.47
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为七品僧人!");
                return;
            }
            else {
                e.reply("施主,放下前尘往事吧！");
                return;
            }
        }
        else if (player.灵根.name == "七品僧人") {
            if (x < 50) {
                e.reply("舍利子不足50个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -50);
            if (random < 0.3) {
                player.灵根 = {
                    "id":1321181,
                    "name":"八品僧人",
                    "type":"佛门",
                    "eff":0.78,
                    "法球倍率":0.5
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为八品僧人!");
                return;
            }
            else {
                e.reply("施主,不可三心二意！");
                return;
            }
        }
        else if (player.灵根.name == "八品僧人") {
            if (x < 50) {
                e.reply("舍利子不足50个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -50);
            if (random < 0.2) {
                player.灵根 = {
                    "id":1321182,
                    "name":"九品僧人",
                    "type":"佛门",
                    "eff":1.2,
                    "法球倍率":1.2
                };
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,悟性更上一层楼,当前为九品僧人!");
                return;
            }
            else {
                e.reply("施主,放不下那个她吗？");
                return;
            }
        }
        else if (player.灵根.name == "九品僧人") {
            if (x < 150) {
                e.reply("舍利子不足150个,当前舍利子数量" + x + "个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -150);
            if (random < 0.1) {
                player.灵根 = {
                    "id":1321183,
                    "name":"释迦摩尼圣僧",
                    "type":"圣佛",
                    "eff":1.5,
                    "法球倍率":1.5
                };   
                await Write_player(usr_qq, player);
                e.reply("恭喜施主,看穿世俗情欲,达到我佛门最高处,成为了释迦摩尼圣僧!");
                return;
            }
            else {
                e.reply("施主,六根不净岂能成佛？");
                return;
            }
        }
        e.reply("圣佛,断不可如此！");
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
        if (choice == "放弃佛体") {

            await this.reply('重拾道心,继续逍遥快活');
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
        else if (choice == "遁入空门") {
            var x = await exist_najie_thing(usr_qq, "舍利子", "道具")
            if (!x) {
                e.reply("你没有舍利子");
                return;
            }
            if (x < 10) {
                e.reply("你舍利子不足10个");
                return;
            }
            await Add_najie_thing(usr_qq, "舍利子", "道具", -10);
            player.灵根 = {
                "id":1321174,
                "name":"一品僧人",
                "type":"佛门",
                "eff":0.36,
                "法球倍率":0.23
            };
            await Write_player(usr_qq, player);
            e.reply("欢迎施主,入我佛门!");
            /** 结束上下文 */
            this.finish('RE_lingeng');
            return;
        }
    }
}

