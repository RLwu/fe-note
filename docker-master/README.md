# Docker
***

> 这里是项目中学习到的一些知识

***
## 配置运行环境步骤：

进入BIOS，Enable 虚拟化选项

### 配置Docker环境

1.安装docker toolbox: http://get.daocloud.io/  
2.Windows上可以安装XShell或者Mobaxterm <br>
3.启动docker toolbox
 - Windows：使用XShell或者Mobaxterm连接Docker Host：IP（默认IP）:192.168.99.100 用户名：docker 密码：tcuser  
   Windows 上也可使用快捷方式“Docker Quickstart Terminal” (启动 "C:\Program Files\Git\bin\bash.exe" --login -i "C:\Program Files\Docker Toolbox\start.sh" 不需要输入用户名密码。）
      QuickStart Terminal命令行可以通过执行"docker-machine ssh " 进入Docker宿主虚拟机，等同于使用ssh客户端连接到192.168.99.100

 - Mac用户： `ssh docker@000.000.00.000`
<br>
4.使用wget从苏州服务器上将image镜像下载到本地；或从u盘拷贝到本地。 
目录：window的C:/Users/<user-name> 在Docker Toolbox Terminal可见，建议把文件拷到该目录。

```
    $ df -h (选择容量足够放image的本地mount目录，cd 进去)
    $ scp warner@00.000.000.000:/home/warner/docker-images/web ./    (下载image到当前目录)
    $ docker load -i <image的名字，此处为web> 
```
<br>
5.开发流程和相应的环境：<br>
5.1 Windows和Docker容器之间的文件夹共享
 - 比较麻烦的工作流程是：Windows本机和Docker容器使用git同步，例如，Windows/PyCharm编辑修改源文件后，使用`git commit/push`推送到远端repo，然后在Docker容器中运行`git pull`命令拉取。<br>
 - 推荐使用改进后的简单的流程，可以通过Windows和Docker直接共享文件夹，设置过程如下：

为了提高镜像的下载速度，可以通过以下命令启用国内的docker hub镜像（daocloud.io)，不是必须执行，方法如下：
```
    $ docker-machine ssh default  //确保登录到了虚拟机-如果已经在虚拟机内，忽略该步
    $ curl -sSL https://get.daocloud.io/daomonit/install.sh | sh -s bd259d53132a67355fb020dc94fe5244702c1cfb
```
启动samba容器
```
    $ docker-machine ssh default    //确保登录到了虚拟机-如果已经在虚拟机内，忽略该步
    $ docker run -v /data -p 139:139 -p 445:445 -d --name my-data dperson/samba -s "data;/data;yes;no;yes;all"
```
然后：执行docker ps命令查看my-data容器是否启动成功。<br>
     浏览器输入`\\192.168.99.100\data`，确认共享成功且有写权限, 推荐在Windows中映射网络驱动器，将此链接粘进去即可。<br>
      启动工作容器，增加参数自动挂载共享卷（文件夹），此处以镜像名称web为例：
```
    $ docker run -p 8000:8000 -it --name tanzhenweb --volumes-from my-data web /bin/bash
```
进入samba后者tanzhen web container，设置文件夹的权限
```
  # chmod go+w -R /data
```

 - 注意
 1：不要在Docker容器里clone代码，要在Windows电脑中运行`git clone`把代码clone到共享目录（映射的网络磁盘），然后在Docker容器中`/data`目录下即可运行Django项目<br>
 2：指定共享目录为/home/docker/data 是为了用最简单的方式赋予window下的写权限。 由docker目录自动分配源volume，window下无法写，及时为nodoby设置了读写权限也不行。
3：重启电脑或者VirtualBox VM后，需要把dperson/samba这个container start起来，否则window上看不到共享文件。
4： 不要删掉depson/samba  container ，可能会造成数据会丢失。（如果使用volume的container都不在了，这个volume会被docker释放，导致数据丢失）

