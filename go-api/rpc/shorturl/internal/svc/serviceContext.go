package svc

import (
	"api/rpc/model"
	"api/rpc/shorturl/internal/config"

	_ "github.com/lib/pq"
	"github.com/zeromicro/go-zero/core/stores/sqlx"
)

type ServiceContext struct {
	Config config.Config
	Model  model.ShortenModel
}

func NewServiceContext(c config.Config) *ServiceContext {
	return &ServiceContext{
		Config: c,
		Model:  model.NewShortenModel(sqlx.NewSqlConn("postgres", c.DataSource), c.Cache),
	}
}
