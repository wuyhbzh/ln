#coding=utf-8

import csv

wbCsv = file('web.csv', 'wb')
writer = csv.writer(wbCsv)
writer.writerow(['h1', 'h2', 'h3'])
lines = [range(3) for i in range(5)]
for line in lines:
	writer.writerow(line)
wbCsv.close()

rbCsv = file('web.csv', 'rb')
reader = csv.reader(rbCsv)
t = [line for line in reader]

print[0][0]

print '1'