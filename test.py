import pandas as pd
import requests
import matplotlib.pyplot as plot
from pylab import mpl

mpl.rcParams['font.sans-serif'] = ['FangSong']  # 指定默认字体
mpl.rcParams['axes.unicode_minus'] = False  # 解决保存图像是负号'-'显示为方块的问题

_dict = [
    {
        "field1": 10, "field2": 20
    },
    {
        "field1": 10, "field2": 20
    }
]
pd.DataFrame(_dict)

df = pd.read_excel('data/all_days.xlsx')
df = df.iloc[:-1]
print(df.head())
# print(df)
# df = df.sort_index(ascending=False, axis=0).reset_index(drop=True)
# df.plot()
# plot.show()
#
#
# print(df)

requests

