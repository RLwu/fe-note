# 数据可视化--Jupyter

## Tips

1.测试环境：windows10

2.Jupyter的官网建议用Anaconda安装Jupyte

见  http://jupyter.readthedocs.io/en/latest/install.html


3.版本：Python 3.5.2   |   Anaconda 4.1.1 (64-bit)

## 步骤
### 1)在docker环境中，下载并安装anaconda3镜像

       docker pull continuumio/anaconda3

       docker run -i -t -p 8888:8888 continuumio/anaconda3 /bin/bash

      /opt/conda/bin/conda install jupyter -y --quiet && mkdir /opt/notebooks &&   /opt/conda/bin/jupyter notebook --notebook-dir=/opt/notebooks --ip='*' --port=8888 --no-browser

### 2)安装psycopg2

        apt-get install gcc

        apt-get install libpq-dev python-dev

        pip install psycopg2


### 3)打开http://192.168.99.100:8888/ 查看Jupyter笔记本，就可以开始工作啦！
