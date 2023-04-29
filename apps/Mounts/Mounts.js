import {
    existplayer,
    exist_najie_thing,
    ForwardMsg,
    Read_player,
    Read_najie,
    isNotNull,
    Write_player,
    Write_najie,
} from '../Xiuxian/xiuxian.js';
import {Add_najie_thing, Add_灵石,convert2integer} from '../Xiuxian/xiuxian.js';
import plugin from '../../../../lib/plugins/plugin.js';
import config from '../../model/Config.js';
import data from '../../model/XiuxianData.js';
import fs from 'fs';

export class Mounts extends plugin {
    constructor() {
        super({
            name: 'Mounts',
            dsc: '修圣模块',
            event: 'message',
            priority: 600,
            rule: [
                {
                    reg: '^#出战坐骑.*$',
                    fnc: 'Fight',
                },
                {
                    reg: '^#喂给坐骑.*(\\*[\u4e00-\u9fa5])?\\*[1-9]\d*',
                    fnc: 'feed',
                },
                {
                    reg: '^#进阶坐骑$',
                    fnc: 'Advanced',
                },
            ],
        });
        this.xiuxianConfigData = config.getConfig('xiuxian', 'xiuxian');
    }

    async Fight(e) {
        //常规写法
        let usr_qq = e.user_id;
        let ifexistplay = data.existData('player', usr_qq);
        if (!ifexistplay) {
            return;
        }
        //不开放私聊功能
        if (!e.isGroup) {
            return;
        }
        let player = data.getData('player', usr_qq);
        let name = e.msg.replace('#', '');
        name = name.replace('出战坐骑', '');
        if (player.坐骑.灵魂绑定 == 1) {
            e.reply('你已经与' + player.坐骑.name + '绑定了灵魂,无法更换别的坐骑！');
            return;
        }
        let thing = data.ZuoQi.find(item => item.name == name); //查找坐骑
        if (!isNotNull(thing)) {
            e.reply('这方世界不存在' + name);
            return;
        }
        //放回
        let najie = await Read_najie(usr_qq);
        // let n=player.坐骑;
        // let yes=123456;
        // for(var i=0;najie.坐骑.length>i;i++){
        //     if(najie.坐骑[i].name==name && najie.坐骑[i].等级==n.等级){
        //         najie.坐骑[i].数量+=1
        //         yes=0
        //     }
        // }
        // if(yes==123456){
        //     if(najie.坐骑!=""){
        //         n.数量=1
        //         najie.坐骑.push(n)
        //     }
        // }
        // await Write_najie(usr_qq,najie)
        let last = 114514;
        for (var i = 0; najie.坐骑.length > i; i++) {
            if (najie.坐骑[i].name == name) {
                last = najie.坐骑[i];
                break;
            }
        }
        if (last == 114514) {
            e.reply('你没有' + name);
            return;
        }
        if (isNotNull(player.坐骑.name)) {
            await Add_坐骑(usr_qq, player.坐骑.name, 1, player.坐骑.等级);
        }
        if (player.坐骑.type == '修炼') {
            player.修炼效率提升 = player.修炼效率提升 - player.坐骑.加成;
        }
        if (player.坐骑.type == '幸运') {
            player.幸运 = player.幸运 - player.坐骑.加成;
        }
        player.坐骑 = last;
        player.坐骑.加成=player.坐骑.等级*player.坐骑.每级增加;
        if (last.type == '幸运') {
            player.幸运 = player.幸运 + last.加成;
        }
        if (last.type == '修炼') {
            player.修炼效率提升 = player.修炼效率提升 + last.加成;
        }
        //增减坐骑方法
        await Add_坐骑(usr_qq, last.name, -1, last.等级);
        await Write_player(usr_qq, player); //写入
        e.reply('成功出战' + name);
    }

    async Advanced(e) {
        //常规写法
        let usr_qq = e.user_id;
        let ifexistplay = data.existData('player', usr_qq);
        if (!ifexistplay) {
            return;
        }
        //不开放私聊功能
        if (!e.isGroup) {
            return;
        }
        let player = data.getData('player', usr_qq);
        let list = ['圣胎', '圣仔', '圣兽', '圣道', '圣灵'];
        let list_level = [20, 40, 60, 80, 100];
        let x = 114514;
        for (var i = 0; list.length > i; i++) {
            if (list[i] == player.坐骑.品级) {
                x = i;
                break;
            }
        }
        if (x == 114514) {
            e.reply('你没有坐骑');
            return;
        }
        if (x == 4) {
            e.reply('[' + player.坐骑.name + ']已达到最高品级');
            return;
        }
        let number_n = x + 1;
        number_n.toString; //等级转换字符串
        let name = number_n + '级圣石';
        let quantity = await exist_najie_thing(usr_qq, name, '道具'); //查找纳戒
        if (!quantity) {
            //没有
            e.reply(`你没有[${name}]`);
            return;
        }
        let player_level = player.坐骑.等级;
        let last_jiachen = player.坐骑.加成;
        if (player_level == list_level[x]) {
            //判断是否满级
            let thing = data.ZuoQi.find(item => item.id == player.坐骑.id + 1); //查找下个等级坐骑
            console.log(thing);
            player.坐骑 = thing;
            player.坐骑.等级 = player_level; //赋值之前的等级
            player.坐骑.加成 = last_jiachen; //赋值之前的加成
            await Add_najie_thing(usr_qq, name, "道具", -1)
            await Write_player(usr_qq, player);
            e.reply('恭喜进阶【' + player.坐骑.name + '】成功');
        } else {
            let need = Number(list_level[x]) - Number(player_level);
            e.reply('坐骑的灵泉集韵不足,还需要【' + need + '】级方可进阶');
            return;
        }
    }

