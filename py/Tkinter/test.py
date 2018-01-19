# coding:utf-8
import re, sys, os, threading, time, json
from Tkinter import *
import tkMessageBox

class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()
        self.addBtn()

    def createWidgets(self):
        self.nameInput = Entry(self)
        self.nameInput.pack()
        self.alertButton = Button(self, text='Hello', command=self.hello)
        self.alertButton.pack()

    def addBtn(self):
        self.alertButton = Button(self, text='start', command=self.run)
        self.alertButton.pack()

    def hello(self):
        name = self.nameInput.get() or 'world'
        tkMessageBox.showinfo('Message', 'Hello, %s' % name)

    def run(self):
    	os.system('jt');


#哈哈
app = Application()

app.master.title('jt-tool')

app.mainloop()
