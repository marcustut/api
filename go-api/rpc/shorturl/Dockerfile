FROM golang:alpine AS builder

LABEL stage=gobuilder

ENV CGO_ENABLED 0
ENV GOPROXY https://goproxy.cn,direct

RUN apk update --no-cache && apk add --no-cache tzdata

WORKDIR /build

ADD go.mod .
ADD go.sum .
RUN go mod download
COPY . .
COPY rpc/shorturl/etc /app/etc
RUN go build -ldflags="-s -w" -o /app/shorturl rpc/shorturl/shorturl.go


FROM scratch

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /usr/share/zoneinfo/Asia/Shanghai /usr/share/zoneinfo/Asia/Shanghai
ENV TZ Asia/Kuala_Lumpur

WORKDIR /app
COPY --from=builder /app/shorturl /app/shorturl
COPY --from=builder /app/etc /app/etc

CMD ["./shorturl", "-f", "etc/shorturl.yaml"]
