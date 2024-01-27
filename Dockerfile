FROM node:20.10.0-alpine
LABEL MAINTAINER="wangliang"

# 指定工作目录
WORKDIR /app

#RUN apt update

# 容器默认时区为UTC，如需使用上海时间请启用以下时区设置命令
#ENV TZ=Asia/Shanghai \
#    DEBIAN_FRONTEND=noninteractive
#RUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

# npm 源，选用国内镜像源以提高下载速度
#RUN npm config set registry https://mirrors.cloud.tencent.com/npm/

# 拷贝包管理文件
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install --omit=dev

COPY ./next.config.js /app
COPY ./.next/ /app/.next
COPY ./public /app/public

#COPY . /app

RUN ls -a

#CMD 运行以下命令
CMD ["npm", "start"]
