package svc

import (
	"api/api/internal/config"
	"api/rpc/shorturl/transformer"

	"github.com/zeromicro/go-zero/zrpc"
)

type ServiceContext struct {
	Config   config.Config
	Shorturl transformer.Transformer
}

func NewServiceContext(c config.Config) *ServiceContext {
	return &ServiceContext{
		Config:   c,
		Shorturl: transformer.NewTransformer(zrpc.MustNewClient(c.Shorturl)),
	}
}
