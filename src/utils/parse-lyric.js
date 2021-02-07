// [00:00.000] 作词 : 瞿子千/刘涛/温莨
// [00:01.000] 作曲 : 瞿子千/刘涛
// [00:02.000] 编曲 : 瞿子千
// [00:03.000] 制作人 : 瞿子千/刘涛
// [00:15.579]我愿变成一颗恒星
// [00:20.899]守护海底的蜂鸣

const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyric) {
 const line = lyric.split("\n");
 const lyrics = []
  for(let item of line) {
    if(item) {
      const result = reg.exec(item)
      if(!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 =result[3].length === 2 ? result[3] * 10 : result[3] * 1;
      const content = item.replace(reg,"");
      const time = time1 + time2 + time3;
      const lyricObj = {time,content}
      lyrics.push(lyricObj)
    }
  }
  return lyrics;
}