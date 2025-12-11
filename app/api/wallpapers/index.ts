import { narutoData } from "./data/naruto";
import { onePieceData } from "./data/one-piece";
import { demonSlayerData } from "./data/demon-slayer";
import { jjkData } from "./data/jjk";
import { aotData } from "./data/aot";
import { bleachData } from "./data/the-bleach";

import { narutoDataLive } from "./data_live/naruto";
import { onePieceDataLive } from "./data_live/one-piece";
import { demonSlayerDataLive } from "./data_live/demon-slayer";
import { jjkDataLive } from "./data_live/jjk";
import { aotDataLive } from "./data_live/aot";

import { bleachDataLive } from "./data_live/the-bleach";

export const wallpapers = [
  ...narutoData,
  ...onePieceData,
  ...demonSlayerData,
  ...jjkData,
  ...aotData,

  ...bleachData,

  // Live Data
  ...narutoDataLive,
  ...onePieceDataLive,
  ...demonSlayerDataLive,
  ...jjkDataLive,
  ...aotDataLive,

  ...bleachDataLive,
];

