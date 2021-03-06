module.exports = {
  starting_hp: 8,
  load: 8,
  damage: 'd6',
  looks: ['Distrusting eyes, kind eyes, tired eyes', 'Helmeted head, military cut, or bald', 'Plain clothes, worn outfit, or uniform', 'Thin body, fit body, flabby body'],
  starting_moves: ['i_am_justice', 'detective', 'confessor', 'take_them_alive'],
  advanced_moves_1: ['this_ones_mine', 'targeted_investigation', 'your_eyes_betray_you', 'torturer', 'local_informant'],
  alignments: {
    good: {
      name: 'Good',
      description: 'Show mercy or leniency to an enemy.'
    },
    evil: {
      name: 'Evil',
      description: 'Hurt someone more than you need to.'
    },
    anarchic: {
      name: 'Anarchic',
      description: 'Try something that\'s so crazy it just might work.'
    }
  },
  bonds: [
    '<blank></blank> knows much about the enemy\'s ways, I should use that knowledge.',
    '<blank></blank> walks a thin line too close to sedition, I should guide them.',
    '<blank></blank> has helped me defeat a formidable foe, I should repay them in kind.'
  ],
  description: '<p>Investigator is a detective. They\'ve got a nose for heresy.',
  starting_gear: '<p class="NoIndent">Your load is <gamedata path="classes.investigator.load"></gamedata>+STR. You start with <name item="rations"></name> and a <name item="stub_revolver"></name> (<loop items="items.stub_revolver.tags" glue=", "><span class="tag" tag="__item__">__item__</span></loop>). Choose your melee weapon:</p>' +
  '<ul class="options-list"><li>{{{item "warhammer"}}}</li>' +
  '<li>{{{item "shock_maul"}}}</li></ul>' +
  '<p>Choose your armor:</p>' +
  '<ul class="OptionsList"><li><name item="leather_armor"></name> (<loop items="items.shock_maul.tags" glue=", "><span class="tag" tag="__item__">__item__</span></loop>)and a <name item="shield"></name> (<loop items="items.shock_maul.tags" glue=", "><span class="tag" tag="__item__">__item__</span></loop>)</li>' +
  '<li><name item="flak_armor"></name> (<loop items="items.shock_maul.tags" glue=", "><span class="tag" tag="__item__">__item__</span></loop>)</li></ul>'
};
