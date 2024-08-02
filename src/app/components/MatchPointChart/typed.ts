/**
 * Name           运行时状态的BUFF
 * Params:
 * @name          BUFF 名称
 * @logo          BUFF 图标
 * @nStackNum     BUFF 层数
 * @nRestFrame    BUFF 剩余时间
 */
export interface RuntimeBuff {
  name: string,
  logo: string,
  nStackNum: number,
  nRestFrame: number,
};


/**
 * Name           运行时状态的技能
 * Params:
 * @name          技能名称
 * @logo          技能图标
 * @cd            技能CD
 * @nOverdraft    剩余透支层数
 * @nRecharge     剩余充能层数
 */
export interface RuntimeSkill {
  name: string,
  logo: string,
  cd: number,
  nOverdraft: number,
  nRecharge: number,
};


/**
 * Name           运行时玩家
 * Params:
 * @name          玩家名称
 * @forceLogo     玩家门派图标
 * @buffs         BUFF时间轴（1秒一个元素）
 * @skills        技能时间轴（1秒一个元素）
 */
export interface RuntimePlayer {
  name: string;
  forceLogo: string;
  buffs: Array<Array<RuntimeBuff>>;
  skills: Array<Array<RuntimeSkill>>;
}