export const DESKTOP_ROW_LENGTH = 21;
export const MOBILE_ROW_LENGTH = 15;

export const FLIP_DURATION = 0.08; // Very short duration for fast cycle animation
export const CYCLE_DELAY = 30; // ms delay between each intermediate character flip
export const AUTO_FLIP_INTERVAL = 3500; // ms interval for automatic flip

// Alphanumeric character set for the flip cycle, including common symbols and space
export const ALPHANUMERIC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789- /.'.split('');