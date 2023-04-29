import plugin from '../../../../lib/plugins/plugin.js'
import { Read_player, Add_najie_thing, ForwardMsg, sleep, exist_najie_thing, existplayer, Add_灵石, __PATH } from '../Xiuxian/xiuxian.js'
import data from '../../model/XiuxianData.js'
let allaction = false
export class dijichoujiang extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: 'dijichoujiang',
            /** 功能描述 */
            dsc: '抽奖模块',
            event: 'message',
            /** 优先级，数字越小等级越高 */
            priority: 6000,
            rule: [
                {
                    reg: '^#低级抽奖$',
                    fnc: 'choujiang'
                },

            ]
        })
    }
    async choujiang(e) {
        let usr_qq = e.user_id;
        let ifexistplay = await existplayer(usr_qq);
        let player = await Read_player(usr_qq);
        if (!e.isGroup || !ifexistplay) return;
        if (player.灵石 < 100000) {
            e.reply(`没有灵石寸步难行,攒到100000灵石才够哦~`);
            return;
        }
        await Go(e);
        if (allaction) return;
        allaction = false;
        e.reply('一道金光从天而降');
        let msg = [];
        let all = [];
        await sleep(5000);
        for (let i = 0; i < 1; i++) {
            const idx = Math.floor(Math.random() * data.dijichoujiang.length);
            const name = data.dijichoujiang[idx].name;
            const classname = data.dijichoujiang[idx].class;

            msg.push(`一道金光掉落在地上，走近一看是【${name}】`);
            await Add_najie_thing(usr_qq, name, classname, 1);
            all.push(`【${name}】`);
        }
        await Add_灵石(usr_qq, -100000);
        await ForwardMsg(e, msg);
        e.reply(`恭喜获得\n${all}`);
        return
    }
}
/**
 * 状态
 */
export async function Go(e) {
    let usr_qq = e.user_id;
    //获取游戏状态
    let game_action = await redis.get(`xiuxian:player:${usr_qq}:game_action`);
    if (game_action === '0') {
        e.reply('修仙：游戏进行中...');
        allaction = true;
        return;
    }
    //查询redis中的人物动作
    let action = JSON.parse(await redis.get(`xiuxian:player:${usr_qq}:action`));
    if (action != null && new Date().getTime() <= action.end_time) {
        //人物有动作查询动作结束时间
        let diff = action.end_time - new Date().getTime();
        let m = parseInt(diff / 1000 / 60);
        let s = parseInt((diff - m * 60 * 1000) / 1000);
        e.reply(`正在${action.action}中，剩余时间:${m}分${s}秒`);
        allaction = true;
        return;
    }
}