    async feed(e) {
        //不开放私聊功能
        if (!e.isGroup) {
            return;
        }
        let usr_qq = e.user_id;
        //用户不存在
        let ifexistplay = data.existData('player', usr_qq);
        if (!ifexistplay) {
            return;
        }
        let player = data.getData('player', usr_qq);
        if (player.坐骑 == '') {
            //有无坐骑
            e.reply('你没有坐骑');
            return;
        }
        let thing = e.msg.replace('#', '');
        thing = thing.replace('喂给坐骑', '');
        let code = thing.split('*');
        let thing_name = code[0]; //物品
        let thing_value = code[1]; //数量
        thing_value=await convert2integer(thing_value);
        let ifexist = data.ZuoQishiwu.find(item => item.name == thing_name); //查找
        if (!isNotNull(ifexist)) {
            e.reply('此乃凡物,坐骑不吃' + thing_name);
            return;
        }
        if (
            player.坐骑.等级 == player.坐骑.等级上限 &&
            player.坐骑.品级 != '圣灵'
        ) {
            e.reply('等级已达到上限,请主人尽快为坐骑突破品级');
            return;
        }
        if (
            player.坐骑.品级 == '圣灵' &&
            player.坐骑.等级 == player.坐骑.等级上限
        ) {
            e.reply('您的坐骑已达到天赋极限');
            return;
        }
        //纳戒中的数量
        let thing_quantity = await exist_najie_thing(usr_qq, thing_name, '圣米');
        if (thing_quantity < thing_value || !thing_quantity) {
            //没有
            e.reply(`【${thing_name}】数量不足`);
            return;
        }
        //纳戒数量减少
        await Add_najie_thing(usr_qq, thing_name, '圣米', -thing_value);
        //待完善加成
        let jiachen = ifexist.level * thing_value; //加的等级
        if (jiachen > player.坐骑.等级上限 - player.坐骑.等级) {
            jiachen = player.坐骑.等级上限 - player.坐骑.等级;
        }
        //保留
        player.坐骑.加成 += jiachen * player.坐骑.每级增加;
        if (player.坐骑.type == '修炼') {
            player.修炼效率提升 += jiachen * player.坐骑.每级增加;
        }
        if (player.坐骑.type == '幸运') {
            player.幸运 += jiachen * player.坐骑.每级增加;
        }
        if (player.坐骑.等级上限 > player.坐骑.等级 + jiachen) {
            player.坐骑.等级 += jiachen;
        } else {
            if (player.坐骑.品级 == '圣灵') {
                e.reply('您的坐骑已达到天赋极限');
            } else {
                e.reply('等级已达到上限,请主人尽快为坐骑突破品级');
            }
            player.坐骑.等级 = player.坐骑.等级上限;
        }
        await data.setData('player', usr_qq, player);
        e.reply(`喂养成功，坐骑的等级增加了${jiachen},当前为${player.坐骑.等级}`);
        return;
    }
}

/**
 * 增加减少纳戒内物品
 * @param usr_qq 操作存档的qq号
 * @param thing_name  坐骑名称
 * @param n  操作的数量,取+增加,取 -减少
 * @param thing_level  坐骑等级
 * @returns 无
 */
export async function Add_坐骑(usr_qq, thing_name, n, thing_level = null) {
    var x = Number(n);
    if (x == 0) {
        return;
    }
    let najie = await Read_najie(usr_qq);
    let trr = najie.坐骑.find(
        item => item.name == thing_name && item.等级 == thing_level
    );
    var name = thing_name;
    if (x > 0 && !isNotNull(trr)) {
        //无中生有
        let newthing = data.ZuoQi.find(item => item.name == name);
        if (!isNotNull(newthing)) {
            console.log('没有这个东西');
            return;
        }
        if (thing_level != null) {
            newthing.等级 = thing_level;
        }
        najie.坐骑.push(newthing);
        najie.坐骑.find(
            item => item.name == name && item.等级 == newthing.等级
        ).数量 = x;
        let ZuoQi=najie.坐骑.find(
            item => item.name == name && item.等级 == newthing.等级
        )
        najie.坐骑.find(
            item => item.name == name && item.等级 == newthing.等级
        ).加成=ZuoQi.等级*ZuoQi.每级增加
        najie.坐骑.find(
            item => item.name == name && item.等级 == newthing.等级
        ).islockd = 0;
        await Write_najie(usr_qq, najie);
        return;
    }
    najie.坐骑.find(item => item.name == name && item.等级 == trr.等级).数量 += x;
    if (
        najie.坐骑.find(item => item.name == name && item.等级 == trr.等级).数量 < 1
    ) {
        //假如用完了,需要删掉数组中的元素,用.filter()把!=该元素的过滤出来
        najie.坐骑 = najie.坐骑.filter(
            item => item.name != thing_name || item.等级 != trr.等级
        );
    }
    await Write_najie(usr_qq, najie);
    return;
}