5.2 Mac与Docker容器之间共享目录
与Windows不同，只需要在运行容器时加载指定位置路径即可，如[Mac Shared Directories of Docker official doc](https://blog.docker.com/2014/10/docker-1-3-signed-images-process-injection-security-options-mac-shared-directories/)所说明的一样。
```
    $ docker-machine ssh default 
    $ mkdir /home/docker/data    
    $ docker run -p 8000:8000 -it --name web-project  -v /Users/hongbin/web-project:/data web /bin/bash
``` 

6.修改git的配置环境

### Docker 基本命令：  

1.查看当前所有镜像。   
```
    $ docker images
```
2.启动容器  <br>
-- 不使用共享目录
```
    $ sudo docker run -p 8000:8000 -i -t web /bin/bash
```
-- 使用共享目录：
```
    $ sudo docker run -p 8000:8000 -it --volumes-from my-data web /bin/bash
```
3.提交保存当前镜像到本地（此处有待改进，Windows/Mac有方法能省略commit命令，自动保存）  
```
    $ docker ps (查看当前运行的container)
    $ sudo docker commit <container id>  <image name>  (保存当前container到本地镜像)
```
## Django project 环境
_说明：使用最新的镜像，这两步可以忽略，source操作和cd命令已经加入.bashrc文件。_

1.进入project项目根目录： 
```
    $ cd /root/dmp/projects/web/web-project   
```

2.设置环境变量   
```
    $ source ../env/bin/activate
```

###  Git 操作
查看分支
```
    $ git branch -a
```
切换到分支,并拉取最新代码
```
    $ git checkout <your branch>
    $ git pull
```  

## 邮件服务器

__目前的开发环境中不需要配置邮件服务器__，如果需要搭建本地开发环境的邮件服务,从[https://github.com/mailhog/MailHog](https://github.com/mailhog/MailHog)下载二进制文件到项目根目录，直接运行。   

### 安装依赖包

运行下面的命令安装系统所需软件和依赖包，以及所需的Python三方库。
```
    $ install_os_dependencies.sh install
    $ install_python_dependencies.sh
```

## 运行缓存服务器

运行命令下面的命令启动Redis服务：
```
    $ redis-server --port 7777 &
```
  
### 数据库连接环境变量

下面的命令已写入.bashrc中，不再需要手动执行：
```
    $ export DATABASE_URL=postgres://tanzhen:tanzhen1401@182.92.196.148:5432/tanzhen_app
```

### 国际化（主要针对HTML模板）：

进入tanzhen_app项目根目录，其中locale/zh_CN/LC_MESSAGES/allauth 和django.po两个文件。   
allauth表示allauth自带模板的翻译，django.po表示自己模板的翻译。  
修改两个文件，之后运行：  
```
    $ ./international.sh
```
如果出现fuzzy的注释，导致未能翻译出来，那么删除fuzzy这一行，再次执行：
```
    $ ./international.sh
```


### 运行项目
在tanzhan_app项目根目录中执行
```
    $ python manage.py runserver 0.0.0.0:8000
```

***

> [非常详细的Docker学习笔记](http://www.open-open.com/lib/view/open1423703640748.html#articleHeader3)

***
<details><summary>Table of Contents</summary>

<!-- toc -->

- [Docker简介](#Introduction)
- [Docker安装](#Install)
- [Docker基础用法](#Basic-Usage)

<!-- tocstop -->

## Introduction

Docker 两个主要部件：

* Docker: 开源的容器虚拟化平台
* Docker Hub: 用于分享、管理 Docker 容器的 Docker SaaS 平台 -- [Docker Hub](https://hub.docker.com/)<br/>
Docker 使用客户端-服务器 (C/S) 架构模式。Docker 客户端会与 Docker 守护进程进行通信。<br/>
Docker 守护进程会处理复杂繁重的任务，例如建立、运行、发布你的 Docker 容器。Docker 客户端和守护进程可以运行在同一个系统上，当然你也可以使用 Docker 客户端去连接一个远程的 Docker 守护进程。Docker 客户端和守护进程之间通过 socket 或者 RESTful API 进行通信。<br/>

<img src="images/docker/host.png"/>

### 1.1 Docker 守护进程

如上图所示，Docker 守护进程运行在一台主机上。用户并不直接和守护进程进行交互，而是通过 Docker 客户端间接和其通信。

### 1.2 Docker 客户端

Docker 客户端，实际上是 docker 的二进制程序，是主要的用户与 Docker 交互方式。它接收用户指令并且与背后的 Docker 守护进程通信，如此来回往复。

### 1.3 Docker 内部

要理解 Docker 内部构建，需要理解以下三种部件：

* Docker 镜像 - Docker images
* Docker 仓库 - Docker registeries
* Docker 容器 - Docker containers

**Docker 镜像**

Docker 镜像是 Docker 容器运行时的只读模板，每一个镜像由一系列的层 (layers) 组成。Docker 使用 UnionFS 来将这些层联合到单独的镜像中。UnionFS 允许独立文件系统中的文件和文件夹(称之为分支)被透明覆盖，形成一个单独连贯的文件系统。正因为有了这些层的存在，Docker 是如此的轻量。当你改变了一个 Docker 镜像，比如升级到某个程序到新的版本，一个新的层会被创建。因此，不用替换整个原先的镜像或者重新建立(在使用虚拟机的时候你可能会这么做)，只是一个新 的层被添加或升级了。现在你不用重新发布整个镜像，只需要升级，层使得分发 Docker 镜像变得简单和快速。

**Docker 仓库**

Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。同样的，Docker 仓库也有公有和私有的概念。公有的 Docker 仓库名字是 Docker Hub。Docker Hub 提供了庞大的镜像集合供使用。这些镜像可以是自己创建，或者在别人的镜像基础上创建。Docker 仓库是 Docker 的分发部分。

**Docker 容器**

Docker 容器和文件夹很类似，一个Docker容器包含了所有的某个应用运行所需要的环境。每一个 Docker 容器都是从 Docker 镜像创建的。Docker 容器可以运行、开始、停止、移动和删除。每一个 Docker 容器都是独立和安全的应用平台，Docker 容器是 Docker 的运行部分。

### 1.4 libcontainer

Docker 从 0.9 版本开始使用 libcontainer 替代 lxc，libcontainer 和 Linux 系统的交互图如下：

<img src="images/docker/libcontainer.png"/>

> 图片来源: [Docker 0.9: introducing execution drivers and libcontainer](Docker 0.9: introducing execution drivers and libcontainer)

### 1.5 命名空间「Namespaces」

**pid namespace**<br/>
不同用户的进程就是通过 pid namespace 隔离开的，且不同 namespace 中可以有相同 PID。具有以下特征:

* 每个 namespace 中的 pid 是有自己的 pid=1 的进程(类似 /sbin/init 进程)
* 每个 namespace 中的进程只能影响自己的同一个 namespace 或子 namespace 中的进程
* 因为 /proc 包含正在运行的进程，因此在 container 中的 pseudo-filesystem 的 /proc 目录只能看到自己 namespace 中的进程
* 因为 namespace 允许嵌套，父 namespace 可以影响子 namespace 的进程，所以子 namespace 的进程可以在父 namespace 中看到，但是具有不同的 pid<br/>

> 参考文档：[Introduction to Linux namespaces – Part 3: PID](https://blog.yadutaf.fr/2014/01/05/introduction-to-linux-namespaces-part-3-pid/)

**mnt namespace**
类似 chroot，将一个进程放到一个特定的目录执行。mnt namespace 允许不同 namespace 的进程看到的文件结构不同，这样每个 namespace 中的进程所看到的文件目录就被隔离开了。同 chroot 不同，每个 namespace 中的 container 在 /proc/mounts 的信息只包含所在 namespace 的 mount point。

**net namespace**
网络隔离是通过 net namespace 实现的， 每个 net namespace 有独立的 network devices, IP addresses, IP routing tables, /proc/net 目录。这样每个 container 的网络就能隔离开来。 docker 默认采用 veth 的方式将 container 中的虚拟网卡同 host 上的一个 docker bridge 连接在一起。

> 参考文档：[Introduction to Linux namespaces – Part 5: NET](https://blog.jtlebi.fr/2014/01/19/introduction-to-linux-namespaces-part-5-net/)

**uts namespace**
UTS ("UNIX Time-sharing System") namespace 允许每个 container 拥有独立的 hostname 和 domain name, 使其在网络上可以被视作一个独立的节点而非 Host 上的一个进程。

> 参考文档：[Introduction to Linux namespaces – Part 1: UTS](https://blog.jtlebi.fr/2013/12/22/introduction-to-linux-namespaces-part-1-uts/)

**ipc namespace**
container 中进程交互还是采用 Linux 常见的进程间交互方法 (interprocess communication - IPC), 包括常见的信号量、消息队列和共享内存。然而同 VM 不同，container 的进程间交互实际上还是 host 上具有相同 pid namespace 中的进程间交互，因此需要在IPC资源申请时加入 namespace 信息 - 每个 IPC 资源有一个唯一的 32bit ID。

> 参考文档：[Introduction to Linux namespaces – Part 2: IPC](https://blog.jtlebi.fr/2013/12/28/introduction-to-linux-namespaces-part-2-ipc/)

**user namespace**
每个 container 可以有不同的 user 和 group id, 也就是说可以以 container 内部的用户在 container 内部执行程序而非 Host 上的用户。<br/>

有了以上 6 种 namespace 从进程、网络、IPC、文件系统、UTS 和用户角度的隔离，一个 container 就可以对外展现出一个独立计算机的能力，并且不同 container 从 OS 层面实现了隔离。 然而不同 namespace 之间资源还是相互竞争的，仍然需要类似 ulimit 来管理每个 container 所能使用的资源 - cgroup。

**Reference**
* [Docker Getting Start: Related Knowledge](http://tiewei.github.io/cloud/Docker-Getting-Start/)
* [Docker 介绍以及其相关术语、底层原理和技术](https://ruby-china.org/topics/22004)

### 1.6 资源配额「cgroups」
cgroups 实现了对资源的配额和度量。 cgroups 的使用非常简单，提供类似文件的接口，在 /cgroup 目录下新建一个文件夹即可新建一个 group，在此文件夹中新建 task 文件，并将 pid 写入该文件，即可实现对该进程的资源控制。具体的资源配置选项可以在该文件夹中新建子 subsystem ，{子系统前缀}.{资源项} 是典型的配置方法， 如 memory.usageinbytes 就定义了该 group 在 subsystem memory 中的一个内存限制选项。 另外，cgroups 中的 subsystem 可以随意组合，一个 subsystem 可以在不同的 group 中，也可以一个 group 包含多个 subsystem - 也就是说一个 subsystem。

* memory<br/>
> 内存相关的限制
* cpu<br/>
> 在 cgroup 中，并不能像硬件虚拟化方案一样能够定义 CPU 能力，但是能够定义 CPU 轮转的优先级，因此具有较高 CPU 优先级的进程会更可能得到 CPU 运算。 通过将参数写入 cpu.shares ,即可定义改 cgroup 的 CPU 优先级 - 这里是一个相对权重，而非绝对值
* blkio<br/>
>  block IO 相关的统计和限制，byte/operation 统计和限制 (IOPS 等)，读写速度限制等，但是这里主要统计的都是同步 IO
* devices<br/>
>  设备权限限制<br/>

> 参考文档：[how to use cgroup](http://tiewei.github.io/devops/howto-use-cgroup/)

## Install

docker 的相关安装方法这里不作介绍，具体安装参考 [官档](https://docs.docker.com/engine/installation/)<br/>

获取当前 docker 版本
```
    $ sudo docker version
    Client version: 1.3.2
    Client API version: 1.15
    Go version (client): go1.3.3
    Git commit (client): 39fa2fa/1.3.2
    OS/Arch (client): linux/amd64
    Server version: 1.3.2
    Server API version: 1.15
    Go version (server): go1.3.3
    Git commit (server): 39fa2fa/1.3.2
```

## Basic-Usage

Docker HUB : Docker镜像首页，包括官方镜像和其它公开镜像<br/>

因为国情的原因，国内下载 Docker HUB 官方的相关镜像比较慢，可以使用 docker.cn 镜像，镜像保持和官方一致，关键是速度块，推荐使用。

### 3.1 Search images

```
   $ sudo docker search ubuntu
```

### 3.2 Pull images

```
    $ sudo docker pull ubuntu # 获取 ubuntu 官方镜像 $ sudo docker images # 查看当前镜像列表
```

### 3.3 Running an interactive shell

```
   $ sudo docker run -i -t ubuntu:14.04 /bin/bash
```

* docker run - 运行一个容器
* -t - 分配一个（伪）tty (link is external)
* -i - 交互模式 (so we can interact with it)
* ubuntu:14.04 - 使用 ubuntu 基础镜像 14.04
* /bin/bash - 运行命令 bash shell
注: ubuntu 会有多个版本，通过指定 tag 来启动特定的版本 [image]:[tag]

```
    $ sudo docker ps # 查看当前运行的容器
    ps -a 列出当前系统所有的容器 
    CONTAINER ID        
    IMAGE               
    COMMAND             
    CREATED             
    STATUS             
    PORTS               
    NAMES
    6c9129e9df10       
    ubuntu:14.04        
    /bin/bash 6 minutes ago       
    Up 6 minutes                            
    cranky_babbage
```

### 3.4 相关快捷键

* 退出：Ctrl-Dorexit
* detach：Ctrl-P + Ctrl-Q
* attach:docker attach CONTAINER-ID
