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
COPY api/etc /app/etc
RUN go build -ldflags="-s -w" -o /app/marcustut api/marcustut.go


FROM scratch

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /usr/share/zoneinfo/Asia/Kuala_Lumpur /usr/share/zoneinfo/Asia/Kuala_Lumpur
ENV TZ Asia/Kuala_Lumpur

WORKDIR /app
COPY --from=builder /app/marcustut /app/marcustut
COPY --from=builder /app/etc /app/etc

CMD ["./marcustut", "-f", "etc/marcustut-api.yaml"]
