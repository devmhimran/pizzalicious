import { Plus_Jakarta_Sans } from "next/font/google";
import { DM_Serif_Text } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const dm_serif_text = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });

export const fonts = {
  plus_Jakarta_Sans,
  dm_serif_text,
};
