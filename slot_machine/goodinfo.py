import os
import subprocess
import requests
import bs4
import pandas as pd
import json
import datetime
from git import Repo

# 取得現在時間
now = datetime.datetime.now()
txt = '上次更新時間為：' + str(now)
# 轉成df
df = pd.DataFrame([txt], index=['UpdateTime'])
# 存出檔案
df.to_csv('D:/user/Desktop/Kennykoala_github_io/Kennykoala.github.io/slot_machine/runlog.txt', header=False)

#使用requests
url = "https://goodinfo.tw/StockInfo/StockList.asp?RPT_TIME=&MARKET_CAT=%E7%86%B1%E9%96%80%E6%8E%92%E8%A1%8C&INDUSTRY_CAT=%E5%A4%96%E8%B3%87%E7%B4%AF%E8%A8%88%E8%B2%B7%E8%B6%85%E9%87%91%E9%A1%8D+%E2%80%93+%E7%95%B6%E6%97%A5%40%40%E5%A4%96%E8%B3%87%E7%B4%AF%E8%A8%88%E8%B2%B7%E8%B6%85%40%40%E5%A4%96%E8%B3%87%E8%B2%B7%E8%B6%85%E9%87%91%E9%A1%8D+%E2%80%93+%E7%95%B6%E6%97%A5"
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'}
res = requests.get(url,headers=headers)
res.encoding = "utf-8"

#使用bs4的BeautifulSoup
soup = bs4.BeautifulSoup(res.text,"lxml")
data = soup.select_one("#divStockList")

#使用pandas
df = pd.read_html(data.prettify())
#第[1]個為我們要的表格
dfs = df[0]
#將重複的標頭篩選掉
# dfs.columns = dfs.columns.get_level_values(0)
#顯示頭10筆資料
# print(dfs.head(10))
# dfs = dfs.drop(dfs.index[[0,0]])
dfs.columns = ["排名", "代號", "名稱", "市場", "成交", "漲跌價", "漲跌幅", "成交張數", "法人買賣日期", "外資買進金額", "外資賣出金額", "外資買賣超金額", "投信買進金額", "投信賣出金額", "投信買賣超金額", "自營買進金額", "自營賣出金額", "自營買賣超金額", "合計買進金額", "合計賣出金額", "合計買賣超金額", "法人買賣超註記"]
repeat = dfs[dfs["代號"] == "代號"].index
dfs.drop(repeat, inplace=True)
# print(dfs.head(50))
# print(dfs)
dfs.index = range(len(dfs.index))
# 轉JSON
ranking = dfs.to_json(orient = 'records',force_ascii=False)
# print(ranking)
with open('D:/user/Desktop/Kennykoala_github_io/Kennykoala.github.io/slot_machine/ranking.json', 'w+', encoding='utf-8') as f:
    f.write(ranking)
    # json.dump(ranking, f, ensure_ascii=False, indent=4)

# subprocess.call(['sh', 'D:/user/Desktop/Kennykoala_github_io/Kennykoala.github.io/slot_machine/ranking.sh'])
# os.system('ranking.sh')

dirfile = os.path.abspath('') # code的文件位置
repo = Repo(dirfile)

g = repo.git
g.add("D:/user/Desktop/Kennykoala_github_io/Kennykoala.github.io/slot_machine/ranking.json")
g.commit("-m auto update")
g.push()
print("Successful push!")





