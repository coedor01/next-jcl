import { RuntimePlayer } from "./typed";

export const playersDemo1: Array<RuntimePlayer> = [
  {
    name: "player name1",
    forceLogo: "player logo1",
    buffs: [
      [
        {
          name: "buff name1",
          logo: "buff logo1",
          nStackNum: 3,
          nRestFrame: 3,
        },
        {
          name: "buff name2",
          logo: "buff logo2",
          nStackNum: 3,
          nRestFrame: 3,
        },
      ],
      [
        {
          name: "buff name1",
          logo: "buff logo1",
          nStackNum: 3,
          nRestFrame: 2,
        },
        {
          name: "buff name2",
          logo: "buff logo2",
          nStackNum: 3,
          nRestFrame: 2,
        },
      ],
    ],
    skills: [
      [
        {
          name: "skill name1",
          logo: "skill logo1",
          cd: 0,
          nOverdraft: 0,
          nRecharge: 2,
        },
        {
          name: "skill name2",
          logo: "skill logo2",
          cd: 4,
          nOverdraft: 2,
          nRecharge: 0,
        },
      ],
      [
        {
          name: "skill name1",
          logo: "skill logo1",
          cd: 0,
          nOverdraft: 0,
          nRecharge: 2,
        },
        {
          name: "skill name2",
          logo: "skill logo2",
          cd: 3,
          nOverdraft: 2,
          nRecharge: 0,
        },
      ],
    ],
  },
  {
    name: "player name2",
    forceLogo: "player logo2",
    buffs: [
      [
        {
          name: "buff name1",
          logo: "buff logo1",
          nStackNum: 3,
          nRestFrame: 3,
        },
        {
          name: "buff name2",
          logo: "buff logo2",
          nStackNum: 3,
          nRestFrame: 3,
        },
      ],
      [
        {
          name: "buff name1",
          logo: "buff logo1",
          nStackNum: 3,
          nRestFrame: 2,
        },
        {
          name: "buff name2",
          logo: "buff logo2",
          nStackNum: 3,
          nRestFrame: 2,
        },
      ],
    ],
    skills: [
      [
        {
          name: "skill name1",
          logo: "skill logo1",
          cd: 0,
          nOverdraft: 0,
          nRecharge: 2,
        },
        {
          name: "skill name2",
          logo: "skill logo2",
          cd: 4,
          nOverdraft: 2,
          nRecharge: 0,
        },
      ],
      [
        {
          name: "skill name1",
          logo: "skill logo1",
          cd: 0,
          nOverdraft: 0,
          nRecharge: 2,
        },
        {
          name: "skill name2",
          logo: "skill logo2",
          cd: 3,
          nOverdraft: 2,
          nRecharge: 0,
        },
      ],
    ],
  }
]