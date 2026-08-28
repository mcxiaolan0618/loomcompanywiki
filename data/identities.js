const IDENTITIES_INDEX = [
    {
        id: 'LCR员工-萨尔温',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '2.0' },
            pierce: { physics: '突刺', resistance: '1.0' },
            blunt:  { physics: '打击', resistance: '0.5' }
        },
        skillTop:    { physics: '打击', sin: '暴怒' },
        skillMiddle: { physics: '斩击', sin: '色欲' },
        skillBottom: { physics: '突刺', sin: '怠惰' },
        combatPassive:  { sin: '暴怒', way: '持有', need: '4' },
        supportPassive: { sin: '色欲', way: '共鸣', need: '3' }
    },
    {
        id: 'LCR员工-于连',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '1.0' },
            pierce: { physics: '突刺', resistance: '2.0' },
            blunt:  { physics: '打击', resistance: '1.0' }
        },
        skillTop:    { physics: '突刺', sin: '色欲' },
        skillMiddle: { physics: '打击', sin: '暴怒' },
        skillBottom: { physics: '斩击', sin: '忧郁' },
        combatPassive:  { sin: '色欲', way: '持有', need: '3' },
        supportPassive: { sin: '暴怒', way: '共鸣', need: '2' }
    },
    {
        id: 'LCR员工-帕菲',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '0.5' },
            pierce: { physics: '突刺', resistance: '1.0' },
            blunt:  { physics: '打击', resistance: '2.0' }
        },
        skillTop:    { physics: '突刺', sin: '忧郁' },
        skillMiddle: { physics: '突刺', sin: '傲慢' },
        skillBottom: { physics: '突刺', sin: '色欲' },
        combatPassive:  { sin: '傲慢', way: '共鸣', need: '3' },
        supportPassive: { sin: '傲慢', way: '共鸣', need: '3' }
    },
    {
        id: 'LCR员工-圣华',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '1.0' },
            pierce: { physics: '突刺', resistance: '0.5' },
            blunt:  { physics: '打击', resistance: '1.0' }
        },
        skillTop:    { physics: '打击', sin: '忧郁' },
        skillMiddle: { physics: '斩击', sin: '傲慢' },
        skillBottom: { physics: '突刺', sin: '暴怒' },
        combatPassive:  { sin: '忧郁', way: '持有', need: '4' },
        supportPassive: { sin: '傲慢', way: '共鸣', need: '3' }
    },
    {
        id: 'LCR员工-爱德蒙',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '2.0' },
            pierce: { physics: '突刺', resistance: '0.5' },
            blunt:  { physics: '打击', resistance: '1.0' }
        },
        skillTop:    { physics: '突刺', sin: '暴食' },
        skillMiddle: { physics: '打击', sin: '怠惰' },
        skillBottom: { physics: '斩击', sin: '色欲' },
        combatPassive:  { sin: '暴食', way: '持有', need: '3' },
        supportPassive: { sin: '怠惰', way: '共鸣', need: '2' }
    },
    {
        id: 'LCR员工-伍符',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '1.0' },
            pierce: { physics: '突刺', resistance: '2.0' },
            blunt:  { physics: '打击', resistance: '0.5' }
        },
        skillTop:    { physics: '斩击', sin: '傲慢' },
        skillMiddle: { physics: '突刺', sin: '忧郁' },
        skillBottom: { physics: '打击', sin: '暴食' },
        combatPassive:  { sin: '傲慢', way: '持有', need: '5' },
        supportPassive: { sin: '忧郁', way: '共鸣', need: '3' }
    },
    {
        id: 'LCR员工-墨严卿',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '0.5' },
            pierce: { physics: '突刺', resistance: '1.0' },
            blunt:  { physics: '打击', resistance: '2.0' }
        },
        skillTop:    { physics: '打击', sin: '色欲' },
        skillMiddle: { physics: '打击', sin: '暴食' },
        skillBottom: { physics: '打击', sin: '暴怒' },
        combatPassive:  { sin: '色欲', way: '共鸣', need: '2' },
        supportPassive: { sin: '色欲', way: '持有', need: '3' }
    },
    {
        id: 'LCR员工-加拉哈德',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '2.0' },
            pierce: { physics: '突刺', resistance: '1.0' },
            blunt:  { physics: '打击', resistance: '0.5' }
        },
        skillTop:    { physics: '突刺', sin: '色欲' },
        skillMiddle: { physics: '打击', sin: '怠惰' },
        skillBottom: { physics: '突刺', sin: '忧郁' },
        combatPassive:  { sin: '忧郁', way: '持有', need: '4' },
        supportPassive: { sin: '忧郁', way: '持有', need: '3' }
    },
    {
        id: 'LCR员工-阿里',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '2.0' },
            pierce: { physics: '突刺', resistance: '1.0' },
            blunt:  { physics: '打击', resistance: '0.5' }
        },
        skillTop:    { physics: '斩击', sin: '忧郁' },
        skillMiddle: { physics: '斩击', sin: '怠惰' },
        skillBottom: { physics: '斩击', sin: '傲慢' },
        combatPassive:  { sin: '怠惰', way: '持有', need: '3' },
        supportPassive: { sin: '怠惰', way: '持有', need: '6' }
    },
    {
        id: 'LCR员工-珂赛特',
        rarity: 1,
        extract: '常驻',
        keywords: ['织机公司', 'LCR'],
        resist: {
            slash:  { physics: '斩击', resistance: '1.0' },
            pierce: { physics: '突刺', resistance: '2.0' },
            blunt:  { physics: '打击', resistance: '1.0' }
        },
        skillTop:    { physics: '打击', sin: '傲慢' },
        skillMiddle: { physics: '斩击', sin: '忧郁' },
        skillBottom: { physics: '突刺', sin: '暴怒' },
        combatPassive:  { sin: '傲慢', way: '持有', need: '3' },
        supportPassive: { sin: '忧郁', way: '共鸣', need: '5' }
    }
];