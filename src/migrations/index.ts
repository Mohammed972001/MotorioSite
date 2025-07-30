import * as migration_20250730_161620 from './20250730_161620';

export const migrations = [
  {
    up: migration_20250730_161620.up,
    down: migration_20250730_161620.down,
    name: '20250730_161620'
  },
];
